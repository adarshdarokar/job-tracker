import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Column from "../components/Column";
import { jobsData } from "../data";

export default function Dashboard() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return jobsData;
    return jobsData.filter(
      (j) =>
        j.company.toLowerCase().includes(q) ||
        j.role.toLowerCase().includes(q) ||
        j.status.toLowerCase().includes(q) ||
        j.date.toLowerCase().includes(q)
    );
  }, [query]);

  const byStatus = (status) => filtered.filter((j) => j.status === status);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header with hover button */}
        <Header
          query={query}
          setQuery={setQuery}
          titleButtonClass="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 
            hover:from-blue-500 hover:to-cyan-400 
            transition-all duration-300 transform hover:scale-110 
            hover:shadow-xl hover:shadow-cyan-500/50 font-semibold"
        />

        {/* Columns */}
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/40 rounded-xl">
              <Column title="Applied" color="badge-applied" jobs={byStatus("Applied")} />
            </div>
            <div className="transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/40 rounded-xl">
              <Column title="Interviewing" color="badge-interview" jobs={byStatus("Interviewing")} />
            </div>
            <div className="transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/40 rounded-xl">
              <Column title="Offer" color="badge-offer" jobs={byStatus("Offer")} />
            </div>
            <div className="transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/40 rounded-xl">
              <Column title="Rejected" color="badge-rejected" jobs={byStatus("Rejected")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
