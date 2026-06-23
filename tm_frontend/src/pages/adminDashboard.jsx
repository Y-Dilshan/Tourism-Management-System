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
    `flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-[#D4AF37] text-black font-bold"
        : "text-white hover:bg-[#1A1A1A]"
    }`;

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-[280px] h-screen bg-[#050505] border-r border-[#2A2A2A] p-6">

        {/* Logo */}
        <div className="mb-8 flex items-center gap-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[80px] h-[80px]"
          />

          <div>
            <h1 className="text-[#D4AF37] text-3xl font-bold">
              GO LANKA
            </h1>
            <p className="text-gray-400 text-sm">
              Admin Panel
            </p>
          </div>
        </div>

        {/* MAIN */}
        <div className="mb-6">
          <h2 className="text-[#D4AF37] font-bold mb-3">
            MAIN
          </h2>

          <div className="flex flex-col gap-2">
            <NavLink
              to="/admin/dashboard"
              className={navLinkClass}
            >
              <MdSpaceDashboard size={20} />
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/bookings"
              className={navLinkClass}
            >
              <RiContactsBook3Fill size={20} />
              Bookings
            </NavLink>

            <NavLink
              to="/admin/hotels"
              className={navLinkClass}
            >
              <LiaHotelSolid size={20} />
              Hotels
            </NavLink>

            <NavLink
              to="/admin/vehicles"
              className={navLinkClass}
            >
              <FaCar size={20} />
              Vehicles
            </NavLink>

            <NavLink
              to="/admin/packages"
              className={navLinkClass}
            >
              <IoBook size={20} />
              Tour Packages
            </NavLink>

            <NavLink
              to="/admin/activities"
              className={navLinkClass}
            >
              <LuActivity size={20} />
              Activities
            </NavLink>
          </div>
        </div>

        {/* MANAGEMENT */}
        <div>
          <h2 className="text-[#D4AF37] font-bold mb-3">
            MANAGEMENT
          </h2>

          <div className="flex flex-col gap-2">
            <NavLink
              to="/admin/users"
              className={navLinkClass}
            >
              <FaUsers size={20} />
              Users
            </NavLink>

            <NavLink
              to="/admin/reviews"
              className={navLinkClass}
            >
              <MdReviews size={20} />
              Reviews
            </NavLink>

            <NavLink
              to="/admin/reports"
              className={navLinkClass}
            >
              <TbReportSearch size={20} />
              Reports
            </NavLink>

            <NavLink
              to="/admin/settings"
              className={navLinkClass}
            >
              <IoSettings size={20} />
              Settings
            </NavLink>
          </div>
        </div>

        {/* Admin Profile */}
        <div className="absolute bottom-6 left-0 w-full px-6">
          <div className="border-t border-[#2A2A2A] pt-4 flex items-center gap-4">
            <img
              src="/admin.jpg"
              alt="admin"
              className="w-14 h-14 rounded-full bg-gray-600"
            />

            <div>
              <h3 className="text-white font-semibold">
                Admin User
              </h3>
              <p className="text-gray-400 text-sm">
                System Administrator
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[280px] p-8 min-h-screen">

        {isDashboard && (
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#111111] to-[#1C1C1C] border border-[#D4AF37]/20 rounded-2xl shadow-xl p-6 mb-8 flex justify-between items-center">

              <div>
                <h1 className="text-4xl font-bold text-white">
                  Go Lanka Dashboard
                </h1>

                <p className="text-gray-400 mt-2">
                  Manage bookings, hotels, vehicles and tourism services
                </p>
              </div>

              <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                View Reports
              </button>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

              <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A]">
                <TbReportSearch className="text-[#D4AF37] text-3xl mb-3" />
                <h3 className="text-gray-400">Total Revenue</h3>
                <p className="text-[#D4AF37] text-3xl font-bold mt-2">
                  LKR 4.2M
                </p>
              </div>

              <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A]">
                <FaUsers className="text-[#D4AF37] text-3xl mb-3" />
                <h3 className="text-gray-400">Active Users</h3>
                <p className="text-white text-3xl font-bold mt-2">
                  1,284
                </p>
              </div>

              <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A]">
                <RiContactsBook3Fill className="text-[#D4AF37] text-3xl mb-3" />
                <h3 className="text-gray-400">Bookings Today</h3>
                <p className="text-white text-3xl font-bold mt-2">
                  38
                </p>
              </div>

              <div className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A]">
                <LiaHotelSolid className="text-[#D4AF37] text-3xl mb-3" />
                <h3 className="text-gray-400">Hotels</h3>
                <p className="text-white text-3xl font-bold mt-2">
                  56
                </p>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-[#141414] rounded-3xl border border-[#2A2A2A] overflow-hidden mb-8">

              <div className="flex justify-between items-center px-8 py-6 border-b border-[#2A2A2A]">
                <h2 className="text-2xl text-white font-semibold">
                  Recent Bookings
                </h2>

                <input
                  type="text"
                  placeholder="Search Bookings..."
                  className="bg-[#1F1F1F] text-white px-4 py-2 rounded-xl border border-[#333333] outline-none focus:border-[#D4AF37]"
                />
              </div>

              <table className="w-full">
                <thead>
                  <tr className="bg-[#D4AF37] text-black">
                    <th className="px-6 py-4 text-left">Booking ID</th>
                    <th className="px-6 py-4 text-left">Customer</th>
                    <th className="px-6 py-4 text-left">Hotel</th>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-left">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-[#2A2A2A] hover:bg-[#1C1C1C]">
                    <td className="px-6 py-5 text-white">BK001</td>
                    <td className="px-6 py-5 text-gray-300">
                      John Smith
                    </td>
                    <td className="px-6 py-5 text-gray-300">
                      Beach Resort
                    </td>
                    <td className="px-6 py-5 text-gray-300">
                      2026-06-23
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                        Confirmed
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-[#2A2A2A] hover:bg-[#1C1C1C]">
                    <td className="px-6 py-5 text-white">BK002</td>
                    <td className="px-6 py-5 text-gray-300">
                      Sarah Lee
                    </td>
                    <td className="px-6 py-5 text-gray-300">
                      Ocean View Hotel
                    </td>
                    <td className="px-6 py-5 text-gray-300">
                      2026-06-23
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary Section */}
            <div className="grid lg:grid-cols-2 gap-6">

              <div className="bg-[#141414] rounded-3xl p-6 border border-[#2A2A2A]">
                <h2 className="text-white text-2xl font-bold mb-4">
                  Booking Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Hotel Bookings
                    </span>
                    <span className="text-white">
                      320
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Vehicle Rentals
                    </span>
                    <span className="text-white">
                      145
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Tour Packages
                    </span>
                    <span className="text-white">
                      87
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#141414] rounded-3xl p-6 border border-[#2A2A2A]">
                <h2 className="text-white text-2xl font-bold mb-4">
                  Revenue Overview
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Hotel Revenue
                    </span>
                    <span className="text-[#D4AF37]">
                      LKR 2.5M
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Vehicle Revenue
                    </span>
                    <span className="text-[#D4AF37]">
                      LKR 1.1M
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Package Revenue
                    </span>
                    <span className="text-[#D4AF37]">
                      LKR 600K
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Total Revenue
                    </span>
                    <span className="text-green-400 font-semibold">
                      LKR 4.2M
                    </span>
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