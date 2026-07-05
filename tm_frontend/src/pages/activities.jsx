import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";

export default function ActivitiesPage() {
    return(
        <div>
            {/* header */}
            <div className="w-full h-[100px] bg-black flex items-center pl-20 gap-5">
                <img src="logo.png" alt="Logo" className="w-[80px] h-[80px]" />
                <h1 className="text-5xl text-[#C9A84C] font-bold"> GoLanka </h1>

                <div className="flex gap-10 ml-[400px]">
                    <Link to="/*" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Home </Link>
                    <Link to="/hotels" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Hotels </Link>
                    <Link to="/vehicles" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Vehicles </Link>
                    <Link to="/tours" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Tours </Link>
                    <Link to="/guides" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Guides </Link>
                    <Link to="/contact" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Contact </Link>
                </div>

                <div className="flex gap-5 mr-20">
                    <button className="w-[150px] h-[40px] bg-[#C9A84C] hover:bg-[#F5EDD6] text-black text-lg font-bold rounded-3xl ml-20 cursor-pointer"><Link to="/">My Bookings</Link></button>
                </div>
            </div>

            <div className = "w-full h-[200px] bg-black flex flex-col pl-20 gap-5">
                <h1 className="text-2xl text-[#C9A84C] font-bold mt-15"> EXPERIENCES </h1>
                <p className="text-4xl text-white">Unforgettable Activities</p>
            </div>

            {/* cards */}
            <div className="w-full h-screen bg-[#F5EDD6] flex flex-wrap gap-10 px-20 py-10 justify-center">
                <div className="w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5">
                    <img src="Whale Watching.jpg" alt="Activity" className="w-[300px] h-[200px] rounded-3xl object-cover" />
                    <h1 className="text-xl font-bold">Whale Watching</h1>
                    <h3 className="text-gray-600 mb-[10px]">$45/person</h3>
                </div>

                <div className="w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5">
                    <img src="Safari Jeep Yala.jpg" alt="Activity" className="w-[300px] h-[200px] rounded-3xl object-cover" />
                    <h1 className="text-xl font-bold">Safari Jeep Yala</h1>
                    <h3 className="text-gray-600 mb-[10px]">$60/person</h3>
                </div>

                <div className="w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5">
                    <img src="Ayurveda Retreat.jpg" alt="Activity" className="w-[300px] h-[200px] rounded-3xl object-cover" />
                    <h1 className="text-xl font-bold">Ayurveda Retreat</h1>
                    <h3 className="text-gray-600 mb-[10px]">$30/session</h3>
                </div>

                <div className="w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5">
                    <img src="Surfing Arugam Bay.jpg" alt="Activity" className="w-[300px] h-[200px] rounded-3xl object-cover" />
                    <h1 className="text-xl font-bold">Surfing Arugam Bay</h1>
                    <h3 className="text-gray-600 mb-[10px]">$40/half-day</h3>
                </div>

                <div className="w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5">
                    <img src="Tea Factory Tour.jpg" alt="Activity" className="w-[300px] h-[200px] rounded-3xl object-cover" />
                    <h1 className="text-xl font-bold">Tea Factory Tour</h1>
                    <h3 className="text-gray-600 mb-[10px]">$18/person</h3>
                </div>

                <div className="w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5">
                    <img src="Scenic Train Ride.jpg" alt="Activity" className="w-[300px] h-[200px] rounded-3xl object-cover" />
                    <h1 className="text-xl font-bold">Scenic Train Ride</h1>
                    <h3 className="text-gray-600 mb-[10px]">$25/person</h3>
                </div>

                <div className="w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5">
                    <img src="Sigiriya Rock Climb.jpg" alt="Activity" className="w-[300px] h-[200px] rounded-3xl object-cover" />
                    <h1 className="text-xl font-bold">Sigiriya Rock Climb</h1>
                    <h3 className="text-gray-600 mb-[10px]">$45/person</h3>
                </div>

                <div className="w-[300px] h-[300px] bg-white rounded-3xl flex flex-col items-center justify-center gap-5">
                    <img src="Diving Trincomalee.jpg" alt="Activity" className="w-[300px] h-[200px] rounded-3xl object-cover" />
                    <h1 className="text-xl font-bold">Diving Trincomalee</h1>
                    <h3 className="text-gray-600 mb-[10px]">$55/dive</h3>
                </div>

            </div>
            {/* Footer */}
            <div className = "pt-0">
                <Footer />
            </div>
            
        </div>
    )
}