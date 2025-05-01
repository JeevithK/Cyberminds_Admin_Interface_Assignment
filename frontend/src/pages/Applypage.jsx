import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Applypage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      fetchJobDetails();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const fetchJobDetails = async () => {
    try {
      console.log("Fetching job with ID:", id);
      const response = await axios.get(`https://cyberminds-admin-interface-assignment.onrender.com/apply/${id}`);
      console.log("Response data:", response.data);
      setJob(response.data);
    } catch (error) {
      console.error("Error fetching job:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center">Loading job details...</div>
      </div>
    );
  }

  
  if (!job) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          Job details not found.
        </div>
        <button onClick={() => navigate("/")} className="mt-4 flex items-center text-blue-600">
          <FaArrowLeft className="h-5 w-5 mr-2" />
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center mb-6 transition-colors duration-200 font-bold"
      >
        <FaArrowLeft className="h-5 w-5 mr-2" />
        Back to Jobs
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        


        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white">
          <h1 className="text-3xl font-bold">{job.jobTitle}</h1>
          <div className="flex items-center mt-2">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {job.jobType}
            </span>
            <span className="ml-4">{job.companyName}</span>
            <span className="ml-4 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {job.location}
            </span>
          </div>
        </div>

        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Salary Range</h3>
                <p className="text-gray-700">₹{job.minSalary} - ₹{job.maxSalary}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Experience Needed</h3>
                <p className="text-gray-700">{job.experienceRequired || "1 - 3 Years"}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Application Deadline</h3>
                <p className="text-gray-700">{job.applicationDeadline}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">Job Description</h3>
            <div className="mt-2 prose prose-purple max-w-none text-gray-700">
              {job.jobDescription}
            </div>
          </div>
        </div>

        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
            onClick={() => {
              toast.success("Application submitted!") 
              setTimeout(() => {
                navigate("/");
              }, 1000); 
            }

              
            }
          >
            Apply Now
          </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Applypage;

