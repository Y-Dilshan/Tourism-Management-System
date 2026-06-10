import {Link} from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { LiaHotelSolid } from "react-icons/lia";
import { FaCar } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { LuActivity } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";

export default function AdminDashboard(){
    return(
        <div className = "flex bg-[#F8F5EE]">
            {/* left side */}
            <div className = "w-[300px] h-screen bg-[#242124] border-r-1 border-white">
                <div className = "flex justify-center items-center  mt-5 gap-5">
                    <img src = "logo.png" className = "w-[80px] h-[80px] ml-10" />
                    <span className = "text-[#C9A84C] text-4xl font-bold mr-10">Go Lanka</span>
                </div>
                <span className = "text-white flex text-center items-center justify-center mt-5">Admin Panel</span>

                <hr className = "border-amber-50 m-5"  />

                {/*main buttons */}
                <div className = "flex flex-col">
                    <span className = "text-white ml-10 font-bold text-2xl">MAIN</span>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><MdSpaceDashboard />Dashboard</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><RiContactsBook3Fill />Bookings</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><LiaHotelSolid />Hotels</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><FaCar />Vehicles</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><IoBook />Tour Packages</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><LuActivity />Activities</Link>

                    <span className = "text-white ml-10 mt-3 corsor-pointer font-bold text-2xl">MANAGEMENT</span>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><FaUsers />Users</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><MdReviews />Reviews</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><TbReportSearch />Reports</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl flex items-center gap-5"><IoSettings />Settings</Link>
                </div>

                <hr className = "border-amber-50 m-5"  />

                <div className = "flex justify-center items-center mt-5 gap-5">
                    <img src = "" className = "w-[80px] h-[80px] ml-10 rounded-full bg-white" />
                    <span className = "text-white text-xl mr-10">Admin User</span>
                </div>
               
            </div>

            {/* right side */}
            <div className = "w-[calc(100%-300px)] h-screen bg-black">
                <div className = "w-full h-[80px] bg-[#242124] border-b-1 border-white flex items-center"><span className = "ml-10 flex text-white text-3xl font-bold">Dashboard</span>
                    <input type='text' placeholder='Search here' className = "w-[400px] h-[40px] px-4 rounded-lg bg-[#333333] text-white border border-gray-500 focus:outline-none focus:border-[#D4AF37] ml-180" />
                </div>

            </div>
        </div>
    )
}
