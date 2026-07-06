import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { LiaHotelSolid } from "react-icons/lia";
import { FaCar, FaUsers } from "react-icons/fa";
import { IoBook, IoSettings } from "react-icons/io5";
import { LuActivity } from "react-icons/lu";
import { MdReviews } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

export default function AdminDashboard() {
  const location = useLocation();

  const isDashboard =
    location.pathname === "/admin" ||
    location.pathname === "/admin/dashboard";

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
      isActive
        ? "bg-[#C9A84C] text-[#0B1F1A] font-semibold"
        : "text-[#D9E8E3] hover:bg-white/5 hover:text-[#F5EDD6]"
    }`;

  const sectionLabel = "text-[10px] uppercase tracking-[0.25em] text-[#7FA89E] font-semibold mb-3 mt-8";

  return (
    <div className="bg-[#F5EDD6] min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-[260px] h-screen bg-[#0B1F1A] border-r border-[#C9A84C]/15 p-6 flex flex-col">

        {/* Logo */}
        <div className="flex items-center gap-3 pb-6 border-b border-white/10">
          <img src="/logo.png" alt="logo" className="w-[52px] h-[52px]" />
          <div>
            <h1 className="text-[#C9A84C] font-serif text-2xl leading-tight"> Go Lanka </h1>
            <p className="text-[#7FA89E] text-[11px] uppercase tracking-[0.2em] mt-0.5"> Admin Panel </p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {/* MAIN */}
          <div>
            <h2 className={sectionLabel}> Main </h2>
            <div className="flex flex-col gap-1">
              <NavLink to="/admin/dashboard" className={navLinkClass}> <MdSpaceDashboard size={18} /> Dashboard </NavLink>
              <NavLink to="/admin/bookings" className={navLinkClass}> <RiContactsBook3Fill size={18} /> Bookings </NavLink>
              <NavLink to="/admin/hotels" className={navLinkClass}> <LiaHotelSolid size={18} /> Hotels </NavLink>
              <NavLink to="/admin/vehicles" className={navLinkClass}> <FaCar size={18} /> Vehicles </NavLink>
              <NavLink to="/admin/packages" className={navLinkClass}> <IoBook size={18} /> Tour Packages </NavLink>
              <NavLink to="/admin/guides" className={navLinkClass}> <LuActivity size={18} /> Guides </NavLink>
            </div>
          </div>

          {/* MANAGEMENT */}
          <div>
            <h2 className={sectionLabel}> Management </h2>
            <div className="flex flex-col gap-1">
              <NavLink to="/admin/users" className={navLinkClass}> <FaUsers size={18} /> Users </NavLink>
              <NavLink to="/admin/reviews" className={navLinkClass}> <MdReviews size={18} /> Reviews </NavLink>
              <NavLink to="/admin/reports" className={navLinkClass}> <TbReportSearch size={18} /> Reports </NavLink>
              <NavLink to="/admin/settings" className={navLinkClass}> <IoSettings size={18} /> Settings </NavLink>
            </div>
          </div>
        </nav>

        {/* Admin Profile */}
        <div className="border-t border-white/10 pt-4 flex items-center gap-3">
          <img src="/admin.jpg" alt="admin" className="w-11 h-11 rounded-full ring-2 ring-[#C9A84C]/50 bg-gray-600" />
          <div className="flex flex-col">
            <h3 className="text-white text-sm font-semibold leading-tight"> Admin User </h3>
            <p className="text-[#7FA89E] text-[11px] uppercase tracking-wide"> System Administrator </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[260px] p-8 min-h-screen">

        {isDashboard && (
          <>
            {/* Boarding-pass header */}
            <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
              <div className="flex-1 p-8">
                <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2"> Admin · Boarding Pass </p>
                <h1 className="font-serif text-4xl text-[#0D2A24]"> Go Lanka Dashboard </h1>
                <p className="text-[#4B5F59] mt-2"> Manage bookings, hotels, vehicles and tourism services </p>
              </div>

              <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Route </p>
                <p className="font-serif text-2xl text-white mt-1"> CMB → ADM </p>
                <button className="mt-5 bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#F5EDD6] transition"> View Reports </button>
              </div>
            </div>

            {/* Statistics Cards — stamp style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
                <div className="w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-4">
                  <TbReportSearch className="text-[#C9A84C] text-lg" />
                </div>
                <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Total Revenue</p>
                <p className="font-serif text-3xl text-[#0D2A24] mt-1"> LKR 4.2M </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
                <div className="w-11 h-11 rounded-full border-2 border-[#1A7A6E] flex items-center justify-center mb-4">
                  <FaUsers className="text-[#1A7A6E] text-lg" />
                </div>
                <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Active Users</p>
                <p className="font-serif text-3xl text-[#0D2A24] mt-1"> 1,284 </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
                <div className="w-11 h-11 rounded-full border-2 border-[#C45A2A] flex items-center justify-center mb-4">
                  <RiContactsBook3Fill className="text-[#C45A2A] text-lg" />
                </div>
                <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Bookings Today</p>
                <p className="font-serif text-3xl text-[#0D2A24] mt-1"> 38 </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
                <div className="w-11 h-11 rounded-full border-2 border-[#1A7A6E] flex items-center justify-center mb-4">
                  <LiaHotelSolid className="text-[#1A7A6E] text-lg" />
                </div>
                <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Hotels</p>
                <p className="font-serif text-3xl text-[#0D2A24] mt-1"> 56 </p>
              </div>
            </div>

            {/* Recent Bookings — ledger */}
            <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden mb-8">
              <div className="flex justify-between items-center px-8 py-6 border-b border-[#0D4F46]/15">
                <div>
                  <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Ledger </p>
                  <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Recent Bookings </h2>
                </div>
                <input type="text" placeholder="Search bookings…" className="bg-[#F5EDD6] text-[#0D2A24] placeholder-[#4B5F59]/60 px-4 py-2 rounded-full border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] text-sm" />
              </div>

              <table className="w-full">
                <thead>
                  <tr className="bg-[#0D4F46] text-[#F5EDD6]">
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Booking ID</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Customer</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Hotel</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Date</th>
                    <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-[#0D4F46]/10 hover:bg-[#F5EDD6]/70">
                    <td className="px-6 py-4 font-serif text-[#0D2A24]">BK001</td>
                    <td className="px-6 py-4 text-[#4B5F59]"> John Smith </td>
                    <td className="px-6 py-4 text-[#4B5F59]"> Beach Resort </td>
                    <td className="px-6 py-4 text-[#4B5F59]"> 2026-06-23 </td>
                    <td className="px-6 py-4"> <span className="bg-[#1A7A6E]/10 text-[#0D4F46] border border-[#1A7A6E]/30 px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold"> Confirmed </span> </td>
                  </tr>

                  <tr className="border-b border-[#0D4F46]/10 hover:bg-[#F5EDD6]/70">
                    <td className="px-6 py-4 font-serif text-[#0D2A24]">BK002</td>
                    <td className="px-6 py-4 text-[#4B5F59]"> Sarah Lee </td>
                    <td className="px-6 py-4 text-[#4B5F59]"> Ocean View Hotel </td>
                    <td className="px-6 py-4 text-[#4B5F59]"> 2026-06-23 </td>
                    <td className="px-6 py-4"> <span className="bg-[#C45A2A]/10 text-[#C45A2A] border border-[#C45A2A]/30 px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold"> Pending </span> </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary Section */}
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-[#0D4F46]/15">
                <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-1"> Manifest </p>
                <h2 className="font-serif text-2xl text-[#0D2A24] mb-4"> Booking Summary </h2>

                <div className="space-y-3">
                  <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
                    <span className="text-[#4B5F59]"> Hotel Bookings </span>
                    <span className="font-serif text-[#0D2A24]"> 320 </span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
                    <span className="text-[#4B5F59]"> Vehicle Rentals </span>
                    <span className="font-serif text-[#0D2A24]"> 145 </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4B5F59]"> Tour Packages </span>
                    <span className="font-serif text-[#0D2A24]"> 87 </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#0D4F46]/15">
                <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-1"> Manifest </p>
                <h2 className="font-serif text-2xl text-[#0D2A24] mb-4"> Revenue Overview </h2>

                <div className="space-y-3">
                  <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
                    <span className="text-[#4B5F59]"> Hotel Revenue </span>
                    <span className="font-serif text-[#C9A84C]"> LKR 2.5M </span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
                    <span className="text-[#4B5F59]"> Vehicle Revenue </span>
                    <span className="font-serif text-[#C9A84C]"> LKR 1.1M </span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
                    <span className="text-[#4B5F59]"> Package Revenue </span>
                    <span className="font-serif text-[#C9A84C]"> LKR 600K </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#0D2A24] font-semibold"> Total Revenue </span>
                    <span className="font-serif text-[#1A7A6E] font-semibold"> LKR 4.2M </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Child Pages */}
        <Outlet />
      </main>
    </div>
  );
}