import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0D4F46] text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Logo" className="w-[60px] h-[60px] object-cover" />
               <h2 className="text-3xl font-bold text-[#C9A84C] mb-4"> Explore Lanka </h2>
            </div>
            <p className="text-gray-300 leading-7"> Discover the beauty of Sri Lanka with expertly curated tours, comfortable stays, reliable transport, and unforgettable experiences. </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#C9A84C] mb-5"> Quick Links </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-[#C9A84C] cursor-pointer">Home</li>
              <li className="hover:text-[#C9A84C] cursor-pointer">Destinations</li>
              <li className="hover:text-[#C9A84C] cursor-pointer">Hotels</li>
              <li className="hover:text-[#C9A84C] cursor-pointer">Tour Packages</li>
              <li className="hover:text-[#C9A84C] cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-[#C9A84C] mb-5"> Services </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Hotel Reservations</li>
              <li>Airport Transfers</li>
              <li>Tour Vehicles</li>
              <li>Guided Tours</li>
              <li>Custom Travel Plans</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#C9A84C] mb-5"> Contact Us </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-[#C9A84C]" size={20} /> <span>Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C9A84C]" size={16} /> <span>+94 77 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-[#C9A84C]" size={20} /> <span>golanka@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <div className="bg-[#C9A84C] p-3 rounded-full cursor-pointer hover:scale-110 transition"> <FaFacebookF className="text-[#0D4F46]" />
              </div>
              <div className="bg-[#C9A84C] p-3 rounded-full cursor-pointer hover:scale-110 transition"> <FaInstagram className="text-[#0D4F46]" />
              </div>
              <div className="bg-[#C9A84C] p-3 rounded-full cursor-pointer hover:scale-110 transition"> <FaYoutube className="text-[#0D4F46]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C9A84C]">
        <div className="max-w-[1600px] mx-auto px-20 py-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm"> © 2026 Explore Lanka. All Rights Reserved. </p>
          <div className="flex gap-6 text-sm text-gray-300 mt-3 md:mt-0">
            <span className="hover:text-[#C9A84C] cursor-pointer"> Privacy Policy </span>
            <span className="hover:text-[#C9A84C] cursor-pointer"> Terms & Conditions </span>
          </div>
        </div>
      </div>
    </footer>
  );
}