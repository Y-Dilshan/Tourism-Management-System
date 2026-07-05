import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";
import { FaHotel, FaCar, FaMapMarkedAlt, FaHiking, FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function MyBookings(){

    const bookings = [
  {
    id: 1,
    type: "Hotel",
    name: "Cinnamon Grand Colombo",
    location: "Colombo",
    checkIn: "2026-07-10",
    checkOut: "2026-07-13",
    price: 270,
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 2,
    type: "Vehicle",
    name: "Toyota Land Cruiser Prado",
    location: "Ella",
    checkIn: "2026-07-14",
    checkOut: "2026-07-16",
    price: 240,
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
  },
  {
    id: 3,
    type: "Tour Package",
    name: "Hill Country Escape",
    location: "Ella · Nuwara Eliya",
    checkIn: "2026-08-01",
    checkOut: "2026-08-03",
    price: 320,
    status: "Pending",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da",
  },
  {
    id: 4,
    type: "Activity",
    name: "Whale Watching Tour",
    location: "Mirissa",
    checkIn: "2026-07-20",
    checkOut: "2026-07-20",
    price: 45,
    status: "Cancelled",
    image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f",
  },
];

    const typeIcon = {
      "Hotel": <FaHotel />,
      "Vehicle": <FaCar />,
      "Tour Package": <FaMapMarkedAlt />,
      "Activity": <FaHiking />,
    };

    const statusStyle = {
      "Confirmed": "bg-green-100 text-green-700",
      "Pending": "bg-yellow-100 text-yellow-700",
      "Cancelled": "bg-red-100 text-red-700",
    };

    return(
        <div className="w-full h-full bg-[#F5EDD6]">
            <div className="w-full h-[100px] bg-black flex items-center pl-20 gap-5">
                <img src="logo.png" alt="Logo" className="w-[80px] h-[80px]" />
                <h1 className="text-5xl text-[#C9A84C] font-bold"> GoLanka </h1>

                <div className="flex gap-10 ml-[400px]">
                    <Link to="/" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Home </Link>
                    <Link to="/hotels" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Hotels </Link>
                    <Link to="/vehicles" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Vehicles </Link>
                    <Link to="/activities" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Activities </Link>
                    <Link to="/guides" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Guides </Link>
                    <Link to="/contact" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Contact </Link>
                </div>

                <div className="flex gap-5 mr-20">
                    <Link
                      to="/bookings"
                      className="w-[150px] h-[40px] bg-[#C9A84C] hover:bg-[#F5EDD6] text-black text-lg font-bold rounded-3xl ml-20 flex items-center justify-center cursor-pointer"
                    >
                      My Bookings
                    </Link>
                </div>
            </div>

            <div className="w-full h-[200px] bg-black flex flex-col pl-20 gap-5">
                <h1 className="text-2xl text-[#C9A84C] font-bold mt-10"> MY BOOKINGS </h1>
                <p className="text-4xl text-white">Your Trip, All in One Place</p>
                <p className="text-white">Track hotels, vehicles, tours & activities you've booked</p>
            </div>

            {/* bookings list */}
            <div className="flex-col">
                <h2 className="text-5xl text-center font-bold my-10 text-[#0D4F46]"> Your Bookings </h2>

                {bookings.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-2xl text-gray-500 mb-5">You have no bookings yet.</p>
                    <Link to="/" className="bg-[#0D4F46] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1A7A6E]">
                      Start Exploring
                    </Link>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-20">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition duration-300">
                        <div className="relative">
                          <img src={booking.image} alt={booking.name} className="w-full h-56 object-cover" />
                          <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-bold ${statusStyle[booking.status]}`}>
                            {booking.status}
                          </span>
                        </div>

                        <div className="p-5">
                          <div className="flex items-center gap-2 text-[#C45A2A] text-sm font-bold mb-1">
                            {typeIcon[booking.type]} {booking.type}
                          </div>

                          <h3 className="text-xl font-bold"> {booking.name} </h3>

                          <div className="flex items-center gap-1 text-gray-500 mt-2"> <MdLocationOn /> {booking.location} </div>

                          <div className="flex items-center gap-1 text-gray-500 mt-1">
                            <FaCalendarAlt /> {booking.checkIn} {booking.checkIn !== booking.checkOut && `→ ${booking.checkOut}`}
                          </div>

                          <div className="flex justify-between items-center mt-5">
                            <div>
                              <span className="text-2xl font-bold text-[#0D4F46]"> ${booking.price} </span>
                              <p className="text-sm text-gray-500"> total </p>
                            </div>

                            <button className="bg-[#0D4F46] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#1A7A6E]">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </div>

            <div className="mt-10"> <Footer /> </div>
        </div>
    )
}