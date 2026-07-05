import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";
import { FaStar, FaCalendarAlt, FaMapMarkedAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function TourPackages(){

    const packages = [
  {
    id: 1,
    name: "Cultural Triangle Explorer",
    duration: "5 Days / 4 Nights",
    locations: "Kandy · Sigiriya · Dambulla",
    price: 450,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580889240911-e5c633e13c5f",
  },
  {
    id: 2,
    name: "Southern Coast Getaway",
    duration: "4 Days / 3 Nights",
    locations: "Galle · Mirissa · Unawatuna",
    price: 380,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b",
  },
  {
    id: 3,
    name: "Hill Country Escape",
    duration: "3 Days / 2 Nights",
    locations: "Ella · Nuwara Eliya",
    price: 320,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da",
  },
  {
    id: 4,
    name: "Wildlife & Safari Adventure",
    duration: "6 Days / 5 Nights",
    locations: "Yala · Udawalawe · Bentota",
    price: 520,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
  },
  {
    id: 5,
    name: "Complete Sri Lanka Tour",
    duration: "10 Days / 9 Nights",
    locations: "Colombo · Kandy · Ella · Galle",
    price: 950,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9",
  },
  {
    id: 6,
    name: "Weekend Beach Retreat",
    duration: "2 Days / 1 Night",
    locations: "Negombo · Bentota",
    price: 180,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
  },
];

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
                    <Link to="/bookings" className="w-[150px] h-[40px] bg-[#C9A84C] hover:bg-[#F5EDD6] text-black text-lg font-bold rounded-3xl ml-20 flex items-center justify-center cursor-pointer"> My Bookings </Link>
                </div>
            </div>

            <div className="w-full h-[200px] bg-black flex flex-col pl-20 gap-5">
                <h1 className="text-2xl text-[#C9A84C] font-bold mt-10"> TOUR PACKAGES </h1>
                <p className="text-4xl text-white">Curated Sri Lanka Journeys</p>
                <p className="text-white">All-inclusive packages with hotel, vehicle, guide & activities</p>
            </div>

            {/* packages grid */}
            <div className="flex-col">
                <h2 className="text-5xl text-center font-bold my-10 text-[#0D4F46]"> Available Packages </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-20">
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition duration-300">
                      <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover" />

                      <div className="p-5">
                        <h3 className="text-xl font-bold"> {pkg.name} </h3>

                        <div className="flex items-center gap-1 text-gray-500 mt-2"> <MdLocationOn /> {pkg.locations} </div>

                        <div className="flex items-center gap-1 text-gray-500 mt-1"> <FaCalendarAlt /> {pkg.duration} </div>

                        <div className="flex items-center gap-2 mt-3"> <FaStar className="text-yellow-500" /> <span>{pkg.rating}</span> </div>

                        <div className="flex justify-between items-center mt-5">
                          <div>
                            <span className="text-2xl font-bold text-[#0D4F46]"> ${pkg.price} </span>
                            <p className="text-sm text-gray-500"> per person </p>
                          </div>

                          <button className="bg-[#0D4F46] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#1A7A6E]"> Book Now </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

            <div className="mt-10"> <Footer /> </div>
        </div>
    )
}