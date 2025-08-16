import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      {/* Header */}
      <header className="bg-gray-950/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"></div>
            <span className="font-semibold tracking-wide text-white">JobTracker</span>
          </div>
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            Open Dashboard
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">
            Track your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              job applications
            </span>{" "}
            like a pro.
          </h1>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              to="/dashboard"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              Get Started
            </Link>
            <a
              href="#"
              className="px-5 py-3 rounded-lg bg-gray-900/60 border border-gray-700 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3 pb-20">
          {[
            { t: "Kanban Flow", d: "Applied → Interviewing → Offer → Rejected" },
            { t: "Universal Search", d: "Company, role, or date — instantly" },
            { t: "Sleek Dark UI", d: "Glassy surfaces, subtle glows" },
          ].map((f) => (
            <div
              key={f.t}
              className="bg-gray-900/80 backdrop-blur-md border border-gray-800 p-6 rounded-xl shadow-md shadow-black/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/40"
            >
              <h3 className="font-semibold text-white">{f.t}</h3>
              <p className="text-gray-400 mt-1">{f.d}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950/80 border-t border-gray-800 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} JobTracker — built for speed.
        </div>
      </footer>
    </div>
  );
}
