import React from "react";

export default function JobCard({ job }) {
  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:border-indigo-400/40 hover:bg-white/7 transition">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-medium">{job.company}</div>
          <div className="text-sm text-gray-300">{job.role}</div>
        </div>
        <div className="text-xs text-gray-400">{job.date}</div>
      </div>
      <div className="mt-2">
        <span
          className={`badge ${
            job.status === "Applied"
              ? "badge-applied"
              : job.status === "Interviewing"
              ? "badge-interview"
              : job.status === "Offer"
              ? "badge-offer"
              : "badge-rejected"
          }`}
        >
          {job.status}
        </span>
      </div>
    </div>
  );
}
