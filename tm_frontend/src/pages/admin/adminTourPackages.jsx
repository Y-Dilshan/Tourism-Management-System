import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash, FaSearch, FaMapMarkedAlt } from "react-icons/fa";

export default function AdminTourPackages() {

    const [packages] = useState([
        {
            id: 1,
            name: "Hill Country Escape",
            destination: "Nuwara Eliya / Ella",
            duration: "3 Days / 2 Nights",
            groupSize: "2-8 pax",
            price: 45000,
            status: "Active",
            image: "/package1.jpg",
        },
        {
            id: 2,
            name: "Southern Coast Explorer",
            destination: "Galle / Mirissa",
            duration: "4 Days / 3 Nights",
            groupSize: "2-10 pax",
            price: 62000,
            status: "Inactive",
            image: "/package2.jpg",
        },
    ]);

    return (
        <div>
            {/* Header — boarding-pass style */}
            <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
                <div className="flex-1 p-8">
                    <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2"> Admin · Itinerary Registry </p>
                    <h1 className="font-serif text-4xl text-[#0D2A24]"> Tour Package Management </h1>
                    <p className="text-[#4B5F59] mt-2"> Manage all tour packages and itineraries </p>
                </div>

                <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Total </p>
                    <p className="font-serif text-2xl text-white mt-1"> {packages.length} Packages </p>
                    <Link to="/admin/add-package">
                        <button className="mt-5 bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#F5EDD6] transition flex items-center gap-2">
                            <FaPlus size={12} /> Add Package
                        </button>
                    </Link>
                </div>
            </div>

            {/* Search */}
            <div className="mb-6">
                <div className="relative w-full md:w-[400px]">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5F59]/60 text-sm" />
                    <input
                        type="text"
                        placeholder="Search tour packages…"
                        className="w-full bg-white text-[#0D2A24] placeholder-[#4B5F59]/60 pl-9 pr-4 py-3 rounded-full border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] text-sm"
                    />
                </div>
            </div>

            {/* Table — ledger style */}
            <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden">
                <div className="px-8 py-6 border-b border-[#0D4F46]/15">
                    <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Ledger </p>
                    <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Tour Packages </h2>
                </div>

                <table className="w-full">
                    <thead>
                        <tr className="bg-[#0D4F46] text-[#F5EDD6]">
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Package</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Destination</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Duration</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Group Size</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Price</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Status</th>
                            <th className="px-6 py-3 text-center text-xs uppercase tracking-wide font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {packages.map((pkg) => (
                            <tr key={pkg.id} className="border-b border-[#0D4F46]/10 hover:bg-[#F5EDD6]/70">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={pkg.image} alt={pkg.name} className="w-14 h-14 rounded-lg object-cover border border-[#0D4F46]/15" />
                                        <span className="font-serif text-[#0D2A24]"> {pkg.name} </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[#4B5F59]">
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkedAlt className="text-[#1A7A6E]" size={13} /> {pkg.destination}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[#4B5F59]"> {pkg.duration} </td>
                                <td className="px-6 py-4 text-[#4B5F59]"> {pkg.groupSize} </td>
                                <td className="px-6 py-4 font-serif text-[#C9A84C] font-semibold"> Rs. {pkg.price.toLocaleString()} </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold border ${
                                            pkg.status === "Active"
                                                ? "bg-[#1A7A6E]/10 text-[#0D4F46] border-[#1A7A6E]/30"
                                                : "bg-[#C45A2A]/10 text-[#C45A2A] border-[#C45A2A]/30"
                                        }`}>
                                        {pkg.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-3">
                                        <button className="bg-[#1A7A6E]/10 text-[#0D4F46] border border-[#1A7A6E]/30 p-2 rounded-lg hover:bg-[#1A7A6E]/20 transition">
                                            <FaEdit size={14} />
                                        </button>
                                        <button className="bg-[#C45A2A]/10 text-[#C45A2A] border border-[#C45A2A]/30 p-2 rounded-lg hover:bg-[#C45A2A]/20 transition">
                                            <FaTrash size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}