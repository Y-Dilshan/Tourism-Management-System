import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";
import { FaSearch, FaStar, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Hotels(){

    const hotels = [
    {
      id: 1,
      name: "Cinnamon Grand Colombo",
      location: "Colombo",
      price: 120,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      name: "Jetwing Blue",
      location: "Negombo",
      price: 95,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    },
    {
      id: 3,
      name: "Heritance Kandalama",
      location: "Dambulla",
      price: 140,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      id: 4,
      name: "Ella Flower Garden",
      location: "Ella",
      price: 80,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    {
      id: 5,
      name: "Araliya Green Hills",
      location: "Nuwara Eliya",
      price: 110,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    },
    {
      id: 6,
      name: "Amari Galle",
      location: "Galle",
      price: 130,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    },
  ];

    return(
        <div className="w-full h-full bg-[#F5EDD6]">
            <div className="w-full h-[100px] bg-black flex items-center pl-20 gap-5">
                <img src="logo.png" alt="Logo" className="w-[80px] h-[80px]" />
                <h1 className="text-5xl text-[#C9A84C] font-bold"> GoLanka </h1>

                <div className="flex gap-10 ml-[400px]">
                    <Link to="/*" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Home </Link>
                    <Link to="/tours" className="text-white text-xl hover:text-[#C9A84C] cursor-pointer"> Tours </Link>
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
                <h1 className="text-2xl text-[#C9A84C] font-bold mt-1"> ACCOMMODATION </h1>
                <p className="text-4xl text-white">Find your perfect stay</p>
                <p className = "text-gray-300 text-xl">280+ hotels, guesthouses & resorts across Sri Lanka</p>
            </div>
            
            {/* hotels grid */}

            <div className="flex-col">
            <h2 className="text-5xl text-center font-bold my-10 text-[#0D4F46]"> Available Hotels </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-20">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition duration-300" >
                  <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover" />

                  <div className="p-5">
                    <h3 className="text-xl font-bold"> {hotel.name} </h3>

                    <div className="flex items-center gap-1 text-gray-500 mt-2"> <MdLocationOn /> {hotel.location} </div>

                    <div className="flex items-center gap-2 mt-3"> <FaStar className="text-yellow-500" /> <span>{hotel.rating}</span> </div>

                    <div className="flex gap-3 mt-4">
                      <div className="flex items-center gap-1 text-[#C45A2A] text-sm"> <FaWifi /> WiFi </div>

                      <div className="flex items-center gap-1 text-[#C45A2A] text-sm"> <FaSwimmingPool /> Pool </div>
                    </div>

                    <div className="flex justify-between items-center mt-5">
                      <div>
                        <span className="text-2xl font-bold text-[#0D4F46]"> ${hotel.price} </span>

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