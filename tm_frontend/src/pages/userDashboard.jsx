import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaHotel,
  FaCar,
  FaMapMarkedAlt,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse user data from localStorage", err);
      }
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getInitial = (name) => {
    if (!name) return "👤";
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="flex min-h-screen bg-[#F6F3EE]">
      {/* Sidebar */}
      <div className="w-[270px] bg-[#031A18] text-white flex flex-col justify-between">
        <div>
          {/* User Info */}
          <div className="flex flex-col items-center py-10 border-b border-gray-700 px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-[#C9A84C] text-[#031A18] flex items-center justify-center text-3xl font-bold border-2 border-white shadow-md">
              {getInitial(user?.name)}
            </div>

            <h2 className="mt-4 text-xl font-semibold">{user?.name || "Traveler"}</h2>
            <p className="text-gray-300 text-sm mt-0.5 truncate max-w-full">{user?.email || "guest@golanka.com"}</p>
            {user?.phone && (
              <span className="mt-2 text-xs bg-[#1A7A6E] text-white px-3 py-1 rounded-full font-medium">
                {user.phone}
              </span>
            )}
          </div>

          {/* Menu */}
          <div className="mt-6 space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left px-8 py-3.5 flex items-center gap-3 transition-colors ${
                activeTab === "overview" ? "bg-[#2A3421] text-yellow-400 font-semibold border-l-4 border-yellow-400" : "hover:bg-[#0B2A27] text-gray-200"
              }`}
            >
              <FaHome /> Overview
            </button>

            <button
              onClick={() => setActiveTab("hotels")}
              className={`w-full text-left px-8 py-3.5 flex items-center gap-3 transition-colors ${
                activeTab === "hotels" ? "bg-[#2A3421] text-yellow-400 font-semibold border-l-4 border-yellow-400" : "hover:bg-[#0B2A27] text-gray-200"
              }`}
            >
              <FaHotel /> My Hotels
            </button>

            <button
              onClick={() => setActiveTab("vehicles")}
              className={`w-full text-left px-8 py-3.5 flex items-center gap-3 transition-colors ${
                activeTab === "vehicles" ? "bg-[#2A3421] text-yellow-400 font-semibold border-l-4 border-yellow-400" : "hover:bg-[#0B2A27] text-gray-200"
              }`}
            >
              <FaCar /> My Vehicles
            </button>

            <button
              onClick={() => setActiveTab("tours")}
              className={`w-full text-left px-8 py-3.5 flex items-center gap-3 transition-colors ${
                activeTab === "tours" ? "bg-[#2A3421] text-yellow-400 font-semibold border-l-4 border-yellow-400" : "hover:bg-[#0B2A27] text-gray-200"
              }`}
            >
              <FaMapMarkedAlt /> My Tours
            </button>

            <button
              onClick={() => setActiveTab("wishlist")}
              className={`w-full text-left px-8 py-3.5 flex items-center gap-3 transition-colors ${
                activeTab === "wishlist" ? "bg-[#2A3421] text-yellow-400 font-semibold border-l-4 border-yellow-400" : "hover:bg-[#0B2A27] text-gray-200"
              }`}
            >
              <FaHeart /> Wishlist
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left px-8 py-3.5 flex items-center gap-3 transition-colors ${
                activeTab === "profile" ? "bg-[#2A3421] text-yellow-400 font-semibold border-l-4 border-yellow-400" : "hover:bg-[#0B2A27] text-gray-200"
              }`}
            >
              <FaUser /> Profile
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-gray-800 space-y-3">
          <Link
            to="/"
            className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white flex items-center gap-2"
          >
            ← Back to Home
          </Link>

          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-3 bg-red-900/40 hover:bg-red-800/60 text-red-200 rounded-xl flex items-center gap-3 font-semibold transition"
          >
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#031A18]">
              Welcome back, {user?.name ? user.name.split(" ")[0] : "Traveler"}!
            </h1>
            <p className="text-gray-500 mt-1">Logged in as {user?.email || "Guest"}</p>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="px-5 py-2.5 bg-[#0D4F46] text-white rounded-full font-semibold hover:bg-[#1A7A6E] transition text-sm">
              Explore Sri Lanka
            </Link>
          </div>
        </div>

        {/* Tabs handling */}
        {activeTab === "profile" ? (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl">
            <h2 className="text-2xl font-serif font-bold text-[#031A18] mb-6">User Account Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500 font-medium">Full Name</span>
                <span className="font-semibold text-gray-800">{user?.name || "Not provided"}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500 font-medium">Email Address</span>
                <span className="font-semibold text-gray-800">{user?.email || "Not provided"}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500 font-medium">Phone Number</span>
                <span className="font-semibold text-gray-800">{user?.phone || "Not provided"}</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500 font-medium">Account Role</span>
                <span className="font-semibold text-teal-700 capitalize">{user?.role || "user"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">User ID</span>
                <span className="font-mono text-xs text-gray-500">{user?._id || "-"}</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-5xl text-[#0D4F46] font-serif font-bold">3</h2>
                <p className="text-gray-500 mt-2 font-medium">Active Bookings</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-5xl text-[#0D4F46] font-serif font-bold">8</h2>
                <p className="text-gray-500 mt-2 font-medium">Planned Trip Days</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-5xl text-[#C9A84C] font-serif font-bold">$1,240</h2>
                <p className="text-gray-500 mt-2 font-medium font-sans">Total Spent</p>
              </div>
            </div>

            {/* Booking Section */}
            <div className="bg-white rounded-3xl p-8 mt-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#031A18] mb-8">
                My Bookings Manifest
              </h2>

              {/* Booking Item */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                <div className="flex gap-4 items-center">
                  <span className="text-3xl p-3 bg-[#F6F3EE] rounded-2xl">🏨</span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Araliya Beach Resort, Galle</h3>
                    <p className="text-gray-500 text-sm mt-0.5">Jun 20 – Jun 25, 2026 · 5 nights</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">Confirmed</span>
              </div>

              {/* Booking Item */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                <div className="flex gap-4 items-center">
                  <span className="text-3xl p-3 bg-[#F6F3EE] rounded-2xl">✈️</span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Airport Transfer - BIA → Colombo</h3>
                    <p className="text-gray-500 text-sm mt-0.5">Jun 20, 2026 · 14:30 · Luxury Sedan</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">Confirmed</span>
              </div>

              {/* Booking Item */}
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <span className="text-3xl p-3 bg-[#F6F3EE] rounded-2xl">🗺️</span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Cultural Triangle Explorer - 7 Days</h3>
                    <p className="text-gray-500 text-sm mt-0.5">Jun 22 – Jun 29, 2026</p>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold">Pending</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}