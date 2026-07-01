import Footer from "../components/footer";
import { FaPlay } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className = "w-full  flex flex-col overflow-auto overflow-x-hidden">
            <nav className="w-full h-[100px] bg-black flex items-center pl-20 gap-5">
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
        </nav>

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

                    <div className = "w-full h- flex gap-25 mt-10 ml-20 mr-20">
                        <div className = "flex flex-col items-center">
                            <FaHotel size = {100}/>
                            <h3 className = "font-bold text-[#C45A2A] text-xl mt-5">Hotels & Resorts</h3>
                            <p className = "text-gray-600 text -center flex items-center justify-center">Luxury to budget stays across all destinations</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <BsAirplaneEnginesFill size = {100}/>
                            <h3 className = "font-bold text-[#C45A2A] text-xl mt-5">Airport Transfers</h3>
                            <p className = "text-gray-600 text -center flex items-center justify-center">Seamless pickup & drop from CMB airport</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <IoCarSport size = {100}/>
                            <h3 className = "font-bold text-[#C45A2A] text-xl mt-5">Tour Vehicles</h3>
                            <p className = "text-gray-600 text -center flex items-center justify-center">AC cars, vans & buses for day trips</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <GiBookCover size = {100}/>
                            <h3 className = "font-bold text-[#C45A2A] text-xl mt-5">Guided Tours</h3>
                            <p className = "text-gray-600 text -center flex items-center justify-center">Expertly curated experiences across the island</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className = "border-[#0D4F46] mt-10 ml-20 mr-20" />

            {/*Popular destinations*/}
            <div>
                <div>
                    <h3 className = "text-[#C9A84C] text-2xl font-bold mt-10 ml-20">POPULAR DESTINATIONS</h3>
                    <h1 className = "text-black text-4xl ml-20 mt-5">Where will you go?</h1>

                    <div className = "w-full flex gap-10 mt-10 ml-20 mr-20 ">
                        <div className = "flex flex-col items-center">
                            <img src="kandy.jpg" alt="Destination 1" className="w-[340px] h-[200px] rounded-2xl object-cover" />
                            <h1 className = "text-[#C45A2A] text-xl font-bold mt-5">Kandy</h1>
                            <h3 className = "text-gray-600">Cultural Triangle</h3>
                        </div>

                        <div className = "flex flex-col items-center">
                            <img src="Galle.jpg" alt="Destination 2" className="w-[340px] h-[200px] rounded-2xl object-cover"/>
                            <h1 className = "text-[#C45A2A] text-xl font-bold mt-5">Galle</h1>
                            <h3 className = "text-gray-600">Southern Coast</h3>
                        </div>

                        <div className = "flex flex-col items-center">
                            <img src="Yala.jpg" alt="Destination 3" className="w-[340px] h-[200px] rounded-2xl object-cover"/>
                            <h1 className = "text-[#C45A2A] text-xl font-bold mt-5">Yala</h1>
                            <h3 className = "text-gray-600">Wildlife Safari</h3>
                        </div>

                        <div className = "flex flex-col items-center">
                            <img src="Nuwara Eliya.jpg" alt="Destination 4" className="w-[340px] h-[200px] rounded-2xl object-cover"/>
                            <h1 className = "text-[#C45A2A] text-xl font-bold mt-5">Nuwara Eliya</h1>
                            <h3 className = "text-gray-600">Hill Country Tea</h3>
                        </div>
                    </div>
                </div>
            </div>

            <hr className = "border-[#0D4F46] mt-10 ml-20 mr-20" />

            {/*Rated items*/}

            <div>
                <div>
                    <h3 className = "text-[#C9A84C] text-2xl font-bold mt-10 ml-20">TOP RATED STAYS</h3>
                    <h1 className = "text-black text-4xl ml-20 mt-5">Featured hotels</h1>

                    <div className = "w-full flex gap-10 mt-10 ml-20 mr-20">
                        <div className = "flex flex-col items-center">
                            <img src="Araliya Beach Resort.jpg" alt="Hotel 1" className="w-[340px] h-[200px] rounded-2xl object-cover"/>
                            <h1 className = "text-[#C45A2A] text-xl font-bold mt-5">Araliya Beach Resort</h1>
                            <p className = "text-gray-600 mb-10">Unawatuna, Galle</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <img src="Theva Residency.jpg" alt="Hotel 2" className="w-[340px] h-[200px] rounded-2xl object-cover"/>
                            <h1 className = "text-[#C45A2A] text-xl font-bold mt-5">Theva Residency</h1>
                            <p className = "text-gray-600 mb-10">Kandy Hills</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <img src="Eco Lodge.jpg" alt="Hotel 3" className="w-[340px] h-[200px] rounded-2xl object-cover"/>
                            <h1 className = "text-[#C45A2A] text-xl font-bold mt-5">Saffron Lodge Sigiriya</h1>
                            <p className = "text-gray-600 mb-10">Sigiriya, Dambulla</p>
                        </div>

                        <div className = "flex flex-col items-center">
                            <img src="beachfront hotel.jpg" alt="Hotel 3" className="w-[340px] h-[200px] rounded-2xl object-cover"/>
                            <h1 className = "text-[#C45A2A] text-xl font-bold mt-5">Beachfront Hotel</h1>
                            <p className = "text-gray-600 mb-10">Gall Face, Colombo</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}