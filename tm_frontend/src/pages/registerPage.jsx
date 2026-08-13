import { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!firstName.trim() || !email.trim() || !password) {
            setError("Please fill in First Name, Email, and Password.");
            return;
        }

        setLoading(true);

        const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

        try {
            const response = await fetch("http://localhost:3000/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: fullName,
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email: email.trim().toLowerCase(),
                    password: password,
                    phone: phone.trim(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to create account");
            }

            setSuccess("Account created successfully! Redirecting to login...");
            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } catch (err) {
            if (err.name === "TypeError" || err.message.toLowerCase().includes("fetch")) {
                setError("Cannot connect to server (http://localhost:3000). Please make sure your backend server is running.");
            } else {
                setError(err.message || "An error occurred during registration.");
            }
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
                        Join thousands of travelers who've discovered paradise with GoLanka.
                    </p>
                </div>

                <div className="pl-25 pt-10 pr-20">
                    <p className="text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2">
                        <GiStarShuriken />Exclusive member-only deals
                    </p>
                    <p className="text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2">
                        <GiStarShuriken />Loyalty rewards program
                    </p>
                    <p className="text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2">
                        <GiStarShuriken />Personalised itinerary builder
                    </p>
                    <p className="text-[#F5EDD6] text-2xl pt-7 flex items-center gap-2">
                        <GiStarShuriken />Real-time booking management
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div className="w-1/2 h-screen bg-white flex flex-col overflow-y-auto">
                <h1 className="text-5xl text-black font-bold pl-20 pt-20">Create account</h1>
                <h2 className="text-2xl text-black pt-5 pl-20">Start your Sri Lanka adventure today.</h2>

                <form onSubmit={handleRegister} className="w-full">
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

                    <div className="grid grid-cols-2 gap-10 max-w-[85%] pr-10">
                        <div className="pl-20 pt-6">
                            <label className="block text-gray-700 font-bold mb-2 text-xl">First Name</label>
                            <input
                                className="w-full h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1A7A6E]"
                                id="firstName"
                                type="text"
                                placeholder="Enter first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="pt-6">
                            <label className="block text-gray-700 font-bold mb-2 text-xl">Last Name</label>
                            <input
                                className="w-full h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1A7A6E]"
                                id="lastName"
                                type="text"
                                placeholder="Enter last name (optional)"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="pl-20 pt-6">
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

                    <div className="grid grid-cols-2 gap-10 max-w-[85%] pr-10">
                        <div className="pl-20 pt-6">
                            <label className="block text-gray-700 font-bold mb-2 text-xl">Phone Number</label>
                            <input
                                className="w-full h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1A7A6E]"
                                id="phone"
                                type="text"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="pt-6">
                            <label className="block text-gray-700 font-bold mb-2 text-xl">Password</label>
                            <input
                                className="w-full h-[50px] shadow rounded py-2 px-3 bg-[#F5EDD6] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1A7A6E]"
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-[700px] max-w-[85%] h-[50px] bg-[#1A7A6E] hover:bg-[#0D4F46] text-white text-xl font-bold rounded mt-8 ml-20 transition duration-200 cursor-pointer ${
                                loading ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                    </div>
                </form>

                <div className="flex relative pt-8 pl-20 pb-10">
                    <p className="text-black text-xl">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#1A7A6E] hover:text-[#0D4F46] font-semibold cursor-pointer">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}