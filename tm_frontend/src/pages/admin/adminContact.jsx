import { useState } from "react";
import { FaEnvelope, FaUserCircle, FaSearch, FaTrash, FaEye, FaReply, FaCheckCircle, FaCalendarAlt, FaEnvelopeOpenText} from "react-icons/fa";

export default function AdminContact() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      subject: "Hotel Booking",
      message:
        "Hello, I would like to know whether family rooms are available next weekend. Please let me know the room prices and availability.",
      status: "Unread",
      date: "2026-07-01",
    },
    {
      id: 2,
      name: "Sarah Perera",
      email: "sarah@gmail.com",
      subject: "Vehicle Inquiry",
      message:
        "Can I reserve a vehicle together with my hotel booking? I need airport pickup as well.",
      status: "Read",
      date: "2026-06-30",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@gmail.com",
      subject: "Refund Request",
      message:
        "I cancelled my reservation yesterday. When will I receive the refund to my bank account?",
      status: "Replied",
      date: "2026-06-29",
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [search, setSearch] = useState("");

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject.toLowerCase().includes(search.toLowerCase())
  );

  const deleteMessage = (id) => {
    if (!window.confirm("Delete this message?")) return;
    setMessages(messages.filter((msg) => msg.id !== id));

    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  const markAsRead = (id) => {
    const updated = messages.map((msg) =>
      msg.id === id ? { ...msg, status: "Read" } : msg
    );

    setMessages(updated);

    const selected = updated.find((m) => m.id === id);
    setSelectedMessage(selected);
  };

  const markAsReplied = () => {
    if (!selectedMessage) return;

    const updated = messages.map((msg) =>
      msg.id === selectedMessage.id
        ? { ...msg, status: "Replied" }
        : msg
    );

    setMessages(updated);

    setSelectedMessage({
      ...selectedMessage,
      status: "Replied",
    });
  };

  const unreadCount = messages.filter(
    (m) => m.status === "Unread"
  ).length;

  const repliedCount = messages.filter(
    (m) => m.status === "Replied"
  ).length;

  const readCount = messages.filter(
    (m) => m.status === "Read"
  ).length;

  const badge = (status) => {
    if (status === "Unread")
      return "bg-red-100 text-red-600";

    if (status === "Read")
      return "bg-blue-100 text-blue-600";

    return "bg-green-100 text-green-600";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#0D4F46]"> Customer Contact Messages </h1>
        <p className="text-gray-500 mt-2"> Manage customer inquiries and respond quickly. </p>
      </div>

      {/* Statistics */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#0D4F46] to-[#167768] text-white p-6 shadow-xl">
          <p>Total Messages</p>
          <h1 className="text-4xl font-bold mt-2"> {messages.length} </h1>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-red-500 to-red-400 text-white p-6 shadow-xl">
          <p>Unread</p>
          <h1 className="text-4xl font-bold mt-2"> {unreadCount} </h1>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 shadow-xl">
          <p>Read</p>
          <h1 className="text-4xl font-bold mt-2"> {readCount} </h1>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 shadow-xl">
          <p>Replied</p>
          <h1 className="text-4xl font-bold mt-2"> {repliedCount} </h1>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg p-5 mb-8 flex items-center gap-4">
        <FaSearch className="text-gray-400 text-xl" />
        <input type="text" placeholder="Search messages..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none text-lg"/>
      </div>
      <div className="grid lg:grid-cols-5 gap-8">

        {/* Message List */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-[#0D4F46] text-white p-5 text-xl font-semibold"> Inbox </div>
          <div className="max-h-[650px] overflow-y-auto">
            {filteredMessages.map((msg) => (
              <div key={msg.id} onClick={() => setSelectedMessage(msg)} className={`cursor-pointer p-5 border-b transition duration-300 hover:bg-gray-100
                ${
                  selectedMessage?.id === msg.id
                    ? "bg-teal-50 border-l-4 border-[#0D4F46]"
                    : ""
                }`}>

                <div className="flex justify-between">
                  <div className="flex gap-4"> <FaUserCircle className="text-5xl text-[#0D4F46]" /> <div>
                      <h2 className="font-bold"> {msg.name} </h2>
                      <p className="text-gray-500 text-sm"> {msg.email} </p>
                      <p className="mt-2 font-semibold"> {msg.subject} </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm h-fit ${badge(
                      msg.status
                    )}`}> {msg.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8">
          {selectedMessage ? (
            <>
              <div className="flex justify-between items-center mb-8">
                <div> <h2 className="text-3xl font-bold text-[#0D4F46]"> {selectedMessage.subject} </h2>
                  <p className="text-gray-500 mt-1"> Customer Message Details </p>
                </div>
                <FaEnvelopeOpenText className="text-5xl text-[#0D4F46]" />
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-3"> <FaUserCircle className="text-3xl text-[#0D4F46]" /> <div>
                    <p className="font-bold"> {selectedMessage.name} </p>
                    <p className="text-gray-500"> {selectedMessage.email} </p>
                  </div>
                </div>

                <div className="flex items-center gap-3"> <FaCalendarAlt className="text-[#0D4F46]" /> <span>{selectedMessage.date}</span> </div>
                <div>
                  <h3 className="font-bold mb-3"> Customer Message </h3>
                  <div className="bg-gray-100 rounded-xl p-6 leading-8 text-gray-700"> {selectedMessage.message} </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mt-10">
                <button onClick={() =>
                    markAsRead(selectedMessage.id)
                  }
                  className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl py-3 flex justify-center items-center gap-2"> <FaCheckCircle /> Read  </button>
                <button onClick={markAsReplied} className="bg-green-600 hover:bg-green-700 transition text-white rounded-xl py-3 flex justify-center items-center gap-2"><FaReply /> Reply </button>
                <button onClick={() =>
                    deleteMessage(selectedMessage.id)
                  }
                  className="bg-red-600 hover:bg-red-700 transition text-white rounded-xl py-3 flex justify-center items-center gap-2"><FaTrash /> Delete </button>
                <button className="bg-[#0D4F46] hover:bg-[#0A3D36] transition text-white rounded-xl py-3 flex justify-center items-center gap-2"> <FaEye /> Preview </button>
              </div>
            </>

          ) : (
            
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
              <FaEnvelopeOpenText className="text-8xl mb-6" />
              <h2 className="text-3xl font-bold"> No Message Selected </h2>
              <p className="mt-3"> Select a message from the inbox to view its details. </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}