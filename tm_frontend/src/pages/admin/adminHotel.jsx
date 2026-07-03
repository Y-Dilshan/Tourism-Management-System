import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

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
        <div className="p-8 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-[#0D4F46]"> Hotel Management </h1>
                    <p className="text-gray-500 mt-2"> Manage all partner hotels </p>
                </div>
                <Link to="/admin/add-hotel">
                    <button className="bg-[#C9A84C] hover:bg-[#b9983f] px-5 py-3 rounded-xl font-semibold flex items-center gap-2"><FaPlus /> Add Hotel </button>
                </Link>
            </div>

            {/* Search */}
            <div className="mb-6">
                <input type="text" placeholder="Search hotels..." className="w-full md:w-[400px] border border-gray-300 rounded-xl p-3 outline-none focus:border-[#0D4F46]"/>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#0D4F46] text-white">
                        <tr>
                            <th className="p-4 text-left">Hotel</th>
                            <th className="p-4 text-left">Location</th>
                            <th className="p-4 text-left">Rooms</th>
                            <th className="p-4 text-left">Rating</th>
                            <th className="p-4 text-left">Price/Night</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {hotels.map((hotel) => (
                            <tr key={hotel.id}className="border-b hover:bg-gray-50">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img src={hotel.image} alt={hotel.name} className="w-14 h-14 rounded-lg object-cover"/>
                                        <span className="font-semibold"> {hotel.name} </span>
                                    </div>
                                </td>
                                <td className="p-4"> {hotel.location} </td>
                                <td className="p-4"> {hotel.rooms} </td>
                                <td className="p-4"> ⭐ {hotel.rating} </td>
                                <td className="p-4"> Rs. {hotel.price} </td>
                                <td className="p-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            hotel.status === "Available"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                        }`}>
                                        {hotel.status}
                                    </span>
                                </td>

                                <td className="p-4">
                                    <div className="flex justify-center gap-3">
                                        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                                            <FaEdit />
                                        </button>

                                        <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
                                            <FaTrash />
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