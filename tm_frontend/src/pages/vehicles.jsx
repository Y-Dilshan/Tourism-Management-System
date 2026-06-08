import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";
import { FaSearch, FaStar, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Vehicles(){

    const vehicles = [
  {
    id: 1,
    name: "Toyota Prius Hybrid",
    type: "Car",
    location: "Colombo",
    pricePerDay: 45,
    seats: 4,
    transmission: "Automatic",
    fuel: "Hybrid",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
  },
  {
    id: 2,
    name: "Toyota Axio",
    type: "Car",
    location: "Kandy",
    pricePerDay: 40,
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
  },
  {
    id: 3,
    name: "KDH Super GL Van",
    type: "Van",
    location: "Colombo",
    pricePerDay: 75,
    seats: 9,
    transmission: "Automatic",
    fuel: "Diesel",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1605514449459-5f5a1c1c9b7c",
  },
  {
    id: 4,
    name: "Nissan Caravan",
    type: "Van",
    location: "Negombo",
    pricePerDay: 80,
    seats: 10,
    transmission: "Manual",
    fuel: "Diesel",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1625047509168-5b0b7f2c9a5d",
  },
  {
    id: 5,
    name: "Toyota Land Cruiser Prado",
    type: "SUV",
    location: "Ella",
    pricePerDay: 120,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
  },
  {
    id: 6,
    name: "Mitsubishi Outlander",
    type: "SUV",
    location: "Galle",
    pricePerDay: 110,
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
  },
  {
    id: 7,
    name: "Toyota Coaster Bus",
    type: "Bus",
    location: "Colombo",
    pricePerDay: 150,
    seats: 25,
    transmission: "Manual",
    fuel: "Diesel",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d4",
  },
  {
    id: 8,
    name: "Luxury Mini Coach",
    type: "Bus",
    location: "Kandy",
    pricePerDay: 180,
    seats: 30,
    transmission: "Manual",
    fuel: "Diesel",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
];


    return(
        <div>
            <div className="w-full h-[100px] bg-black flex items-center pl-20 gap-5">
                <img src="logo.png" alt="Logo" className="w-[80px] h-[80px]" />
                <h1 className="text-5xl text-[#C9A84C] font-bold"> GoLanka </h1>

                <div className="flex gap-10 ml-[400px]">
                    <Link to="/*" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Home </Link>
                    <Link to="/hotels" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Hotels </Link>
                    <Link to="/vehicles" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Vehicles </Link>
                    <Link to="/activities" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Activities </Link>
                    <Link to="/guides" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Guides </Link>
                    <Link to="/contact" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Contact </Link>
                </div>

                <div className="flex gap-5 mr-20">
                    <button className="w-[150px] h-[40px] bg-[#C9A84C] hover:bg-[#F5EDD6] text-black text-lg font-bold rounded-3xl ml-20 cursor-pointer"><Link to="/">My Bookings</Link></button>
                </div>
            </div>

            <div className = "w-full h-[200px] bg-black flex flex-col pl-20 gap-5">
                <h1 className="text-2xl text-[#C9A84C] font-bold mt-10"> TRANSPORTATION </h1>
                <p className="text-4xl text-white">Airport Transfers & Tour Vehicles</p>
                <p className = "text-white">BIA Katunayake ↔ Hotel · City tours · Countryside excursions</p>
            </div>

            {/* vehicles grids */}

             <div className="flex-col">
                        <h2 className="text-5xl text-center font-bold my-10 text-[#0D4F46]"> Available Hotels </h2>
            
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-20">
                          {vehicles.map((vehicle) => (
                            <div key={vehicle.id} className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition duration-300" >
                              <img src={vehicle.image} alt={vehicle.name} className="w-full h-56 object-cover" />
            
                              <div className="p-5">
                                <h3 className="text-xl font-bold"> {vehicle.name} </h3>
            
                                <div className="flex items-center gap-1 text-gray-500 mt-2"> <MdLocationOn /> {vehicle.location} </div>
            
                                <div className="flex items-center gap-2 mt-3"> <FaStar className="text-yellow-500" /> <span>{vehicle.rating}</span> </div>
            
                                <div className="flex gap-3 mt-4">
                                  <div className="flex items-center gap-1 text-[#C45A2A] text-sm"> <FaWifi /> WiFi </div>
            
                                  <div className="flex items-center gap-1 text-[#C45A2A] text-sm"> <FaSwimmingPool /> Pool </div>
                                </div>
            
                                <div className="flex justify-between items-center mt-5">
                                  <div>
                                    <span className="text-2xl font-bold text-[#0D4F46]"> ${vehicle.price} </span>
            
                                    <p className="text-sm text-gray-500"> per night </p>
                                  </div>
            
                                  <button className="bg-[#0D4F46] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#1A7A6E]"> Book Now </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
            
                      <div className = "mt-10"> <Footer /> </div>
            </div>
    )
}