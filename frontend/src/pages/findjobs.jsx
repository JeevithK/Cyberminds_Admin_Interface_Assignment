import { useState } from "react";

const FindJobs = () => {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $110,000",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "DesignHub",
      location: "New York, NY",
      type: "Contract",
      salary: "$70 - $90/hr",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "DataSystems",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $140,000",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-2xl font-light text-gray-800 mb-2">Find Jobs</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search jobs..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700">
            Search
          </button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="font-medium text-lg text-gray-800">
                  {job.title}
                </h2>
                <p className="text-gray-600">
                  {job.company} • {job.location}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">{job.type}</p>
                <p className="font-medium text-gray-800">{job.salary}</p>
              </div>
            </div>
            <button className="mt-3 w-full md:w-auto px-4 py-2 text-sm bg-white border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindJobs;
