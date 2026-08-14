import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
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
        <div className="w-full h-[100px] bg-black flex items-center justify-between px-10">
            <div className="flex items-center gap-5">
                <img src="/logo.png" alt="Logo" className="w-[70px] h-[70px] object-contain" />
                <h1 className="text-4xl text-[#C9A84C] font-bold"> GoLanka </h1>
            </div>

            <div className="flex gap-8">
                <Link to="/" className="text-white text-lg hover:text-[#C9A84C] transition cursor-pointer"> Home </Link>
                <Link to="/about" className="text-white text-lg hover:text-[#C9A84C] transition cursor-pointer"> About </Link>
                <Link to="/hotels" className="text-white text-lg hover:text-[#C9A84C] transition cursor-pointer"> Hotels </Link>
                <Link to="/vehicles" className="text-white text-lg hover:text-[#C9A84C] transition cursor-pointer"> Vehicles </Link>
                <Link to="/tours" className="text-white text-lg hover:text-[#C9A84C] transition cursor-pointer"> Tours </Link>
                <Link to="/guides" className="text-white text-lg hover:text-[#C9A84C] transition cursor-pointer"> Guides </Link>
                <Link to="/activities" className="text-white text-lg hover:text-[#C9A84C] transition cursor-pointer"> Activities </Link>
                <Link to="/contact" className="text-white text-lg hover:text-[#C9A84C] transition cursor-pointer"> Contact </Link>
            </div>

            <div className="flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-4">
                        <Link
                            to={user.role === "admin" ? "/admin" : "/dashboard"}
                            className="flex items-center gap-2 bg-[#1A7A6E] hover:bg-[#0D4F46] text-white px-4 py-2 rounded-full font-semibold transition text-sm shadow"
                        >
                            <FaUserCircle size={18} />
                            <span>{user.name || "My Dashboard"}</span>
                        </Link>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-1.5 bg-red-800/80 hover:bg-red-700 text-white px-3.5 py-2 rounded-full font-medium transition text-xs shadow"
                            title="Sign Out"
                        >
                            <FaSignOutAlt size={14} />
                            <span>Logout</span>
                        </button>
                    </div>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="w-[110px] h-[40px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-white text-base font-bold rounded flex items-center justify-center transition cursor-pointer"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="/signup"
                            className="w-[110px] h-[40px] bg-[#F5EDD6] hover:bg-[#C9A84C] text-black text-base font-bold rounded flex items-center justify-center transition cursor-pointer"
                        >
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}