import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="w-full h-[100px] bg-black flex items-center pl-20 gap-5">
            <img src="logo.png" alt="Logo" className="w-[80px] h-[80px]" />
            <h1 className="text-5xl text-[#C9A84C] font-bold"> GoLanka </h1>

            <div className="flex gap-10 ml-[150px]">
                <Link to="/*" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Home </Link>
                <Link to="/hotels" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Hotels </Link>
                <Link to="/vehicles" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Vehicles </Link>
                <Link to="/tours" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Tours </Link>
                <Link to="/guides" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Guides </Link>
                <Link to="/activities" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Activities </Link>
                <Link to="/contact" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Contact </Link>
            </div>

            <div className="flex gap-5 mr-20">
                <button className="w-[120px] h-[40px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-white text-lg font-bold rounded ml-20 cursor-pointer"><Link to="/login">Sign in</Link></button>
                <button className="w-[120px] h-[40px] bg-[#F5EDD6] hover:bg-[#C9A84C] text-black text-lg font-bold rounded ml-5 cursor-pointer"><Link to="/signup">Sign Up</Link></button>
            </div>
        </div>
    )
}