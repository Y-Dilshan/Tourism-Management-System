import { useState } from "react";
import { FaEnvelope, FaEnvelopeOpenText, FaReply, FaTrash, FaSearch, FaTimes } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

// Sample data — replace with data fetched from your messages/contact-form endpoint
const initialMessages = [
  {
    id: "MSG001",
    name: "John Smith",
    email: "john.smith@example.com",
    subject: "Question about Beach Resort availability",
    message:
      "Hi, I wanted to check if the Beach Resort has any rooms available for the last week of August. We are a family of four looking for a sea-view room.",
    date: "2026-07-10",
    status: "Unread",
  },
  {
    id: "MSG002",
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    subject: "Vehicle rental for airport pickup",
    message:
      "Could you let me know the rates for an airport pickup and a 3-day van rental around Kandy? We land on the 20th in the evening.",
    date: "2026-07-09",
    status: "Replied",
  },
  {
    id: "MSG003",
    name: "Michael Perera",
    email: "michael.perera@example.com",
    subject: "Tour package customization",
    message:
      "We are interested in the Southern Coast tour package but would like to add an extra day in Galle. Is that possible, and what would it cost?",
    date: "2026-07-09",
    status: "Read",
  },
  {
    id: "MSG004",
    name: "Amanda Fernando",
    email: "amanda.fernando@example.com",
    subject: "Guide availability for hiking trip",
    message:
      "Hello, I'm planning a hiking trip to Ella next month and would like to know if a local guide is available for two days.",
    date: "2026-07-08",
    status: "Unread",
  },
  {
    id: "MSG005",
    name: "David Wilson",
    email: "david.wilson@example.com",
    subject: "Refund query for cancelled booking",
    message:
      "I had to cancel my hotel booking (BK014) due to a flight change. Could you confirm the refund status for this booking?",
    date: "2026-07-07",
    status: "Read",
  },
];

const statusStyles = {
  Unread: "bg-[#C45A2A]/10 text-[#C45A2A] border-[#C45A2A]/30",
  Read: "bg-[#7FA89E]/10 text-[#4B5F59] border-[#7FA89E]/30",
  Replied: "bg-[#1A7A6E]/10 text-[#0D4F46] border-[#1A7A6E]/30",
};

export default function AdminMessages() {
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = messages.filter((m) => {
    const q = search.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.subject.toLowerCase().includes(q)
    );
  });

  const unreadCount = messages.filter((m) => m.status === "Unread").length;
  const repliedCount = messages.filter((m) => m.status === "Replied").length;
  const todayCount = messages.filter((m) => m.date === "2026-07-10").length;

  const openMessage = (msg) => {
    setSelected(msg);
    if (msg.status === "Unread") {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, status: "Read" } : m))
      );
    }
  };

  const markReplied = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: "Replied" } : m))
    );
    setSelected((prev) => (prev && prev.id === id ? { ...prev, status: "Replied" } : prev));
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    setSelected((prev) => (prev && prev.id === id ? null : prev));
  };

  return (
    <div>
      {/* Boarding-pass header */}
      <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
        <div className="flex-1 p-8">
          <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2">
            Admin · Boarding Pass
          </p>
          <h1 className="font-serif text-4xl text-[#0D2A24]"> Customer Messages </h1>
          <p className="text-[#4B5F59] mt-2">
            View and respond to messages submitted through the Contact page
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Inbox </p>
          <p className="font-serif text-2xl text-white mt-1"> {unreadCount} New </p>
          <button className="mt-5 bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#F5EDD6] transition">
            Mark All Read
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mb-4">
            <FaEnvelope className="text-[#C9A84C] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Total Messages</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> {messages.length} </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#C45A2A] flex items-center justify-center mb-4">
            <FaEnvelopeOpenText className="text-[#C45A2A] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Unread</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> {unreadCount} </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#1A7A6E] flex items-center justify-center mb-4">
            <MdMarkEmailRead className="text-[#1A7A6E] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Replied</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> {repliedCount} </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-[#0D4F46]/15">
          <div className="w-11 h-11 rounded-full border-2 border-[#1A7A6E] flex items-center justify-center mb-4">
            <FaEnvelope className="text-[#1A7A6E] text-lg" />
          </div>
          <p className="uppercase tracking-wide text-[11px] text-[#4B5F59] font-semibold">Received Today</p>
          <p className="font-serif text-3xl text-[#0D2A24] mt-1"> {todayCount} </p>
        </div>
      </div>

      {/* Messages — ledger */}
      <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden mb-8">
        <div className="flex justify-between items-center px-8 py-6 border-b border-[#0D4F46]/15">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Ledger </p>
            <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Contact Submissions </h2>
          </div>
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4B5F59]/60 text-sm" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search messages…"
              className="bg-[#F5EDD6] text-[#0D2A24] placeholder-[#4B5F59]/60 pl-10 pr-4 py-2 rounded-full border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] text-sm"
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="bg-[#0D4F46] text-[#F5EDD6]">
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Message ID</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Customer</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Subject</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Date</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-xs uppercase tracking-wide font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-[#4B5F59]">
                  No messages match your search.
                </td>
              </tr>
            )}

            {filtered.map((m) => (
              <tr
                key={m.id}
                className={`border-b border-[#0D4F46]/10 hover:bg-[#F5EDD6]/70 cursor-pointer ${
                  m.status === "Unread" ? "font-semibold" : ""
                }`}
                onClick={() => openMessage(m)}
              >
                <td className="px-6 py-4 font-serif text-[#0D2A24]">{m.id}</td>
                <td className="px-6 py-4 text-[#0D2A24]">
                  <div>{m.name}</div>
                  <div className="text-xs text-[#4B5F59] font-normal">{m.email}</div>
                </td>
                <td className="px-6 py-4 text-[#4B5F59] font-normal max-w-[260px] truncate">{m.subject}</td>
                <td className="px-6 py-4 text-[#4B5F59] font-normal">{m.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold border ${statusStyles[m.status]}`}
                  >
                    {m.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3 text-sm">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openMessage(m);
                      }}
                      className="text-[#1A7A6E] hover:text-[#0D4F46]"
                      title="View"
                    >
                      <FaEnvelopeOpenText />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteMessage(m.id);
                      }}
                      className="text-[#C45A2A] hover:text-[#8f3f1b]"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Message Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl border border-[#0D4F46]/15 max-w-2xl w-full overflow-hidden">
            <div className="flex justify-between items-start px-8 py-6 border-b border-[#0D4F46]/15 bg-[#0D4F46]">
              <div>
                <p className="uppercase tracking-[0.25em] text-xs text-[#C9A84C] font-semibold"> {selected.id} </p>
                <h2 className="font-serif text-2xl text-white mt-1"> {selected.subject} </h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-[#F5EDD6] hover:text-[#C9A84C] text-xl"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-8">
              <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-4 mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-[#4B5F59] font-semibold">From</p>
                  <p className="font-serif text-lg text-[#0D2A24]">{selected.name}</p>
                  <p className="text-sm text-[#4B5F59]">{selected.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] uppercase tracking-wide text-[#4B5F59] font-semibold">Date</p>
                  <p className="text-sm text-[#4B5F59] mt-1">{selected.date}</p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-xs uppercase tracking-wide font-semibold border ${statusStyles[selected.status]}`}
                  >
                    {selected.status}
                  </span>
                </div>
              </div>

              <p className="text-[#4B5F59] leading-7">{selected.message}</p>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => markReplied(selected.id)}
                  className="flex-1 bg-[#C9A84C] text-[#0B1F1A] font-semibold py-3 rounded-full hover:bg-[#0D4F46] hover:text-white transition flex items-center justify-center gap-2"
                >
                  <FaReply /> Mark as Replied
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-3 rounded-full border border-[#0D4F46]/20 text-[#0D2A24] font-semibold hover:bg-[#F5EDD6] transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}