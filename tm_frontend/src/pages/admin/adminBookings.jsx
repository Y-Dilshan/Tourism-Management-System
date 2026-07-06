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

  // Pill-style status, matching the dashboard's "Confirmed / Pending" ledger badges
  const statusStyle = {
    "Confirmed": "bg-[#1A7A6E]/10 text-[#0D4F46] border-[#1A7A6E]/30",
    "Pending": "bg-[#C9A84C]/15 text-[#8A6D22] border-[#C9A84C]/40",
    "Cancelled": "bg-[#C45A2A]/10 text-[#C45A2A] border-[#C45A2A]/30",
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
      {/* Header — boarding-pass style */}
      <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
        <div className="flex-1 p-8">
          <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2"> Admin · Bookings Log </p>
          <h1 className="font-serif text-4xl text-[#0D2A24]"> User Bookings </h1>
          <p className="text-[#4B5F59] mt-2"> View and manage all customer bookings </p>
        </div>

        <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Status </p>
          <p className="font-serif text-2xl text-white mt-1"> {summary.total} Total </p>
        </div>
      </div>

      {/* Summary cards — stamp style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Total Bookings</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1">{summary.total}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#1A7A6E] flex items-center justify-center mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1A7A6E]" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Confirmed</p>
          <p className="font-serif text-3xl text-[#0D4F46] mt-1">{summary.confirmed}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Pending</p>
          <p className="font-serif text-3xl text-[#8A6D22] mt-1">{summary.pending}</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C45A2A] flex items-center justify-center mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C45A2A]" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Cancelled</p>
          <p className="font-serif text-3xl text-[#C45A2A] mt-1">{summary.cancelled}</p>
        </div>
      </div>

      {/* Bookings table — ledger style */}
      <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-8 py-6 border-b border-[#0D4F46]/15">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Ledger </p>
            <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> All Bookings </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5F59]/60 text-sm" />
              <input
                type="text"
                placeholder="Search customer, booking ID…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#F5EDD6] text-[#0D2A24] placeholder-[#4B5F59]/60 pl-9 pr-4 py-2 rounded-full border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] w-full md:w-64 text-sm"
              />
            </div>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-[#F5EDD6] text-[#0D2A24] px-4 py-2 rounded-full border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] text-sm"
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
              className="bg-[#F5EDD6] text-[#0D2A24] px-4 py-2 rounded-full border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] text-sm"
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
              <tr className="bg-[#0D4F46] text-[#F5EDD6]">
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Booking</th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Customer</th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Type</th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Item</th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Price</th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-6 py-10 text-center text-[#4B5F59] text-sm">
                    No bookings match your filters.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="border-b border-[#0D4F46]/10 hover:bg-[#F5EDD6]/70">
                    <td className="px-6 py-4 font-serif text-[#0D2A24]">{b.id}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="text-[#0D2A24]">{b.customer}</div>
                      <div className="text-xs text-[#4B5F59]">{b.email}</div>
                    </td>
                    <td className="px-6 py-4 text-[#4B5F59] text-sm">
                      <div className="flex items-center gap-2">
                        {typeIcon[b.type]} {b.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#4B5F59] text-sm">{b.item}</td>
                    <td className="px-6 py-4 text-[#4B5F59] text-sm">{b.date}</td>
                    <td className="px-6 py-4 font-serif text-[#C9A84C] font-semibold text-sm">${b.price}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold border ${statusStyle[b.status]}`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {b.status !== "Confirmed" && (
                          <button
                            onClick={() => updateStatus(b.id, "Confirmed")}
                            className="text-xs uppercase tracking-wide bg-[#1A7A6E]/10 text-[#0D4F46] border border-[#1A7A6E]/30 px-3 py-1 rounded-full hover:bg-[#1A7A6E]/20 transition"
                          >
                            Confirm
                          </button>
                        )}
                        {b.status !== "Cancelled" && (
                          <button
                            onClick={() => updateStatus(b.id, "Cancelled")}
                            className="text-xs uppercase tracking-wide bg-[#C45A2A]/10 text-[#C45A2A] border border-[#C45A2A]/30 px-3 py-1 rounded-full hover:bg-[#C45A2A]/20 transition"
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