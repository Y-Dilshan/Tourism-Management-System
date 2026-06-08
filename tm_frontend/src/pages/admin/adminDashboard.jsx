import {Link} from 'react-router-dom'

export default function AdminDashboard(){
    return(
        <div className = "flex">
            {/* left side */}
            <div className = "w-[300px] h-screen bg-black">
                <div className = "flex justify-center items-center mt-5 gap-5">
                    <img src = "logo.png" className = "w-[80px] h-[80px] ml-10" />
                    <span className = "text-[#C9A84C] text-4xl font-bold">Go Lanka</span>
                </div>
                <span className = "text-white flex text-center items-center justify-center mt-5">Admin Panel</span>

                <hr className = "border-amber-50 m-5"  />

                {/*main buttons */}
                <div className = "flex flex-col">
                    <span className = "text-white ml-10 font-bold text-2xl">MAIN</span>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Dashboard</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Bookings</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Hotels</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Vehicles</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Tour Packages</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Activities</Link>

                    <span className = "text-white ml-10 mt-3 corsor-pointer font-bold text-2xl">MANAGEMENT</span>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Users</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Reviews</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Reports</Link>
                    <Link to = "/" className = "text-[#C9A84C] ml-10 mt-3 corsor-pointer text-xl">Settings</Link>
                </div>

                <hr className = "border-amber-50 m-5"  />

                <div className = "flex justify-center items-center mt-5 gap-5">
                    <img src = "" className = "w-[80px] h-[80px] ml-10 rounded-full bg-white" />
                    <span className = "text-white text-2xl">Admin User</span>
                </div>
               
            </div>

            {/* right side */}
            <div className = "w-[calc(100%-300px)] h-screen bg-amber-900"></div>
        </div>
    )
}