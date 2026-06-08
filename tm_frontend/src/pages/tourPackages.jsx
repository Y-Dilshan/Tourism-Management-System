import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";

export default function TourPackages(){
    return(
        <div>
            <div className="w-full h-[100px] bg-black flex items-center pl-20 gap-5">
                <img src="logo.png" alt="Logo" className="w-[80px] h-[80px]" />
                <h1 className="text-5xl text-[#C9A84C] font-bold"> GoLanka </h1>

                <div className="flex gap-10 ml-[400px]">
                    <Link to="/*" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Home </Link>
                    <Link to="/hotels" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Hotels </Link>
                    <Link to="/vehicles" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Vehicles </Link>
                    <Link to="/activities" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Activities </Link>
                    <Link to="/guides" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Guides </Link>
                    <Link to="/contact" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Contact </Link>
                </div>

                <div className="flex gap-5 mr-20">
                    <button className="w-[150px] h-[40px] bg-[#C9A84C] hover:bg-[#F5EDD6] text-black text-lg font-bold rounded-3xl ml-20 cursor-pointer"><Link to="/">My Bookings</Link></button>
                </div>
            </div>

            <div className = "w-full h-[200px] bg-black flex flex-col pl-20 gap-5">
                <h1 className="text-2xl text-[#C9A84C] font-bold mt-10"> TOUR PACKAGES </h1>
                <p className="text-4xl text-white">Curated Sri Lanka Journeys</p>
                <p className = "text-white">All-inclusive packages with hotel, vehicle, guide & activities</p>
            </div>

            </div>
    )
}