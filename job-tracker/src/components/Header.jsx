import React from "react";

export default function Header({ query, setQuery }) {
  return (
    <div className="glass border-b border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between gap-4">
        <div className="text-sm text-gray-300"><button>Dashboard</button></div>
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by company, role, status, or date…"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-10 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M21 21l-4.3-4.3m1.3-5.2a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
