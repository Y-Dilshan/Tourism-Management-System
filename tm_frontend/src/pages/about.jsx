import { Link } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaHandsHelping,
  FaShieldAlt,
  FaLeaf,
  FaQuoteLeft,
  FaPlay,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[#F5EDD6] min-h-screen">
      {/* NAVBAR */}
      <div className="w-full bg-black flex items-center justify-between pl-10 pr-10 h-[100px]">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="GoLanka Logo" className="w-[70px] h-[70px]" />
          <h1 className="text-4xl text-[#C9A84C] font-bold"> GoLanka </h1>
        </div>

        <div className="flex gap-9">
          <Link to="/" className="text-white text-lg hover:text-[#C9A84C] transition"> Home </Link>
          <Link to="/about" className="text-[#C9A84C] text-lg font-semibold"> About </Link>
          <Link to="/hotels" className="text-white text-lg hover:text-[#C9A84C] transition"> Hotels </Link>
          <Link to="/vehicles" className="text-white text-lg hover:text-[#C9A84C] transition"> Vehicles </Link>
          <Link to="/tours" className="text-white text-lg hover:text-[#C9A84C] transition"> Tours </Link>
          <Link to="/guides" className="text-white text-lg hover:text-[#C9A84C] transition"> Guides </Link>
          <Link to="/activities" className="text-white text-lg hover:text-[#C9A84C] transition"> Activities </Link>
        </div>

        <div className="flex gap-4">
          <button className="w-[110px] h-[42px] bg-[#0D4F46] hover:bg-[#17675B] text-white font-semibold rounded-lg transition">
            Sign in
          </button>
          <button className="w-[110px] h-[42px] bg-[#F5EDD6] hover:bg-white text-black font-semibold rounded-lg transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="relative bg-[#0D4F46] overflow-hidden">
        <div className="absolute w-[420px] h-[420px] bg-[#C9A84C]/10 rounded-full -top-32 -right-32 blur-3xl"></div>
        <div className="absolute w-72 h-72 bg-white/5 rounded-full bottom-0 left-0 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#C9A84C] text-sm font-semibold mb-5"> Our Story </p>
            <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
              Built by islanders, <br /> for every traveler.
            </h1>
            <p className="text-gray-200 text-lg leading-8 mt-6 max-w-xl">
              GoLanka began with a simple idea: no one plans a trip to Sri Lanka better than
              the people who grew up on it. What started as a small circle of local guides
              and drivers is now a full tourism platform — hotels, vehicles, tours, and
              activities, all in one place.
            </p>

            <div className="flex gap-5 mt-10">
              <Link to="/tours">
                <button className="bg-[#C9A84C] hover:bg-white text-black font-bold px-7 py-3 rounded-full transition">
                  Explore Tours
                </button>
              </Link>
              <button className="flex items-center gap-3 border border-white/40 hover:border-[#C9A84C] text-white px-7 py-3 rounded-full transition">
                <FaPlay className="text-[#C9A84C]" /> Watch Island Story
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/about-temple.jpg"
              alt="Sri Lankan temple"
              className="rounded-2xl object-cover w-full h-[220px] translate-y-6"
            />
            <img
              src="/about-tea.jpg"
              alt="Tea plantations"
              className="rounded-2xl object-cover w-full h-[220px]"
            />
            <img
              src="/about-beach.jpg"
              alt="Sri Lankan coastline"
              className="rounded-2xl object-cover w-full h-[220px]"
            />
            <img
              src="/about-train.jpg"
              alt="Nine Arch Bridge train"
              className="rounded-2xl object-cover w-full h-[220px] translate-y-6"
            />
          </div>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="max-w-7xl mx-auto px-10 py-24 grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#0D4F46]/10">
          <div className="w-14 h-14 rounded-full bg-[#0D4F46] text-white flex items-center justify-center text-xl mb-6">
            <FaMapMarkedAlt />
          </div>
          <h2 className="text-3xl font-bold text-[#0D4F46] mb-4"> Our Mission </h2>
          <p className="text-gray-600 leading-8">
            To make travel across Sri Lanka effortless and genuine — connecting visitors
            directly with trusted hotels, drivers, and guides, so every trip feels personal
            instead of packaged.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#0D4F46]/10">
          <div className="w-14 h-14 rounded-full bg-[#C9A84C] text-white flex items-center justify-center text-xl mb-6">
            <FaLeaf />
          </div>
          <h2 className="text-3xl font-bold text-[#0D4F46] mb-4"> Our Vision </h2>
          <p className="text-gray-600 leading-8">
            A Sri Lanka where tourism supports local communities as much as it welcomes
            visitors — sustainable, transparent, and rooted in the island's own culture.
          </p>
        </div>
      </div>

      {/* MILESTONES */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-10">
          <p className="uppercase tracking-[0.3em] text-[#1A7A6E] text-sm font-semibold text-center"> Our Journey </p>
          <h2 className="text-4xl font-bold text-[#0D4F46] text-center mt-3 mb-16"> How We Got Here </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: "2019", title: "The Idea", text: "Three friends from Galle started arranging tours for backpackers by word of mouth." },
              { year: "2021", title: "Going Online", text: "GoLanka launched as a booking platform for hotels and vehicle rentals." },
              { year: "2023", title: "Local Guides Join", text: "Verified local guides and curated tour packages were added islandwide." },
              { year: "2026", title: "Full Platform", text: "Hotels, vehicles, tours, guides and activities now live under one roof." },
            ].map((m) => (
              <div key={m.year} className="relative pl-6 border-l-2 border-[#C9A84C]/40">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C9A84C]"></span>
                <p className="font-serif text-2xl text-[#0D4F46] font-bold"> {m.year} </p>
                <h3 className="font-bold text-lg text-[#0D2A24] mt-2 mb-2"> {m.title} </h3>
                <p className="text-gray-600 text-sm leading-6"> {m.text} </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="max-w-7xl mx-auto px-10 py-24">
        <p className="uppercase tracking-[0.3em] text-[#1A7A6E] text-sm font-semibold text-center"> What Drives Us </p>
        <h2 className="text-4xl font-bold text-[#0D4F46] text-center mt-3 mb-16"> Our Core Values </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">
            <FaShieldAlt className="text-5xl text-[#0D4F46] mx-auto mb-5" />
            <h3 className="font-bold text-2xl mb-3"> Trust First </h3>
            <p className="text-gray-600"> Every hotel, driver and guide on GoLanka is verified before they reach you. </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">
            <FaHandsHelping className="text-5xl text-[#C9A84C] mx-auto mb-5" />
            <h3 className="font-bold text-2xl mb-3"> Community First </h3>
            <p className="text-gray-600"> We work with local families and small businesses, not just big chains. </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition">
            <FaLeaf className="text-5xl text-[#0D4F46] mx-auto mb-5" />
            <h3 className="font-bold text-2xl mb-3"> Sustainable Travel </h3>
            <p className="text-gray-600"> We highlight partners who protect the island's beaches, wildlife and heritage sites. </p>
          </div>
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="bg-[#0D4F46] py-16">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <p className="text-[#C9A84C] text-4xl font-bold"> 12K+ </p>
            <p className="text-gray-200 mt-2"> Happy Travelers </p>
          </div>
          <div>
            <p className="text-[#C9A84C] text-4xl font-bold"> 45+ </p>
            <p className="text-gray-200 mt-2"> Tour Packages </p>
          </div>
          <div>
            <p className="text-[#C9A84C] text-4xl font-bold"> 280K+ </p>
            <p className="text-gray-200 mt-2"> Hotels & Resorts </p>
          </div>
          <div>
            <p className="text-[#C9A84C] text-4xl font-bold"> 9 </p>
            <p className="text-gray-200 mt-2"> Provinces Covered </p>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="max-w-5xl mx-auto px-10 py-24 text-center">
        <FaQuoteLeft className="text-4xl text-[#C9A84C] mx-auto mb-6" />
        <p className="font-serif text-2xl text-[#0D2A24] leading-relaxed">
          GoLanka planned our entire honeymoon — hotels, a driver, and a guide in Ella —
          and every single detail matched what we'd talked about.
        </p>
        <p className="text-[#4B5F59] mt-6 font-semibold"> — Priya & Daniel, United Kingdom </p>
      </div>

      {/* CTA */}
      <div className="bg-[#C9A84C] py-16">
        <div className="max-w-5xl mx-auto px-10 text-center">
          <h2 className="text-4xl font-bold text-[#0D2A24] mb-4"> Ready to Explore Sri Lanka? </h2>
          <p className="text-[#3a2f14] text-lg mb-8"> Let's start planning a trip that's actually yours. </p>
          <Link to="/contact">
            <button className="bg-[#0D2A24] hover:bg-black text-white font-bold px-8 py-4 rounded-full transition">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}