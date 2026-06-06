import { FcGoogle } from "react-icons/fc";
import {Link} from "react-router-dom";

export default function LoginPage() {
    return(
        <div className = "w-full h-screen flex">

            {/*left side */}
            <div className = "w-1/2 h-screen bg-[#1A7A6E] flex flex-col items-center justify-center">
                
            </div>
                

            {/*right side */}
            <div className = "w-1/2 h-screen bg-white flex flex-col ">
                <h1 className = "text-5xl text-black font-bold pl-20 pt-20">Welcome Back!</h1>
                <h2 className = "text-2xl text-black pt-5 pl-20">Sign in to manage your Sri Lanka journey</h2>

                <div className = "pl-20 pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">Email Address</label>
                    <input className = "w-[700px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="email" type="text" placeholder="Enter your email address" />
                </div>

                <div className = "pl-20 pt-10">
                    <label className = "block text-gray-700 font-bold mb-2 text-xl">Password</label>
                    <input className = "w-[700px] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700" id="password" type="password" placeholder="Enter your password" />
                </div>
                
                <div>
                    <button className = "w-[700px] h-[50px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-white text-xl font-bold rounded mt-10 ml-20">Sign In</button>
                </div>

                <div className = "flex items-center justify-center pt-10">
                    <hr className = "w-[150px] border-black" />
                    <p className = "px-4 text-black">or continue with</p>
                    <hr className = "w-[150px] border-black" />
                </div>

                <div className="flex pt-10">
                    <button className="w-[700px] h-[50px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-xl text-white font-bold rounded ml-20 flex items-center justify-center gap-2">
                        <FcGoogle size={24} />Google</button>
                </div>

                <div className = "flex relative pt-10 pl-20">
                    <p className = "text-black text-xl">Don't have an account? <Link to="/signup" className="text-[#1A7A6E] hover:text-[#0D4F46]">Sign up</Link></p>
                </div>

            </div>
        </div>
    )
}