import { useState } from "react";
import { FaHotel, FaCar, FaMapMarkedAlt, FaHiking, FaSearch } from "react-icons/fa";

export default function AdminBookings() {

  const initialBookings = [
    {
      id: "BK001",
      customer: "John Smith",
      email: "john.smith@example.com",
      type: "Hotel",
      item: "Cinnamon Grand Colombo",
      date: "2026-07-10",
      price: 270,
      status: "Confirmed",
    },
    {
      id: "BK002",
      customer: "Sarah Lee",
      email: "sarah.lee@example.com",
      type: "Hotel",
      item: "Ocean View Hotel",
      date: "2026-07-12",
      price: 190,
      status: "Pending",
    },
    {
      id: "BK003",
      customer: "Kasun Perera",
      email: "kasun.p@example.com",
      type: "Vehicle",
      item: "Toyota Land Cruiser Prado",
      date: "2026-07-14",
      price: 240,
      status: "Confirmed",
    },
    {
      id: "BK004",
      customer: "Emily Davis",
      email: "emily.d@example.com",
      type: "Tour Package",
      item: "Hill Country Escape",
      date: "2026-08-01",
      price: 320,
      status: "Pending",
    },
    {
      id: "BK005",
      customer: "Nimal Fernando",
      email: "nimal.f@example.com",
      type: "Activity",
      item: "Whale Watching Tour",
      date: "2026-07-20",
      price: 45,
      status: "Cancelled",
    },
    {
      id: "BK006",
      customer: "Amanda Wilson",
      email: "amanda.w@example.com",
      type: "Vehicle",
      item: "Nissan Caravan",
      date: "2026-07-18",
      price: 160,
      status: "Confirmed",
    },
  ];

  const [bookings, setBookings] = useState(initialBookings);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const typeIcon = {
    "Hotel": <FaHotel />,
    "Vehicle": <FaCar />,
    "Tour Package": <FaMapMarkedAlt />,
    "Activity": <FaHiking />,
  };

  const statusStyle = {
    "Confirmed": "bg-green-500/20 text-green-400",
    "Pending": "bg-yellow-500/20 text-yellow-400",
    "Cancelled": "bg-red-500/20 text-red-400",
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.customer.toLowerCase().includes(search.toLowerCase()) ||
      b.item.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "All" || b.type === typeFilter;
    const matchesStatus = statusFilter === "All" || b.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const summary = {
    total: bookings.length,
    confirmed: bookings.filter((b) => b.status === "Confirmed").length,
    pending: bookings.filter((b) => b.status === "Pending").length,
    cancelled: bookings.filter((b) => b.status === "Cancelled").length,
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#111111] to-[#1C1C1C] border border-[#D4AF37]/20 rounded-2xl shadow-xl p-6 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-white"> User Bookings </h1>
          <p className="text-gray-400 mt-2"> View and manage all customer bookings </p>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A]">
          <h3 className="text-gray-400">Total Bookings</h3>
          <p className="text-white text-3xl font-bold mt-2">{summary.total}</p>
        </div>
        <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A]">
          <h3 className="text-gray-400">Confirmed</h3>
          <p className="text-green-400 text-3xl font-bold mt-2">{summary.confirmed}</p>
        </div>
        <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A]">
          <h3 className="text-gray-400">Pending</h3>
          <p className="text-yellow-400 text-3xl font-bold mt-2">{summary.pending}</p>
        </div>
        <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A]">
          <h3 className="text-gray-400">Cancelled</h3>
          <p className="text-red-400 text-3xl font-bold mt-2">{summary.cancelled}</p>
        </div>
      </div>

      {/* Bookings table */}
      <div className="bg-[#141414] rounded-3xl border border-[#2A2A2A] overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-8 py-6 border-b border-[#2A2A2A]">
          <h2 className="text-2xl text-white font-semibold"> All Bookings </h2>

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search customer, booking ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#1F1F1F] text-white pl-9 pr-4 py-2 rounded-xl border border-[#333333] outline-none focus:border-[#D4AF37] w-full md:w-64"
              />
            </div>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-[#1F1F1F] text-white px-4 py-2 rounded-xl border border-[#333333] outline-none focus:border-[#D4AF37]"
            >
              <option value="All">All Types</option>
              <option value="Hotel">Hotel</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Tour Package">Tour Package</option>
              <option value="Activity">Activity</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-[#1F1F1F] text-white px-4 py-2 rounded-xl border border-[#333333] outline-none focus:border-[#D4AF37]"
            >
              <option value="All">All Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#D4AF37] text-black">
                <th className="px-6 py-4 text-left">Booking ID</th>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Type</th>
                <th className="px-6 py-4 text-left">Item</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Price</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-6 py-10 text-center text-gray-500">
                    No bookings match your filters.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="border-b border-[#2A2A2A] hover:bg-[#1C1C1C]">
                    <td className="px-6 py-5 text-white">{b.id}</td>
                    <td className="px-6 py-5 text-gray-300">
                      <div>{b.customer}</div>
                      <div className="text-xs text-gray-500">{b.email}</div>
                    </td>
                    <td className="px-6 py-5 text-gray-300">
                      <div className="flex items-center gap-2">
                        {typeIcon[b.type]} {b.type}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-300">{b.item}</td>
                    <td className="px-6 py-5 text-gray-300">{b.date}</td>
                    <td className="px-6 py-5 text-[#D4AF37] font-semibold">${b.price}</td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle[b.status]}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        {b.status !== "Confirmed" && (
                          <button
                            onClick={() => updateStatus(b.id, "Confirmed")}
                            className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-lg hover:bg-green-500/30"
                          >
                            Confirm
                          </button>
                        )}
                        {b.status !== "Cancelled" && (
                          <button
                            onClick={() => updateStatus(b.id, "Cancelled")}
                            className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-lg hover:bg-red-500/30"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}