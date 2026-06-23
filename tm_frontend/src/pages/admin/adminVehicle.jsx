import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function AdminVehicles() {

    const [vehicles] = useState([
        {
            id: 1,
            name: "Toyota KDH",
            type: "Van",
            number: "CAB-1234",
            seats: 12,
            driver: "Kamal Perera",
            price: 15000,
            status: "Available",
            image: "/vehicle1.jpg",
        },
        {
            id: 2,
            name: "Toyota Prius",
            type: "Car",
            number: "CAA-4567",
            seats: 4,
            driver: "Nimal Silva",
            price: 10000,
            status: "Booked",
            image: "/vehicle2.jpg",
        },
    ]);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-[#0D4F46]"> Vehicle Management </h1>
                    <p className="text-gray-500 mt-2"> Manage all tour vehicles </p>
                </div>
                <button className="bg-[#C9A84C] hover:bg-[#b9983f] px-5 py-3 rounded-xl font-semibold flex items-center gap-2"> <FaPlus /> Add Vehicle </button>
            </div>

            {/* Search */}
            <div className="mb-6">
                <input type="text" placeholder="Search vehicles..." className="w-full md:w-[400px] border border-gray-300 rounded-xl p-3 outline-none focus:border-[#0D4F46]"/>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-[#0D4F46] text-white">
                        <tr>
                            <th className="p-4 text-left">Vehicle</th>
                            <th className="p-4 text-left">Type</th>
                            <th className="p-4 text-left">Number</th>
                            <th className="p-4 text-left">Seats</th>
                            <th className="p-4 text-left">Driver</th>
                            <th className="p-4 text-left">Price/Day</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {vehicles.map((vehicle) => (
                            <tr key={vehicle.id}className="border-b hover:bg-gray-50">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img src={vehicle.image} alt="" className="w-14 h-14 rounded-lg object-cover"/>
                                        <span className="font-semibold"> {vehicle.name} </span>
                                    </div>
                                </td>
                                <td className="p-4">{vehicle.type}</td>
                                <td className="p-4"> {vehicle.number} </td>
                                <td className="p-4"> {vehicle.seats} </td>
                                <td className="p-4"> {vehicle.driver} </td>
                                <td className="p-4"> Rs. {vehicle.price} </td>
                                <td className="p-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium
                                        ${
                                            vehicle.status === "Available"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                        }`}>
                                        {vehicle.status}
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