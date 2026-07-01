import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">

            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-[#0D4F46]">
                    Contact Us
                </h1>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Have questions about destinations, hotels, transport or
                    bookings? We'd love to hear from you. Send us a message
                    and our team will get back to you as soon as possible.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg p-8">

                    <h2 className="text-3xl font-bold text-[#0D4F46] mb-8">
                        Get In Touch
                    </h2>

                    <div className="space-y-8">

                        <div className="flex gap-5">
                            <div className="bg-[#0D4F46] p-4 rounded-full text-white">
                                <FaPhoneAlt />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">Phone</h3>
                                <p className="text-gray-600">
                                    +94 11 234 5678
                                </p>
                                <p className="text-gray-600">
                                    +94 77 123 4567
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="bg-[#0D4F46] p-4 rounded-full text-white">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <p className="text-gray-600">
                                    info@travelmate.com
                                </p>
                                <p className="text-gray-600">
                                    support@travelmate.com
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="bg-[#0D4F46] p-4 rounded-full text-white">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">Office</h3>
                                <p className="text-gray-600">
                                    120 Galle Road,
                                </p>
                                <p className="text-gray-600">
                                    Colombo 03,
                                </p>
                                <p className="text-gray-600">
                                    Sri Lanka.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="bg-[#0D4F46] p-4 rounded-full text-white">
                                <FaClock />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    Working Hours
                                </h3>

                                <p className="text-gray-600">
                                    Monday - Friday
                                </p>

                                <p className="text-gray-600">
                                    8.30 AM - 6.00 PM
                                </p>

                                <p className="text-gray-600">
                                    Saturday : 9.00 AM - 2.00 PM
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}

                <div className="bg-white rounded-2xl shadow-lg p-8">

                    <h2 className="text-3xl font-bold text-[#0D4F46] mb-8">
                        Send Message
                    </h2>

                    <form className="space-y-5">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border rounded-xl p-4 outline-none focus:border-[#0D4F46]"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border rounded-xl p-4 outline-none focus:border-[#0D4F46]"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border rounded-xl p-4 outline-none focus:border-[#0D4F46]"
                        />

                        <textarea
                            rows="6"
                            placeholder="Write your message..."
                            className="w-full border rounded-xl p-4 outline-none focus:border-[#0D4F46]"
                        ></textarea>

                        <button
                            className="bg-[#C9A84C] hover:bg-[#b9983f] text-black font-semibold px-8 py-4 rounded-xl transition duration-300"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

            {/* Google Map */}

            <div className="max-w-7xl mx-auto mt-12 px-6">

                <div className="rounded-2xl overflow-hidden shadow-lg">

                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=Colombo,Sri+Lanka&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                </div>

            </div>

        </div>
    );
}