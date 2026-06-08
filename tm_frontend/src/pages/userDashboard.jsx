import {
  FaHotel,
  FaCar,
  FaMapMarkedAlt,
  FaHeart,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

export default function UserDashboard() {
  return (
    <div className="flex min-h-screen bg-[#F6F3EE]">
      {/* Sidebar */}
      <div className="w-[270px] bg-[#031A18] text-white flex flex-col">
        {/* User Info */}
        <div className="flex flex-col items-center py-10 border-b border-gray-700">
          <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-3xl">👤</div>

          <h2 className="mt-4 text-xl font-semibold">John Smith</h2>
          <p className="text-gray-300">john@email.com</p>
        </div>

        {/* Menu */}
        <div className="mt-6">
          <button className="w-full text-left px-8 py-4 bg-[#2A3421] text-yellow-400"> Overview </button>

          <button className="w-full text-left px-8 py-4 hover:bg-[#0B2A27] flex items-center gap-3"> <FaHotel /> My Hotels </button>

          <button className="w-full text-left px-8 py-4 hover:bg-[#0B2A27] flex items-center gap-3"> <FaCar /> My Vehicles </button>

          <button className="w-full text-left px-8 py-4 hover:bg-[#0B2A27] flex items-center gap-3"> <FaMapMarkedAlt /> My Tours </button>

          <button className="w-full text-left px-8 py-4 hover:bg-[#0B2A27]"> Activities </button>

          <button className="w-full text-left px-8 py-4 hover:bg-[#0B2A27] flex items-center gap-3"> <FaHeart /> Wishlist </button>

          <button className="w-full text-left px-8 py-4 hover:bg-[#0B2A27] flex items-center gap-3"> <FaUser /> Profile </button>

          <button className="w-full text-left px-8 py-4 hover:bg-[#0B2A27] flex items-center gap-3"> <FaSignOutAlt /> Sign Out </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-serif">Good morning, John </h1>

          <p className="text-gray-600 mt-2">Your upcoming Sri Lanka trip — 14 days away</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-5xl text-teal-700">3</h2>
            <p className="text-gray-500">Bookings Active</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-5xl text-teal-700">8</h2>
            <p className="text-gray-500">Trip Days</p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-5xl text-teal-700">$1,240</h2>
            <p className="text-gray-500">Total Spent</p>
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white rounded-3xl p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-8">
            My Bookings
          </h2>

          {/* Booking Item */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4">
              <span className="text-3xl">🏨</span>

              <div>
                <h3 className="font-semibold text-lg">Araliya Beach Resort, Galle</h3>

                <p className="text-gray-500">Jun 20 – Jun 25, 2026 · 5 nights</p>
              </div>
            </div>

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm">Confirmed</span>
          </div>

          {/* Booking Item */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4">
              <span className="text-3xl">✈️</span>

              <div>
                <h3 className="font-semibold text-lg"> Airport Transfer - BIA → Colombo </h3>

                <p className="text-gray-500"> Jun 20, 2026 · 14:30 · Sedan </p>
              </div>
            </div>

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm"> Confirmed </span>
          </div>

          {/* Booking Item */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <span className="text-3xl">🗺️</span>

              <div>
                <h3 className="font-semibold text-lg"> Cultural Triangle Explorer - 7 Days </h3>

                <p className="text-gray-500"> Jun 22 – Jun 29, 2026 </p>
              </div>
            </div>

            <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm">
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}