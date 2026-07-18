import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaUserTag,
    FaCamera,
    FaArrowLeft,
    FaStamp,
    FaPlaneDeparture,
} from "react-icons/fa";

export default function AdminAddUser() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        role: "Traveler",
        status: "Active",
        image: null,
    });

    const [preview, setPreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const roles = ["Traveler", "Driver", "Admin"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUser((prev) => ({ ...prev, image: file }));
        setPreview(URL.createObjectURL(file));

        if (errors.image) {
            setErrors((prev) => ({ ...prev, image: null }));
        }
    };

    const validate = () => {
        const next = {};

        if (!user.name.trim()) next.name = "Passenger name is required";

        if (!user.email.trim()) {
            next.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email.trim())) {
            next.email = "Enter a valid email address";
        }

        if (!user.phone.trim()) {
            next.phone = "Contact number is required";
        } else if (!/^\+?[\d\s-]{7,15}$/.test(user.phone.trim())) {
            next.phone = "Enter a valid phone number";
        }

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const resetForm = () => {
        setUser({
            name: "",
            email: "",
            phone: "",
            role: "Traveler",
            status: "Active",
            image: null,
        });
        setPreview(null);
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setSubmitting(true);

        try {
            // Replace with real API call, e.g.:
            // const formData = new FormData();
            // Object.entries(user).forEach(([key, val]) => formData.append(key, val));
            // await fetch("/api/users", { method: "POST", body: formData });

            await new Promise((resolve) => setTimeout(resolve, 600));

            alert("User Added Successfully!");
            resetForm();
        } catch (err) {
            alert("Something went wrong while saving the user. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const today = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div>
            {/* Header — boarding-pass style, matches AdminUsers */}
            <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
                <div className="flex-1 p-8">
                    <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2"> Admin · Passenger Registry </p>
                    <h1 className="font-serif text-4xl text-[#0D2A24]"> Add New User </h1>
                    <p className="text-[#4B5F59] mt-2"> Issue a new passenger profile </p>
                </div>

                <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Registering </p>
                    <p className="font-serif text-2xl text-white mt-1"> New Passenger </p>
                    <Link to="/admin/users">
                        <button className="mt-5 bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#F5EDD6] transition flex items-center gap-2">
                            <FaArrowLeft size={12} /> Back to Registry
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Form — ledger style */}
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="lg:col-span-2 bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden"
                >
                    <div className="px-8 py-6 border-b border-[#0D4F46]/15">
                        <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Ledger Entry </p>
                        <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Passenger Details </h2>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Input
                                icon={<FaUser />}
                                label="Full Name"
                                name="name"
                                placeholder="Amara Fernando"
                                value={user.name}
                                onChange={handleChange}
                                error={errors.name}
                            />

                            <Input
                                icon={<FaEnvelope />}
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="amara.fernando@gmail.com"
                                value={user.email}
                                onChange={handleChange}
                                error={errors.email}
                            />

                            <Input
                                icon={<FaPhone />}
                                label="Contact Number"
                                name="phone"
                                placeholder="+94 76 112 3344"
                                value={user.phone}
                                onChange={handleChange}
                                error={errors.phone}
                            />

                            <div>
                                <label className="font-semibold mb-2 block text-[#0D2A24]">Role</label>
                                <div className="flex items-center border border-[#0D4F46]/20 rounded-xl px-3 focus-within:border-[#C9A84C]">
                                    <span className="text-[#4B5F59] mr-3"><FaUserTag /></span>
                                    <select
                                        name="role"
                                        value={user.role}
                                        onChange={handleChange}
                                        className="w-full p-3 outline-none bg-transparent text-[#0D2A24]"
                                    >
                                        {roles.map((r) => (
                                            <option key={r} value={r}>{r}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="font-semibold mb-2 block text-[#0D2A24]">Status</label>
                                <div className="flex items-center border border-[#0D4F46]/20 rounded-xl px-3 focus-within:border-[#C9A84C]">
                                    <span className="text-[#4B5F59] mr-3"><FaStamp /></span>
                                    <select
                                        name="status"
                                        value={user.status}
                                        onChange={handleChange}
                                        className="w-full p-3 outline-none bg-transparent text-[#0D2A24]"
                                    >
                                        <option>Active</option>
                                        <option>Suspended</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="mt-8">
                            <label className="font-semibold block mb-2 text-[#0D2A24]">Passenger Photo</label>

                            <div
                                className={`border-2 border-dashed rounded-2xl p-8 text-center bg-[#F5EDD6]/40 ${
                                    errors.image ? "border-[#C45A2A]" : "border-[#0D4F46]/25"
                                }`}
                            >
                                <FaCamera className="mx-auto text-4xl text-[#1A7A6E]/50 mb-3" />
                                <input type="file" accept="image/*" onChange={handleImage} />
                                <p className="text-[#4B5F59] mt-2 text-sm">Upload a clear headshot photo</p>
                            </div>
                            {errors.image && (
                                <p className="text-[#C45A2A] text-sm mt-1">{errors.image}</p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4 mt-8">
                            <button
                                type="button"
                                onClick={resetForm}
                                className="px-6 py-3 bg-[#F5EDD6] text-[#0D2A24] rounded-full font-semibold hover:bg-[#eee0bd] transition"
                            >
                                Reset
                            </button>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="bg-[#C9A84C] text-[#0B1F1A] px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#b9983f] transition disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <FaPlaneDeparture size={14} />
                                {submitting ? "Issuing..." : "Issue User"}
                            </button>
                        </div>
                    </div>
                </form>

                {/* Live Preview — boarding pass ticket */}
                <div className="h-fit sticky top-5">
                    <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-3 px-1"> Live Preview </p>

                    <div className="relative flex flex-col bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden">
                        {/* top strip */}
                        <div className="bg-[#0D4F46] px-6 py-4 flex items-center justify-between">
                            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]">Passenger Pass</span>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">{today}</span>
                        </div>

                        <div className="p-6 flex items-center gap-4">
                            <img
                                src={preview || "https://placehold.co/120x120?text=Photo"}
                                alt=""
                                className="w-20 h-20 rounded-xl object-cover border-2 border-[#C9A84C]"
                            />
                            <div>
                                <h3 className="font-serif text-xl text-[#0D2A24] leading-tight">
                                    {user.name || "Passenger Name"}
                                </h3>
                                <p className="text-[#4B5F59] text-sm">{user.role}</p>
                            </div>
                        </div>

                        {/* perforation */}
                        <div className="relative border-t-2 border-dashed border-[#0D4F46]/25">
                            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                        </div>

                        <div className="p-6 space-y-3 text-sm">
                            <p className="flex justify-between">
                                <span className="text-[#4B5F59]">Email</span>
                                <span className="text-[#0D2A24] font-medium">{user.email || "-"}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-[#4B5F59]">Contact</span>
                                <span className="text-[#0D2A24] font-medium">{user.phone || "-"}</span>
                            </p>
                            <p className="flex justify-between items-center">
                                <span className="text-[#4B5F59]">Status</span>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold border ${
                                        user.status === "Active"
                                            ? "bg-[#1A7A6E]/10 text-[#0D4F46] border-[#1A7A6E]/30"
                                            : "bg-[#C45A2A]/10 text-[#C45A2A] border-[#C45A2A]/30"
                                    }`}
                                >
                                    {user.status}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Input({ icon, label, name, value, onChange, type = "text", placeholder = "", error }) {
    return (
        <div>
            <label className="font-semibold mb-2 block text-[#0D2A24]">{label}</label>

            <div
                className={`flex items-center border rounded-xl px-3 ${
                    error ? "border-[#C45A2A]" : "border-[#0D4F46]/20"
                } focus-within:border-[#C9A84C]`}
            >
                <span className="text-[#4B5F59] mr-3">{icon}</span>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full p-3 outline-none bg-transparent text-[#0D2A24] placeholder-[#4B5F59]/50"
                />
            </div>
            {error && <p className="text-[#C45A2A] text-sm mt-1">{error}</p>}
        </div>
    );
}