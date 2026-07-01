import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function AdminGuides() {
    const [guides] = useState([
        {
            id: 1,
            name: "Nimal Perera",
            language: "English, Sinhala",
            experience: "8 Years",
            contact: "+94 71 234 5678",
            rating: 4.9,
            status: "Available",
            image: "/guide1.jpg",
        },
        {
            id: 2,
            name: "Kasun Silva",
            language: "English, Tamil",
            experience: "5 Years",
            contact: "+94 77 987 6543",
            rating: 4.7,
            status: "Busy",
            image: "/guide2.jpg",
        },
    ]);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-[#0D4F46]"> Guide Management </h1>
                    <p className="text-gray-500 mt-2"> Manage all registered tour guides </p>
                </div>
                <button className="bg-[#C9A84C] hover:bg-[#b9983f] px-5 py-3 rounded-xl font-semibold flex items-center gap-2"> <FaPlus /> Add Guide </button>
            </div>

            {/* Search */}
            <div className="mb-6">
                <input type="text" placeholder="Search guides..." className="w-full md:w-[400px] border border-gray-300 rounded-xl p-3 outline-none focus:border-[#0D4F46]"/>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#0D4F46] text-white">
                        <tr>
                            <th className="p-4 text-left">Guide</th>
                            <th className="p-4 text-left">Languages</th>
                            <th className="p-4 text-left">Experience</th>
                            <th className="p-4 text-left">Contact</th>
                            <th className="p-4 text-left">Rating</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {guides.map((guide) => (
                            <tr key={guide.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img src={guide.image} alt={guide.name} className="w-14 h-14 rounded-lg object-cover"/>
                                        <span className="font-semibold"> {guide.name} </span>
                                    </div>
                                </td>
                                <td className="p-4">{guide.language}</td>
                                <td className="p-4"> {guide.experience} </td>
                                <td className="p-4"> {guide.contact} </td>
                                <td className="p-4"> ⭐ {guide.rating} </td>
                                <td className="p-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            guide.status === "Available"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}>
                                        {guide.status}
                                    </span>
                                </td>

                                <td className="p-4">
                                    <div className="flex justify-center gap-3">
                                        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"> <FaEdit /> </button>
                                        <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"> <FaTrash /> </button>
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