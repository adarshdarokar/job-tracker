import React from "react";
import JobCard from "./JobCard";

export default function Column({ title, color, jobs }) {
  return (
    <div className="glass rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">{title}</h3>
        <span className={`badge ${color}`}>{jobs.length} items</span>
      </div>
      <div className="space-y-3">
        {jobs.length ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="text-sm text-gray-400">No items</div>
        )}
      </div>
    </div>
  );
}
