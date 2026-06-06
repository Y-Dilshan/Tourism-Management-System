import { FcGoogle } from "react-icons/fc";
import { GiStarShuriken } from "react-icons/gi";
import {Link} from "react-router-dom";

export default function RegisterPage() {
    return(
        <div className = "w-full h-screen flex">

            {/*left side */}
            <div className = "w-1/2 h-screen bg-[#0D4F46] flex flex-col">
                <div className = "flex gap-5 mt-40 pl-20">
                    <img src = "logo.png" alt="Logo" className="w-[80px] h-[80px]" />
                    <h1 className = "text-5xl font-bold text-[#C9A84C] items-center">GoLanka</h1>
                </div>

                <div className = "pl-20 pt-10 pr-20">
                    <p className = "text-[#F5EDD6] text-2xl">Join thousands of travelers who've discovered paradise with GoLanka.</p>
                </div>

                <div className = "pl-25 pt-10 pr-20">
                    <p className = "text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2"><GiStarShuriken />Exclusive member-only deals</p>
                    <p className = "text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2"><GiStarShuriken />Loyalty rewards program</p>
                    <p className = "text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2"><GiStarShuriken />Personalised itinerary builder</p>
                    <p className = "text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2"><GiStarShuriken />Real-time booking management</p>
                </div> 
            </div>

            {/*right side */}
            <div className = "w-1/2 h-screen bg-white flex flex-col ">
                <h1 className = "text-5xl text-black font-bold pl-20 pt-20">Create account</h1>
                <h2 className = "text-2xl text-black pt-5 pl-20">Start your Sri Lanka adventure today.</h2>
            
            <div className = "grid grid-cols-2 gap-15">
                <div className = "pl-20 pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">First Name</label>
                    <input className = "w-[325px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="firstName" type="text" placeholder="Enter your first name" />
                </div>

                <div className = " pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">Last Name</label>
                    <input className = "w-[325px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="lastName" type="text" placeholder="Enter your last name" />
                </div>
            </div>

                <div className = "pl-20 pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">Email Address</label>
                    <input className = "w-[700px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="email" type="text" placeholder="Enter your email address" />
                </div>

            <div className = "grid grid-cols-2 gap-15">
                <div className = "pl-20 pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">Phone Number</label>
                    <input className = "w-[325px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="phone" type="text" placeholder="Enter your phone number" />
                </div>

                <div className = " pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">Password</label>
                    <input className = "w-[325px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="password" type="password" placeholder="Enter your password" />
                </div>
            </div>
            

                <div>
                    <button className = "w-[700px] h-[50px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-white text-xl font-bold rounded mt-10 ml-20 cursor-pointer">Create Account</button>
                </div>


                <div className = "flex relative pt-10 pl-20">
                    <p className = "text-black text-xl">You already have an account? <Link to="/login" className="text-[#1A7A6E] hover:text-[#0D4F46] cursor-pointer">Sign in</Link></p>
                </div>

            </div>
        </div>
    )
}