import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

export default function AdminHotels() {

    const [hotels] = useState([
        {
            id: 1,
            name: "Cinnamon Grand",
            location: "Colombo",
            rooms: 250,
            rating: 5,
            price: 25000,
            status: "Available",
            image: "/hotel1.jpg",
        },
        {
            id: 2,
            name: "Jetwing Blue",
            location: "Negombo",
            rooms: 180,
            rating: 4,
            price: 18000,
            status: "Booked",
            image: "/hotel2.jpg",
        },
    ]);

    return (
        <div>
            {/* Header — boarding-pass style */}
            <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
                <div className="flex-1 p-8">
                    <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2"> Admin · Property Registry </p>
                    <h1 className="font-serif text-4xl text-[#0D2A24]"> Hotel Management </h1>
                    <p className="text-[#4B5F59] mt-2"> Manage all partner hotels </p>
                </div>

                <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Total </p>
                    <p className="font-serif text-2xl text-white mt-1"> {hotels.length} Hotels </p>
                    <Link to="/admin/add-hotel">
                        <button className="mt-5 bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#F5EDD6] transition flex items-center gap-2">
                            <FaPlus size={12} /> Add Hotel
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
                        placeholder="Search hotels…"
                        className="w-full bg-white text-[#0D2A24] placeholder-[#4B5F59]/60 pl-9 pr-4 py-3 rounded-full border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] text-sm"
                    />
                </div>
            </div>

            {/* Table — ledger style */}
            <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden">
                <div className="px-8 py-6 border-b border-[#0D4F46]/15">
                    <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Ledger </p>
                    <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Partner Hotels </h2>
                </div>

                <table className="w-full">
                    <thead>
                        <tr className="bg-[#0D4F46] text-[#F5EDD6]">
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Hotel</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Location</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Rooms</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Rating</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Price/Night</th>
                            <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Status</th>
                            <th className="px-6 py-3 text-center text-xs uppercase tracking-wide font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {hotels.map((hotel) => (
                            <tr key={hotel.id} className="border-b border-[#0D4F46]/10 hover:bg-[#F5EDD6]/70">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={hotel.image} alt={hotel.name} className="w-14 h-14 rounded-lg object-cover border border-[#0D4F46]/15" />
                                        <span className="font-serif text-[#0D2A24]"> {hotel.name} </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[#4B5F59]"> {hotel.location} </td>
                                <td className="px-6 py-4 text-[#4B5F59]"> {hotel.rooms} </td>
                                <td className="px-6 py-4 text-[#4B5F59]"> ⭐ {hotel.rating} </td>
                                <td className="px-6 py-4 font-serif text-[#C9A84C] font-semibold"> Rs. {hotel.price.toLocaleString()} </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold border ${
                                            hotel.status === "Available"
                                                ? "bg-[#1A7A6E]/10 text-[#0D4F46] border-[#1A7A6E]/30"
                                                : "bg-[#C45A2A]/10 text-[#C45A2A] border-[#C45A2A]/30"
                                        }`}>
                                        {hotel.status}
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