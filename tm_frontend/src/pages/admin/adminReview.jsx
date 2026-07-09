import { useState } from "react";
import { MdReviews, MdOutlineStarPurple500 } from "react-icons/md";
import { FaStar, FaRegStar, FaFlag } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoCheckmarkCircle, IoTrash } from "react-icons/io5";

const REVIEWS = [
  {
    id: "RV014",
    customer: "John Smith",
    target: "Beach Resort",
    category: "Hotel",
    rating: 5,
    date: "2026-06-23",
    comment: "Stunning ocean views and the staff went out of their way to make our anniversary special.",
    status: "Published",
  },
  {
    id: "RV013",
    customer: "Sarah Lee",
    target: "Ocean View Hotel",
    category: "Hotel",
    rating: 2,
    date: "2026-06-22",
    comment: "Room was not ready at check-in and the AC was broken for the first night.",
    status: "Flagged",
  },
  {
    id: "RV012",
    customer: "Dilan Perera",
    target: "Southern Coast Jeep",
    category: "Vehicle",
    rating: 4,
    date: "2026-06-21",
    comment: "Driver was punctual and the vehicle was clean, minor delay picking us up.",
    status: "Published",
  },
  {
    id: "RV011",
    customer: "Amara Fernando",
    target: "Cultural Triangle Tour",
    category: "Tour Package",
    rating: 5,
    date: "2026-06-20",
    comment: "Our guide Kasun knew every temple's history in incredible detail. Worth every rupee.",
    status: "Published",
  },
  {
    id: "RV010",
    customer: "Michael Chen",
    target: "Hilltop Villa",
    category: "Hotel",
    rating: 1,
    date: "2026-06-19",
    comment: "Nothing like the photos online, would not recommend.",
    status: "Pending",
  },
];

const statusStyles = {
  Published: "bg-[#1A7A6E]/10 text-[#0D4F46] border-[#1A7A6E]/30",
  Flagged: "bg-[#C45A2A]/10 text-[#C45A2A] border-[#C45A2A]/30",
  Pending: "bg-[#C9A84C]/15 text-[#8A6D1F] border-[#C9A84C]/40",
};

function Stars({ count }) {
  return (
    <span className="flex items-center gap-0.5 text-[#C9A84C]">
      {Array.from({ length: 5 }).map((_, i) =>
        i < count ? <FaStar key={i} size={13} /> : <FaRegStar key={i} size={13} className="text-[#C9A84C]/30" />
      )}
    </span>
  );
}

export default function AdminReviews() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = REVIEWS.filter((r) => {
    const matchesFilter = filter === "All" || r.status === filter;
    const matchesQuery =
      r.customer.toLowerCase().includes(query.toLowerCase()) ||
      r.target.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  const total = REVIEWS.length;
  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(1);
  const flaggedCount = REVIEWS.filter((r) => r.status === "Flagged").length;
  const pendingCount = REVIEWS.filter((r) => r.status === "Pending").length;

  const filterTabs = ["All", "Published", "Flagged", "Pending"];

  return (
    <div>
      {/* Boarding-pass header */}
      <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
        <div className="flex-1 p-8">
          <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2"> Admin · Boarding Pass </p>
          <h1 className="font-serif text-4xl text-[#0D2A24]"> Reviews & Feedback </h1>
          <p className="text-[#4B5F59] mt-2"> Moderate guest reviews across hotels, vehicles and tour packages </p>
        </div>

        <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Average </p>
          <p className="font-serif text-2xl text-white mt-1 flex items-center gap-2">
            {avgRating} <MdOutlineStarPurple500 className="text-[#C9A84C]" />
          </p>
          <button className="mt-5 bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#F5EDD6] transition"> Export Report </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-4">
            <MdReviews className="text-[#C9A84C] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Total Reviews</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> {total} </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#1A7A6E] flex items-center justify-center mb-4">
            <IoCheckmarkCircle className="text-[#1A7A6E] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Published</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> {REVIEWS.filter((r) => r.status === "Published").length} </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C45A2A] flex items-center justify-center mb-4">
            <FaFlag className="text-[#C45A2A] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Flagged</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> {flaggedCount} </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-4">
            <TbReportSearch className="text-[#C9A84C] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Awaiting Review</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> {pendingCount} </p>
        </div>
      </div>

      {/* Reviews ledger */}
      <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden mb-8">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center px-8 py-6 border-b border-[#0D4F46]/15">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Ledger </p>
            <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Guest Reviews </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="flex bg-[#F5EDD6] rounded-full p-1 border border-[#0D4F46]/15">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition ${
                    filter === tab
                      ? "bg-[#0D4F46] text-[#F5EDD6]"
                      : "text-[#4B5F59] hover:text-[#0D2A24]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search reviews…"
              className="bg-[#F5EDD6] text-[#0D2A24] placeholder-[#4B5F59]/60 px-4 py-2 rounded-full border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] text-sm"
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-[#0D4F46] text-[#F5EDD6]">
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Review ID</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Customer</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Subject</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Rating</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Date</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b border-[#0D4F46]/10 hover:bg-[#F5EDD6]/70 align-top">
                <td className="px-6 py-4 font-serif text-[#0D2A24]">{r.id}</td>
                <td className="px-6 py-4 text-[#4B5F59]">{r.customer}</td>
                <td className="px-6 py-4">
                  <p className="text-[#0D2A24] font-medium">{r.target}</p>
                  <p className="text-[#7FA89E] text-[11px] uppercase tracking-wide mt-0.5">{r.category}</p>
                  <p className="text-[#4B5F59] text-sm mt-2 max-w-xs">{r.comment}</p>
                </td>
                <td className="px-6 py-4"><Stars count={r.rating} /></td>
                <td className="px-6 py-4 text-[#4B5F59] whitespace-nowrap">{r.date}</td>
                <td className="px-6 py-4">
                  <span className={`border px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold ${statusStyles[r.status]}`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button title="Approve" className="text-[#1A7A6E] hover:text-[#0D4F46] transition">
                      <IoCheckmarkCircle size={18} />
                    </button>
                    <button title="Flag" className="text-[#C45A2A] hover:text-[#8A3D1A] transition">
                      <FaFlag size={16} />
                    </button>
                    <button title="Delete" className="text-[#4B5F59] hover:text-[#0D2A24] transition">
                      <IoTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-[#4B5F59]">
                  No reviews match this filter yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary section */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-[#0D4F46]/15">
          <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-1"> Manifest </p>
          <h2 className="font-serif text-2xl text-[#0D2A24] mb-4"> Reviews by Category </h2>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
              <span className="text-[#4B5F59]"> Hotels </span>
              <span className="font-serif text-[#0D2A24]"> {REVIEWS.filter((r) => r.category === "Hotel").length} </span>
            </div>
            <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
              <span className="text-[#4B5F59]"> Vehicles </span>
              <span className="font-serif text-[#0D2A24]"> {REVIEWS.filter((r) => r.category === "Vehicle").length} </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#4B5F59]"> Tour Packages </span>
              <span className="font-serif text-[#0D2A24]"> {REVIEWS.filter((r) => r.category === "Tour Package").length} </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#0D4F46]/15">
          <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-1"> Manifest </p>
          <h2 className="font-serif text-2xl text-[#0D2A24] mb-4"> Rating Breakdown </h2>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = REVIEWS.filter((r) => r.rating === star).length;
              const pct = total ? Math.round((count / total) * 100) : 0;
              return (
                <div key={star} className="flex items-center gap-3">
                  <span className="text-[#4B5F59] text-sm w-10">{star}★</span>
                  <div className="flex-1 h-2 rounded-full bg-[#F5EDD6] overflow-hidden">
                    <div className="h-full bg-[#C9A84C]" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[#0D2A24] font-serif text-sm w-8 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}