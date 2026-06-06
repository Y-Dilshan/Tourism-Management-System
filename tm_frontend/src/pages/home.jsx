import Header from "../components/header";
import { FaPlay } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import { GiBookCover } from "react-icons/gi";

export default function Home() {
    return(
        <div className = "w-full  flex flex-col overflow-auto overflow-x-hidden">
            <Header />

            {/*Left side */}
            <div className = "w-full h-[calc(100vh-100px)] flex items-center justify-center">
                <div className = "bg-[#0D4F46] w-3/4 h-full flex flex-col">
                    <p className = "text-8xl text-white pt-20 ml-20 ">Discover the Pearl of the Indian Ocean.</p>
                    <span className = "text-2xl ml-20 mt-10 text-[#C9A84C]">From ancient temples to pristine beaches — we handle every detail so you travel worry-free.</span>

                    <div className = "flex gap-5">
                        <button className = "w-[200px] h-[50px] bg-[#C9A84C] cursor-pointer hover:bg-[#F5EDD6] text-black text-xl font-bold rounded-3xl mt-10 ml-20">Plan My Trip</button>
                        <button className = "w-[300px] h-[50px] bg-[#0D4F46] cursor-pointer text-white text-xl font-bold rounded-3xl mt-10 ml-10 border border-[#F5EDD6] flex items-center justify-center gap-3"><FaPlay size={20}/>Watch Island Story</button>
                    </div>

                    <hr className = "border-[#F5EDD6] mt-10 ml-20 mr-20" />

                    <div className = "w-full h-screen flex gap-30 mt-10 ml-20 mr-20">
                        <div>
                            <p className = "text-[#C9A84C] text-5xl">12K+</p>
                            <p className = "text-white pt-5">Happy Travelers</p>
                        </div>

                        <div>
                            <p className = "text-[#C9A84C] text-5xl">45+</p>
                            <p className = "text-white pt-5">Tour Packages</p>
                        </div>

                        <div>
                            <p className = "text-[#C9A84C] text-5xl">280K+</p>
                            <p className = "text-white pt-5">Hotels & Resorts</p>
                        </div>

                        <div>
                            <p className = "text-[#C9A84C] text-5xl">9</p>
                            <p className = "text-white pt-5">Provinces Covered</p>
                        </div>
                    </div>
                </div>


                {/*Right side */}
                <div className = " w-1/4 h-full flex-col flex">
                    
                    <div className = "w-full h-1/3">
                        <img src = "home1.jpg" alt="Home Image" className="w-full h-full object-cover" />
                    </div>

                    <div className = "w-full h-1/3">
                        <img src = "home2.jpg" alt="Home Image" className="w-full h-full object-cover" />
                    </div>

                    <div className = "w-full h-1/3">
                        <img src = "home3.jpg" alt="Home Image" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            

            {/* services */}
            <div>
                <div className = "w-full flex flex-col">
                    <h3 className = "text-[#C9A84C] text-2xl font-bold mt-10 ml-20">WHAT WE OFFER</h3>
                    <h1 className = "text-black text-4xl ml-20 mt-5">Everything for your journey</h1>

                    <div className = "w-full h- flex gap-30 mt-10 ml-20 mr-20">
                        <div className = "flex flex-col items-center">
                            <FaHotel size = {100}/>
                            <h3 className = "text-bold text-black text-xl mt-5">Hotels & Resorts</h3>
                            <p className = "text-gray-600 text -center flex items-center justify-center">Luxury to budget stays across all destinations</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <BsAirplaneEnginesFill size = {100}/>
                            <h3 className = "text-bold text-black text-xl mt-5">Airport Transfers</h3>
                            <p className = "text-gray-600 text -center flex items-center justify-center">Seamless pickup & drop from CMB airport</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <IoCarSport size = {100}/>
                            <h3 className = "text-bold text-black text-xl mt-5">Tour Vehicles</h3>
                            <p className = "text-gray-600 text -center flex items-center justify-center">AC cars, vans & buses for day trips</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <GiBookCover size = {100}/>
                            <h3 className = "text-bold text-black text-xl mt-5">Guided Tours</h3>
                            <p className = "text-gray-600 text -center flex items-center justify-center">Expertly curated experiences across the island</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className = "border-[#F5EDD6] mt-10 ml-20 mr-20" />

            {/*Popular destinations*/}
            <div>
                <div>
                    <h3 className = "text-[#C9A84C] text-2xl font-bold mt-10 ml-20">POPULAR DESTINATIONS</h3>
                    <h1 className = "text-black text-4xl ml-20 mt-5">Where will you go?</h1>

                    <div className = "w-full flex gap-30 mt-10 ml-20 mr-20">
                        <div>
                            <img />
                            <h1></h1>
                            <h3></h3>
                        </div>

                        <div>
                            <img />
                            <h1></h1>
                            <h3></h3>
                        </div>

                        <div>
                            <img />
                            <h1></h1>
                            <h3></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}