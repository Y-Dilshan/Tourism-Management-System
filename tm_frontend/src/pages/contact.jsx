import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaHeadset, FaGlobeAsia, FaComments} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-[#F5EDD6] from-[#f7faf9] via-white to-[#eef6f4] min-h-screen">
      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-r from-[#0D4F46] via-[#17675B] to-[#0D4F46] text-white overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#C9A84C]/20 rounded-full -top-20 -left-20 blur-3xl"></div>
        <div className="absolute w-80 h-80 bg-white/10 rounded-full bottom-0 right-0 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-extrabold mb-6"> Contact <span className="text-[#C9A84C]">GoLanka</span> </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-8"> Whether you're planning your next adventure, booking hotels, arranging transport, or simply have a question — our travel experts are always ready to help you. </p>
          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full"> 🌎 Trusted by Thousands </div>
            <div className="bg-[#C9A84C] text-black px-6 py-3 rounded-full font-semibold"> 💬 Response within 24 Hours </div>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 ">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-[#0D4F46] mb-8"> Get In Touch </h2>
            <p className="text-gray-600 mb-10 leading-8"> We'd love to hear from you. Reach out through any of the following contact methods or send us a message directly. </p>
            <div className="space-y-6">

              {/* Phone */}
              <div className="bg-white shadow-xl rounded-2xl p-6 flex gap-5 hover:shadow-2xl transition">
                <div className="w-16 h-16 rounded-full bg-[#0D4F46] text-white flex items-center justify-center text-2xl"> <FaPhoneAlt /> </div>
                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-gray-600 mt-1">+94 11 234 5678</p>
                  <p className="text-gray-600">+94 77 123 4567</p>
                </div>
              </div>

              {/* Email */}

              <div className="bg-white shadow-xl rounded-2xl p-6 flex gap-5 hover:shadow-2xl transition">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C] text-white flex items-center justify-center text-2xl"> <FaEnvelope /> </div>
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-gray-600 mt-1"> info@travelmate.com </p>
                  <p className="text-gray-600"> support@travelmate.com </p>
                </div>
              </div>

              {/* Address */}

              <div className="bg-white shadow-xl rounded-2xl p-6 flex gap-5 hover:shadow-2xl transition">
                <div className="w-16 h-16 rounded-full bg-[#0D4F46] text-white flex items-center justify-center text-2xl"> <FaMapMarkerAlt /> </div>
                <div>
                  <h3 className="font-bold text-xl">Office</h3>
                  <p className="text-gray-600 mt-1"> 120 Galle Road </p>
                  <p className="text-gray-600"> Colombo 03 </p>
                  <p className="text-gray-600"> Sri Lanka </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white shadow-xl rounded-2xl p-6 flex gap-5 hover:shadow-2xl transition">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C] text-white flex items-center justify-center text-2xl"> <FaClock /> </div>
                <div>
                  <h3 className="font-bold text-xl"> Working Hours </h3>
                  <p className="text-gray-600 mt-1"> Monday - Friday </p>
                  <p className="text-gray-600"> 8.30 AM - 6.00 PM </p>
                  <p className="text-gray-600"> Saturday: 9.00 AM - 2.00 PM </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}

          <div>
            <div className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#0D4F46] text-white p-3 rounded-full"> <FaPaperPlane /> </div>
                <h2 className="text-3xl font-bold text-[#0D4F46]"> Send us a Message </h2>
              </div>

              <form className="space-y-6">
                <input type="text" placeholder="Full Name" className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-[#0D4F46] outline-none"/>
                <input type="email" placeholder="Email Address" className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-[#0D4F46] outline-none"/>
                <input type="text" placeholder="Subject" className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-[#0D4F46] outline-none"/>
                <textarea rows="6" placeholder="Write your message..." className="w-full rounded-xl border p-4 focus:ring-2 focus:ring-[#0D4F46] outline-none"></textarea>
                <button className="w-full bg-gradient-to-r from-[#0D4F46] to-[#17675B] hover:scale-105 duration-300 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3"> <FaPaperPlane /> Send Message </button>
              </form>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">
            <FaHeadset className="text-5xl text-[#0D4F46] mx-auto mb-5" />
            <h3 className="font-bold text-2xl mb-3"> 24/7 Support </h3>
            <p className="text-gray-600"> Our dedicated travel specialists are available anytime to assist with your journey. </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">
            <FaGlobeAsia className="text-5xl text-[#C9A84C] mx-auto mb-5" />
            <h3 className="font-bold text-2xl mb-3"> Worldwide Tours </h3>
            <p className="text-gray-600"> Discover breathtaking destinations with carefully planned travel experiences. </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">
            <FaComments className="text-5xl text-[#0D4F46] mx-auto mb-5" />
            <h3 className="font-bold text-2xl mb-3"> Friendly Service </h3>
            <p className="text-gray-600"> We believe every traveler deserves exceptional customer service from start to finish. </p>
          </div>
        </div>

        {/* MAP */}

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-[#0D4F46] mb-10"> Find Our Office </h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe title="Google Map" src="https://www.google.com/maps?q=Colombo,Sri+Lanka&output=embed" width="100%"  height="500" style={{ border: 0 }} loading="lazy" allowFullScreen="" ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}