import { useState } from "react";
import {
  TbReportSearch,
  TbTrendingUp,
  TbTrendingDown,
} from "react-icons/tb";
import { FaUsers, FaCar } from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";
import { IoBook, IoDownloadOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

const RANGE_TABS = ["7 Days", "30 Days", "This Quarter", "This Year"];

const MONTHLY = [
  { month: "Jan", revenue: 2.1 },
  { month: "Feb", revenue: 2.6 },
  { month: "Mar", revenue: 3.0 },
  { month: "Apr", revenue: 2.8 },
  { month: "May", revenue: 3.6 },
  { month: "Jun", revenue: 4.2 },
];

const CATEGORY_BREAKDOWN = [
  { label: "Hotel Bookings", value: 2.5, count: 320, icon: LiaHotelSolid, color: "#1A7A6E" },
  { label: "Vehicle Rentals", value: 1.1, count: 145, icon: FaCar, color: "#C9A84C" },
  { label: "Tour Packages", value: 0.6, count: 87, icon: IoBook, color: "#C45A2A" },
];

const GENERATED_REPORTS = [
  { id: "RPT-2026-06", name: "June 2026 Revenue Summary", type: "Revenue", date: "2026-07-01", size: "482 KB" },
  { id: "RPT-2026-Q2", name: "Q2 2026 Performance Overview", type: "Quarterly", date: "2026-07-02", size: "1.1 MB" },
  { id: "RPT-2026-05", name: "May 2026 Booking Analytics", type: "Bookings", date: "2026-06-01", size: "365 KB" },
  { id: "RPT-2026-USR", name: "User Growth Report — H1", type: "Users", date: "2026-06-28", size: "298 KB" },
];

export default function AdminReports() {
  const [range, setRange] = useState("30 Days");
  const maxRevenue = Math.max(...MONTHLY.map((m) => m.revenue));
  const totalRevenue = CATEGORY_BREAKDOWN.reduce((s, c) => s + c.value, 0);

  return (
    <div>
      {/* Boarding-pass header */}
      <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
        <div className="flex-1 p-8">
          <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2"> Admin · Boarding Pass </p>
          <h1 className="font-serif text-4xl text-[#0D2A24]"> Reports & Analytics </h1>
          <p className="text-[#4B5F59] mt-2"> Track performance across bookings, revenue and platform growth </p>
        </div>

        <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Period </p>
          <p className="font-serif text-2xl text-white mt-1"> {range} </p>
          <button className="mt-5 bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#F5EDD6] transition flex items-center gap-2">
            <IoDownloadOutline size={15} /> Export PDF
          </button>
        </div>
      </div>

      {/* Range filter */}
      <div className="flex justify-end mb-6">
        <div className="flex bg-white rounded-full p-1 border border-[#0D4F46]/15">
          {RANGE_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setRange(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition ${
                range === tab ? "bg-[#0D4F46] text-[#F5EDD6]" : "text-[#4B5F59] hover:text-[#0D2A24]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-4">
            <TbReportSearch className="text-[#C9A84C] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Total Revenue</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> LKR 4.2M </p>
          <p className="flex items-center gap-1 text-[#1A7A6E] text-xs font-semibold mt-2">
            <TbTrendingUp /> +12.4% vs last period
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#1A7A6E] flex items-center justify-center mb-4">
            <MdSpaceDashboard className="text-[#1A7A6E] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Total Bookings</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> 552 </p>
          <p className="flex items-center gap-1 text-[#1A7A6E] text-xs font-semibold mt-2">
            <TbTrendingUp /> +8.1% vs last period
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C45A2A] flex items-center justify-center mb-4">
            <FaUsers className="text-[#C45A2A] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">New Users</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> 214 </p>
          <p className="flex items-center gap-1 text-[#C45A2A] text-xs font-semibold mt-2">
            <TbTrendingDown /> -3.2% vs last period
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#1A7A6E] flex items-center justify-center mb-4">
            <LiaHotelSolid className="text-[#1A7A6E] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Occupancy Rate</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> 78% </p>
          <p className="flex items-center gap-1 text-[#1A7A6E] text-xs font-semibold mt-2">
            <TbTrendingUp /> +5.6% vs last period
          </p>
        </div>
      </div>

      {/* Revenue trend + category breakdown */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 mb-8">
        {/* Revenue trend — ledger card with bar chart */}
        <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden">
          <div className="px-8 py-6 border-b border-[#0D4F46]/15">
            <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Manifest </p>
            <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Revenue Trend </h2>
          </div>

          <div className="p-8">
            <div className="flex items-end gap-4 h-48">
              {MONTHLY.map((m) => (
                <div key={m.month} className="flex-1 flex flex-col items-center justify-end h-full gap-2">
                  <span className="text-[11px] text-[#4B5F59] font-serif">{m.revenue}M</span>
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-[#0D4F46] to-[#1A7A6E]"
                    style={{ height: `${(m.revenue / maxRevenue) * 100}%` }}
                  />
                  <span className="text-xs uppercase tracking-wide text-[#7FA89E] font-semibold">{m.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category breakdown — manifest */}
        <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden">
          <div className="px-8 py-6 border-b border-[#0D4F46]/15">
            <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Manifest </p>
            <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Revenue by Category </h2>
          </div>

          <div className="p-8 space-y-5">
            {CATEGORY_BREAKDOWN.map(({ label, value, count, icon: Icon, color }) => {
              const pct = Math.round((value / totalRevenue) * 100);
              return (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2 text-sm text-[#0D2A24] font-medium">
                      <Icon style={{ color }} /> {label}
                    </span>
                    <span className="font-serif text-[#0D2A24]">LKR {value}M</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#F5EDD6] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
                  </div>
                  <p className="text-[11px] text-[#7FA89E] mt-1">{count} bookings · {pct}% of total</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Generated reports ledger */}
      <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden">
        <div className="flex justify-between items-center px-8 py-6 border-b border-[#0D4F46]/15">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Ledger </p>
            <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Generated Reports </h2>
          </div>
          <button className="bg-[#0D4F46] text-[#F5EDD6] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#C9A84C] hover:text-[#0B1F1A] transition flex items-center gap-2">
            <IoDocumentTextOutline size={16} /> Generate New Report
          </button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-[#0D4F46] text-[#F5EDD6]">
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Report ID</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Name</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Type</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Generated On</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Size</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Download</th>
            </tr>
          </thead>
          <tbody>
            {GENERATED_REPORTS.map((r) => (
              <tr key={r.id} className="border-b border-[#0D4F46]/10 hover:bg-[#F5EDD6]/70">
                <td className="px-6 py-4 font-serif text-[#0D2A24]">{r.id}</td>
                <td className="px-6 py-4 text-[#0D2A24] font-medium">{r.name}</td>
                <td className="px-6 py-4">
                  <span className="bg-[#1A7A6E]/10 text-[#0D4F46] border border-[#1A7A6E]/30 px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold">
                    {r.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-[#4B5F59]">{r.date}</td>
                <td className="px-6 py-4 text-[#4B5F59]">{r.size}</td>
                <td className="px-6 py-4">
                  <button className="text-[#1A7A6E] hover:text-[#0D4F46] transition" title="Download">
                    <IoDownloadOutline size={19} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}