import { Link } from "react-router-dom";
import Footer from "../components/footer.jsx";
import { FaSearch, FaStar, FaWifi, FaSwimmingPool } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Guides(){

   const tourGuides = [
  {
    name: "Nimal Perera",
    specialty: "Wildlife & safari specialist",
    location: "Yala, Wilpattu",
    experienceYears: 12,
    description: "Specializes in spotting leopards, elephants, and bird species on jeep safaris.",
    languages: ["English", "Sinhala", "German (basic)"],
    rate: "$50/day"
  },
  {
    name: "Kumari Silva",
    specialty: "Cultural heritage expert",
    location: "Kandy, Anuradhapura, Polonnaruwa",
    experienceYears: 10,
    description: "Deep knowledge of Buddhist temples, royal history, and local customs.",
    languages: ["English", "Sinhala", "Tamil"],
    rate: "$45/day"
  },
  {
    name: "Ravi Fernando",
    specialty: "Trekking & adventure guide",
    location: "Knuckles Range, Horton Plains, Adam's Peak",
    experienceYears: 8,
    description: "Certified in wilderness first aid, ideal for multi-day treks and sunrise hikes.",
    languages: ["English", "Sinhala"],
    rate: "$55/day"
  },
  {
    name: "Asoka Mendis",
    specialty: "Tea country & history guide",
    location: "Nuwara Eliya, Ella",
    experienceYears: 15,
    description: "Worked on tea estates, offers insight into colonial-era history and tea production.",
    languages: ["English", "Sinhala"],
    rate: "$40/day"
  },
  {
    name: "Dilani Jayasuriya",
    specialty: "Coastal & diving guide",
    location: "Trincomalee, Arugam Bay",
    experienceYears: 9,
    description: "PADI certified dive instructor, arranges whale watching, surfing, and snorkeling trips.",
    languages: ["English", "Sinhala"],
    rate: "$48/day"
  },
  {
    name: "Sunil Bandara",
    specialty: "Ayurveda & wellness guide",
    location: "Bentota, Hikkaduwa",
    experienceYears: 7,
    description: "Partners with wellness retreats, helps visitors navigate Ayurvedic treatments, meditation retreats, and yoga sessions.",
    languages: ["English", "Sinhala"],
    rate: "$38/day"
  },
  {
    name: "Tharindu Wickrama",
    specialty: "City & food tours",
    location: "Colombo, Galle",
    experienceYears: 6,
    description: "Runs walking tours focused on street food, markets, and colonial architecture.",
    languages: ["English", "Sinhala", "French (conversational)"],
    rate: "$42/day"
  },
  {
    name: "Chandra Rathnayake",
    specialty: "Ancient cities specialist",
    location: "Sigiriya, Dambulla, Cultural Triangle",
    experienceYears: 14,
    description: "Background in archaeology, detailed knowledge of ancient irrigation systems and rock fortresses.",
    languages: ["English", "Sinhala"],
    rate: "$45/day"
  }
];


    return(
        <div className="w-full h-full bg-[#F5EDD6]">
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
                <h1 className="text-2xl text-[#C9A84C] font-bold mt-15"> LOCAL EXPERTS </h1>
                <p className="text-4xl text-white">Meet Your Tour Guides</p>
            </div>

            {/* vehicles grids */}

             <div className="flex-col">
                        <h2 className="text-5xl text-center font-bold my-10 text-[#0D4F46]"> Available Guides </h2>
            
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-20">
                          {tourGuides.map((guide) => (
                            <div key={guide.id} className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition duration-300" >
                              <img src={guide.image} alt={guide.name} className="w-full h-56 object-cover" />
            
                              <div className="p-5">
                                <h3 className="text-xl font-bold"> {guide.name} </h3>
            
                                <div className="flex items-center gap-1 text-gray-500 mt-2"> <MdLocationOn /> {guide.location} </div>
            
                                <div className="flex items-center gap-2 mt-3"> <FaStar className="text-yellow-500" /> <span>{guide.rating}</span> </div>
            
                                <div className="flex gap-3 mt-4">
                                  <div className="flex items-center gap-1 text-[#C45A2A] text-sm"> <FaWifi /> WiFi </div>
            
                                  <div className="flex items-center gap-1 text-[#C45A2A] text-sm"> <FaSwimmingPool /> Pool </div>
                                </div>
            
                                <div className="flex justify-between items-center mt-5">
                                  <div>
                                    <span className="text-2xl font-bold text-[#0D4F46]"> ${guide.price} </span>
            
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