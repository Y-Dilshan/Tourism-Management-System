import { useState } from "react";
import {
  IoSettings,
  IoNotifications,
  IoShieldCheckmark,
  IoGlobeOutline,
  IoCardOutline,
  IoSave,
} from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";

const TABS = [
  { key: "general", label: "General", icon: IoGlobeOutline },
  { key: "account", label: "Admin Account", icon: FaUserShield },
  { key: "notifications", label: "Notifications", icon: IoNotifications },
  { key: "security", label: "Security", icon: IoShieldCheckmark },
  { key: "billing", label: "Billing", icon: IoCardOutline },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
        checked ? "bg-[#1A7A6E]" : "bg-[#0D4F46]/20"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function FieldLabel({ children, hint }) {
  return (
    <div className="mb-1.5">
      <label className="text-sm font-semibold text-[#0D2A24]">{children}</label>
      {hint && <p className="text-xs text-[#4B5F59] mt-0.5">{hint}</p>}
    </div>
  );
}

const inputClass =
  "w-full bg-[#F5EDD6] text-[#0D2A24] placeholder-[#4B5F59]/60 px-4 py-2.5 rounded-lg border border-[#0D4F46]/15 outline-none focus:border-[#C9A84C] text-sm";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  const [general, setGeneral] = useState({
    siteName: "Go Lanka",
    supportEmail: "support@golanka.lk",
    currency: "LKR",
    timezone: "Asia/Colombo",
    maintenanceMode: false,
  });

  const [account, setAccount] = useState({
    name: "Admin User",
    email: "admin@golanka.lk",
    role: "System Administrator",
  });

  const [notifications, setNotifications] = useState({
    newBooking: true,
    newReview: true,
    lowInventory: false,
    weeklyReport: true,
    marketingUpdates: false,
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlerts: true,
    sessionTimeout: "30",
  });

  const sectionLabel = "text-[10px] uppercase tracking-[0.25em] text-[#7FA89E] font-semibold";

  return (
    <div>
      {/* Boarding-pass header */}
      <div className="relative flex bg-white rounded-2xl border border-[#0D4F46]/15 shadow-sm overflow-hidden mb-8">
        <div className="flex-1 p-8">
          <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold mb-2"> Admin · Boarding Pass </p>
          <h1 className="font-serif text-4xl text-[#0D2A24]"> System Settings </h1>
          <p className="text-[#4B5F59] mt-2"> Configure platform preferences, account details and security </p>
        </div>

        <div className="relative flex flex-col items-center justify-center px-10 border-l-2 border-dashed border-[#0D4F46]/25 bg-[#0D4F46] min-w-[220px]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#F5EDD6]"></div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]"> Status </p>
          <p className="font-serif text-2xl text-white mt-1"> Active </p>
          <button className="mt-5 bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#F5EDD6] transition flex items-center gap-2">
            <IoSave size={15} /> Save Changes
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-6">
        {/* Settings nav — boarding pass stub style */}
        <div className="bg-white rounded-2xl border border-[#0D4F46]/15 p-3 h-fit">
          <p className={`${sectionLabel} px-3 pt-2 pb-3`}>Categories</p>
          <div className="flex flex-col gap-1">
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 text-left ${
                  activeTab === key
                    ? "bg-[#0D4F46] text-[#F5EDD6] font-semibold"
                    : "text-[#4B5F59] hover:bg-[#F5EDD6]"
                }`}
              >
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>
        </div>

        {/* Settings content */}
        <div className="bg-white rounded-2xl border border-[#0D4F46]/15 overflow-hidden">
          {/* GENERAL */}
          {activeTab === "general" && (
            <div>
              <div className="px-8 py-6 border-b border-[#0D4F46]/15">
                <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Manifest </p>
                <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> General Settings </h2>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-6">
                <div>
                  <FieldLabel hint="Displayed across the site and in emails">Site Name</FieldLabel>
                  <input
                    type="text"
                    className={inputClass}
                    value={general.siteName}
                    onChange={(e) => setGeneral({ ...general, siteName: e.target.value })}
                  />
                </div>

                <div>
                  <FieldLabel hint="Where customer inquiries are routed">Support Email</FieldLabel>
                  <input
                    type="email"
                    className={inputClass}
                    value={general.supportEmail}
                    onChange={(e) => setGeneral({ ...general, supportEmail: e.target.value })}
                  />
                </div>

                <div>
                  <FieldLabel>Default Currency</FieldLabel>
                  <select
                    className={inputClass}
                    value={general.currency}
                    onChange={(e) => setGeneral({ ...general, currency: e.target.value })}
                  >
                    <option value="LKR">LKR — Sri Lankan Rupee</option>
                    <option value="USD">USD — US Dollar</option>
                    <option value="EUR">EUR — Euro</option>
                    <option value="GBP">GBP — British Pound</option>
                  </select>
                </div>

                <div>
                  <FieldLabel>Timezone</FieldLabel>
                  <select
                    className={inputClass}
                    value={general.timezone}
                    onChange={(e) => setGeneral({ ...general, timezone: e.target.value })}
                  >
                    <option value="Asia/Colombo">Asia/Colombo (GMT+5:30)</option>
                    <option value="Asia/Dubai">Asia/Dubai (GMT+4:00)</option>
                    <option value="Europe/London">Europe/London (GMT+0:00)</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex items-center justify-between border-t border-dashed border-[#0D4F46]/15 pt-6">
                  <div>
                    <p className="text-sm font-semibold text-[#0D2A24]">Maintenance Mode</p>
                    <p className="text-xs text-[#4B5F59] mt-0.5">Take the customer-facing site offline temporarily</p>
                  </div>
                  <Toggle
                    checked={general.maintenanceMode}
                    onChange={(v) => setGeneral({ ...general, maintenanceMode: v })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ACCOUNT */}
          {activeTab === "account" && (
            <div>
              <div className="px-8 py-6 border-b border-[#0D4F46]/15">
                <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Manifest </p>
                <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Admin Account </h2>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <img src="/admin.jpg" alt="admin" className="w-16 h-16 rounded-full ring-2 ring-[#C9A84C]/50 bg-gray-200" />
                  <div>
                    <button className="text-sm font-semibold text-[#1A7A6E] hover:text-[#0D4F46] transition">
                      Change Photo
                    </button>
                    <p className="text-xs text-[#4B5F59] mt-0.5">JPG or PNG, at least 200x200px</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <FieldLabel>Full Name</FieldLabel>
                    <input
                      type="text"
                      className={inputClass}
                      value={account.name}
                      onChange={(e) => setAccount({ ...account, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <FieldLabel>Email Address</FieldLabel>
                    <input
                      type="email"
                      className={inputClass}
                      value={account.email}
                      onChange={(e) => setAccount({ ...account, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <FieldLabel>Role</FieldLabel>
                    <input type="text" className={`${inputClass} opacity-60`} value={account.role} disabled />
                  </div>
                </div>

                <div className="border-t border-dashed border-[#0D4F46]/15 mt-8 pt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <FieldLabel>New Password</FieldLabel>
                    <input type="password" className={inputClass} placeholder="••••••••" />
                  </div>
                  <div>
                    <FieldLabel>Confirm Password</FieldLabel>
                    <input type="password" className={inputClass} placeholder="••••••••" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div>
              <div className="px-8 py-6 border-b border-[#0D4F46]/15">
                <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Manifest </p>
                <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Notification Preferences </h2>
              </div>

              <div className="p-8 space-y-5">
                {[
                  { key: "newBooking", label: "New Booking", hint: "Get notified when a customer makes a booking" },
                  { key: "newReview", label: "New Review", hint: "Get notified when a guest leaves a review" },
                  { key: "lowInventory", label: "Low Inventory", hint: "Alert when hotel or vehicle availability is low" },
                  { key: "weeklyReport", label: "Weekly Report", hint: "Receive a performance summary every Monday" },
                  { key: "marketingUpdates", label: "Marketing Updates", hint: "News about Go Lanka features and promotions" },
                ].map(({ key, label, hint }) => (
                  <div key={key} className="flex items-center justify-between border-b border-dashed border-[#0D4F46]/15 pb-5 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-semibold text-[#0D2A24]">{label}</p>
                      <p className="text-xs text-[#4B5F59] mt-0.5">{hint}</p>
                    </div>
                    <Toggle
                      checked={notifications[key]}
                      onChange={(v) => setNotifications({ ...notifications, [key]: v })}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECURITY */}
          {activeTab === "security" && (
            <div>
              <div className="px-8 py-6 border-b border-[#0D4F46]/15">
                <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Manifest </p>
                <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Security </h2>
              </div>

              <div className="p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-dashed border-[#0D4F46]/15 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-[#0D2A24]">Two-Factor Authentication</p>
                    <p className="text-xs text-[#4B5F59] mt-0.5">Require a verification code at every login</p>
                  </div>
                  <Toggle
                    checked={security.twoFactor}
                    onChange={(v) => setSecurity({ ...security, twoFactor: v })}
                  />
                </div>

                <div className="flex items-center justify-between border-b border-dashed border-[#0D4F46]/15 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-[#0D2A24]">Login Alerts</p>
                    <p className="text-xs text-[#4B5F59] mt-0.5">Email me when a new device signs in</p>
                  </div>
                  <Toggle
                    checked={security.loginAlerts}
                    onChange={(v) => setSecurity({ ...security, loginAlerts: v })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#0D2A24]">Session Timeout</p>
                    <p className="text-xs text-[#4B5F59] mt-0.5">Automatically sign out after inactivity</p>
                  </div>
                  <select
                    className={`${inputClass} w-40`}
                    value={security.sessionTimeout}
                    onChange={(e) => setSecurity({ ...security, sessionTimeout: e.target.value })}
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="never">Never</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* BILLING */}
          {activeTab === "billing" && (
            <div>
              <div className="px-8 py-6 border-b border-[#0D4F46]/15">
                <p className="uppercase tracking-[0.25em] text-xs text-[#1A7A6E] font-semibold"> Manifest </p>
                <h2 className="font-serif text-2xl text-[#0D2A24] mt-1"> Billing & Plan </h2>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between bg-[#F5EDD6] rounded-xl p-5 border border-[#0D4F46]/15 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#1A7A6E] font-semibold">Current Plan</p>
                    <p className="font-serif text-2xl text-[#0D2A24] mt-1">Go Lanka Enterprise</p>
                  </div>
                  <button className="bg-[#C9A84C] text-[#0B1F1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#0D4F46] hover:text-[#F5EDD6] transition">
                    Upgrade Plan
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
                    <span className="text-[#4B5F59]">Billing Cycle</span>
                    <span className="font-serif text-[#0D2A24]">Monthly</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-[#0D4F46]/15 pb-3">
                    <span className="text-[#4B5F59]">Next Invoice</span>
                    <span className="font-serif text-[#0D2A24]">2026-08-01</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4B5F59]">Payment Method</span>
                    <span className="font-serif text-[#0D2A24]">Visa •••• 4821</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}