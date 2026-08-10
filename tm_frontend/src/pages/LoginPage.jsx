import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoShieldCheck } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to sign in");
            }

            setSuccess(data.message || "Login successful!");
            localStorage.setItem("user", JSON.stringify(data.user));

            setTimeout(() => {
                if (data.user?.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/dashboard");
                }
            }, 1000);
        } catch (err) {
            setError(err.message || "An error occurred. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-screen flex">
            {/* Left side */}
            <div className="w-1/2 h-screen bg-[#0D4F46] flex flex-col justify-center">
                <div className="flex gap-5 pl-20">
                    <img src="logo.png" alt="Logo" className="w-[80px] h-[80px]" />
                    <h1 className="text-5xl font-bold text-[#C9A84C] flex items-center">GoLanka</h1>
                </div>

                <div className="pl-20 pt-10 pr-20">
                    <p className="text-[#F5EDD6] text-2xl">
                        Your gateway to the pearl of the Indian Ocean. Curated experiences, seamless travel.
                    </p>
                </div>

                <div className="pl-25 pt-10 pr-20">
                    <p className="text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2">
                        <GoShieldCheck />Book hotels across all 9 provinces.
                    </p>
                    <p className="text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2">
                        <GoShieldCheck />Airport transfers & tour vehicles
                    </p>
                    <p className="text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2">
                        <GoShieldCheck />Guided activities & excursions
                    </p>
                    <p className="text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2">
                        <GoShieldCheck />24/7 travel concierge support
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div className="w-1/2 h-screen bg-white flex flex-col overflow-y-auto">
                <h1 className="text-5xl text-black font-bold pl-20 pt-20">Welcome Back!</h1>
                <h2 className="text-2xl text-black pt-5 pl-20">Sign in to manage your Sri Lanka journey</h2>

                <form onSubmit={handleLogin} className="w-full">
                    {/* Error Alert */}
                    {error && (
                        <div className="ml-20 mr-20 mt-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded shadow">
                            <p className="font-semibold">{error}</p>
                        </div>
                    )}

                    {/* Success Alert */}
                    {success && (
                        <div className="ml-20 mr-20 mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded shadow">
                            <p className="font-semibold">{success}</p>
                        </div>
                    )}

                    <div className="pl-20 pt-8">
                        <label className="block text-gray-700 font-bold mb-2 text-xl">Email Address</label>
                        <input
                            className="w-[700px] max-w-[85%] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1A7A6E]"
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="pl-20 pt-6">
                        <label className="block text-gray-700 font-bold mb-2 text-xl">Password</label>
                        <input
                            className="w-[700px] max-w-[85%] h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1A7A6E]"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-[700px] max-w-[85%] h-[50px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-white text-xl font-bold rounded mt-8 ml-20 transition duration-200 cursor-pointer ${
                                loading ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-center pt-8">
                    <hr className="w-[150px] border-gray-300" />
                    <p className="px-4 text-gray-500">or continue with</p>
                    <hr className="w-[150px] border-gray-300" />
                </div>

                <div className="flex pt-6">
                    <button
                        type="button"
                        className="w-[700px] max-w-[85%] h-[50px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-xl text-white font-bold rounded ml-20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <FcGoogle size={24} /> Google
                    </button>
                </div>

                <div className="flex relative pt-8 pl-20 pb-10">
                    <p className="text-black text-xl">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-[#1A7A6E] hover:text-[#0D4F46] font-semibold">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}