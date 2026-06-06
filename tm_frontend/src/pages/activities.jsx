import { Link } from "react-router-dom"

export default function ActivitiesPage() {
    return(
        <div className="w-full h-[300px] bg-black flex  pl-20 gap-5">
            <img src="logo.png" alt="Logo" className="w-[80px] h-[80px] mt-5" />
            <h1 className="text-5xl text-[#C9A84C] font-bold mt-5"> GoLanka </h1>

            <div className="flex gap-10 ml-[400px]">
                <Link to="/*" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer mt-5"> Home </Link>
                <Link to="/hotels" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer mt-5"> Hotels </Link>
                <Link to="/vehicles" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer mt-5"> Vehicles </Link>
                <Link to="/tours" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer mt-5"> Tours </Link>
                <Link to="/guides" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer mt-5"> Guides </Link>
                <Link to="/contact" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer mt-5"> Contact </Link>
            </div>

            <div className="flex gap-5 mr-20">
                <button className="w-[150px] h-[40px] mt-5 bg-[#C9A84C] hover:bg-[#0D4F46] text-black text-lg font-bold rounded-3xl ml-20 cursor-pointer"><Link to="/login">My Bookings</Link></button>
            </div>
        </div>
    )
}