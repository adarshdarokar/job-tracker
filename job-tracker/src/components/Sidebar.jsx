import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ to, label, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
        isActive ? "bg-indigo-600/20 text-indigo-300" : "hover:bg-white/5 text-gray-300"
      }`
    }
  >
    {icon}
    <span className="text-sm">{label}</span>
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col gap-3 p-4 border-r border-white/10 glass sticky top-0 h-screen">
      <div className="flex items-center gap-2 px-2 py-1">
        <div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 to-cyan-400"></div>
        <span className="font-semibold tracking-wide">JobTracker</span>
      </div>

      <div className="mt-2 flex-1 space-y-1">
        <LinkItem
          to="/"
          label="Landing"
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M3 12l9-9 9 9M4.5 10.5V21h15V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          }
        />
        <LinkItem
          to="/dashboard"
          label="Dashboard"
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M4 13h6V4H4v9zm10 7h6V4h-6v16zM4 20h6v-5H4v5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          }
        />
      </div>

      <div className="text-xs text-gray-500 px-2">v1 — Dark Mode</div>
    </aside>
  );
}
