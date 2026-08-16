import { useState, useEffect } from "react";
import Footer from "../components/footer";
import { FaPlay, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";
import { GiBookCover } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (err) {
                console.error("Failed to parse user data", err);
            }
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <div className="w-full flex flex-col overflow-auto overflow-x-hidden bg-white">
            {/* Navbar */}
            <nav className="w-full h-[90px] bg-black flex items-center px-6 lg:px-20 gap-5 sticky top-0 z-50 shadow-lg">
                <img src="logo.png" alt="Logo" className="w-[60px] h-[60px] object-contain" />
                <h1 className="text-3xl lg:text-4xl text-[#C9A84C] font-bold tracking-wide">GoLanka</h1>

                <div className="hidden lg:flex gap-8 ml-auto mr-auto">
                    <Link to="/" className="text-white text-base font-medium hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">Home</Link>
                    <Link to="/about" className="text-white text-base font-medium hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">About</Link>
                    <Link to="/hotels" className="text-white text-base font-medium hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">Hotels</Link>
                    <Link to="/vehicles" className="text-white text-base font-medium hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">Vehicles</Link>
                    <Link to="/tours" className="text-white text-base font-medium hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">Tours</Link>
                    <Link to="/guides" className="text-white text-base font-medium hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">Guides</Link>
                    <Link to="/activities" className="text-white text-base font-medium hover:text-[#C9A84C] transition-colors duration-200 cursor-pointer">Activities</Link>
                </div>

                <div className="flex gap-3 ml-auto items-center">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <Link
                                to={user.role === "admin" ? "/admin" : "/dashboard"}
                                className="flex items-center gap-2 bg-[#1A7A6E] hover:bg-[#0D4F46] text-white px-4 py-2 rounded-full font-semibold transition text-sm shadow"
                            >
                                <FaUserCircle size={18} />
                                <span>{user.name || "My Dashboard"}</span>
                            </Link>
                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-1.5 bg-red-800/80 hover:bg-red-700 text-white px-3.5 py-2 rounded-full font-medium transition text-xs shadow cursor-pointer"
                                title="Sign Out"
                            >
                                <FaSignOutAlt size={14} />
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="w-[110px] h-[40px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-white text-base font-semibold rounded-full transition-colors duration-200 shadow-md cursor-pointer">
                                    Sign in
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="w-[110px] h-[40px] bg-[#F5EDD6] hover:bg-[#C9A84C] text-black text-base font-semibold rounded-full transition-colors duration-200 shadow-md cursor-pointer">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Hero */}
            <div className="w-full min-h-[calc(100vh-90px)] flex flex-col lg:flex-row items-stretch">
                {/* Left side */}
                <div className="bg-gradient-to-br from-[#0D4F46] to-[#123f38] w-full lg:w-3/4 flex flex-col px-8 lg:px-20 py-16">
                    <p className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
                        Discover the <span className="text-[#C9A84C]">Pearl</span> of the Indian Ocean.
                    </p>
                    <span className="text-lg md:text-2xl mt-6 text-[#C9A84C]/90 max-w-2xl">
                        From ancient temples to pristine beaches — we handle every detail so you travel worry-free.
                    </span>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link to="/tours">
                            <button className="px-8 h-[52px] bg-[#C9A84C] hover:bg-[#F5EDD6] text-black text-lg font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">
                                Plan My Trip
                            </button>
                        </Link>
                        <Link to="/tours">
                            <button className="px-8 h-[52px] bg-transparent hover:bg-white/10 text-white text-lg font-bold rounded-full border-2 border-[#F5EDD6] flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer">
                                <FaPlay size={18} /> Watch Island Story
                            </button>
                        </Link>
                    </div>

                    <hr className="border-[#F5EDD6]/30 mt-14" />

                    <div className="w-full flex flex-wrap gap-x-16 gap-y-8 mt-12">
                        <div>
                            <p className="text-[#C9A84C] text-4xl lg:text-5xl font-extrabold">12K+</p>
                            <p className="text-white/80 pt-2">Happy Travelers</p>
                        </div>
                        <div>
                            <p className="text-[#C9A84C] text-4xl lg:text-5xl font-extrabold">45+</p>
                            <p className="text-white/80 pt-2">Tour Packages</p>
                        </div>
                        <div>
                            <p className="text-[#C9A84C] text-4xl lg:text-5xl font-extrabold">280K+</p>
                            <p className="text-white/80 pt-2">Hotels & Resorts</p>
                        </div>
                        <div>
                            <p className="text-[#C9A84C] text-4xl lg:text-5xl font-extrabold">9</p>
                            <p className="text-white/80 pt-2">Provinces Covered</p>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="w-full lg:w-1/4 flex-col flex">
                    <div className="w-full h-[200px] lg:h-1/3 overflow-hidden group">
                        <img src="home1.jpg" alt="Home Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="w-full h-[200px] lg:h-1/3 overflow-hidden group">
                        <img src="home2.jpg" alt="Home Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="w-full h-[200px] lg:h-1/3 overflow-hidden group">
                        <img src="home3.jpg" alt="Home Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="w-full flex flex-col px-6 lg:px-20 py-20">
                <h3 className="text-[#C9A84C] text-xl font-bold tracking-wider">WHAT WE OFFER</h3>
                <h1 className="text-black text-3xl lg:text-4xl font-bold mt-3">Everything for your journey</h1>

                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                        <FaHotel size={70} className="text-[#0D4F46]" />
                        <h3 className="font-bold text-[#C45A2A] text-lg mt-5">Hotels & Resorts</h3>
                        <p className="text-gray-600 mt-2">Luxury to budget stays across all destinations</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                        <BsAirplaneEnginesFill size={70} className="text-[#0D4F46]" />
                        <h3 className="font-bold text-[#C45A2A] text-lg mt-5">Airport Transfers</h3>
                        <p className="text-gray-600 mt-2">Seamless pickup & drop from CMB airport</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                        <IoCarSport size={70} className="text-[#0D4F46]" />
                        <h3 className="font-bold text-[#C45A2A] text-lg mt-5">Tour Vehicles</h3>
                        <p className="text-gray-600 mt-2">AC cars, vans & buses for day trips</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                        <GiBookCover size={70} className="text-[#0D4F46]" />
                        <h3 className="font-bold text-[#C45A2A] text-lg mt-5">Guided Tours</h3>
                        <p className="text-gray-600 mt-2">Expertly curated experiences across the island</p>
                    </div>
                </div>
            </div>

            <hr className="border-[#0D4F46]/20 mx-6 lg:mx-20" />

            {/* Popular destinations */}
            <div className="px-6 lg:px-20 py-20">
                <h3 className="text-[#C9A84C] text-xl font-bold tracking-wider">POPULAR DESTINATIONS</h3>
                <h1 className="text-black text-3xl lg:text-4xl font-bold mt-3">Where will you go?</h1>

                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-md">
                            <img src="kandy.jpg" alt="Destination 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-[#C45A2A] text-xl font-bold mt-4">Kandy</h1>
                        <h3 className="text-gray-600">Cultural Triangle</h3>
                    </div>
                    <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-md">
                            <img src="Galle.jpg" alt="Destination 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-[#C45A2A] text-xl font-bold mt-4">Galle</h1>
                        <h3 className="text-gray-600">Southern Coast</h3>
                    </div>
                    <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-md">
                            <img src="Yala.jpg" alt="Destination 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-[#C45A2A] text-xl font-bold mt-4">Yala</h1>
                        <h3 className="text-gray-600">Wildlife Safari</h3>
                    </div>
                    <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-md">
                            <img src="Nuwara Eliya.jpg" alt="Destination 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-[#C45A2A] text-xl font-bold mt-4">Nuwara Eliya</h1>
                        <h3 className="text-gray-600">Hill Country Tea</h3>
                    </div>
                </div>
            </div>

            <hr className="border-[#0D4F46]/20 mx-6 lg:mx-20" />

            {/* Rated items */}
            <div className="px-6 lg:px-20 py-20">
                <h3 className="text-[#C9A84C] text-xl font-bold tracking-wider">TOP RATED STAYS</h3>
                <h1 className="text-black text-3xl lg:text-4xl font-bold mt-3">Featured hotels</h1>

                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-md">
                            <img src="Araliya Beach Resort.jpg" alt="Hotel 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-[#C45A2A] text-xl font-bold mt-4">Araliya Beach Resort</h1>
                        <p className="text-gray-600 mb-2">Unawatuna, Galle</p>
                    </div>
                    <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-md">
                            <img src="Theva Residency.jpg" alt="Hotel 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-[#C45A2A] text-xl font-bold mt-4">Theva Residency</h1>
                        <p className="text-gray-600 mb-2">Kandy Hills</p>
                    </div>
                    <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-md">
                            <img src="Eco Lodge.jpg" alt="Hotel 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-[#C45A2A] text-xl font-bold mt-4">Saffron Lodge Sigiriya</h1>
                        <p className="text-gray-600 mb-2">Sigiriya, Dambulla</p>
                    </div>
                    <div className="flex flex-col items-center group cursor-pointer">
                        <div className="w-full h-[220px] rounded-2xl overflow-hidden shadow-md">
                            <img src="beachfront hotel.jpg" alt="Hotel 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h1 className="text-[#C45A2A] text-xl font-bold mt-4">Beachfront Hotel</h1>
                        <p className="text-gray-600 mb-2">Galle Face, Colombo</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}