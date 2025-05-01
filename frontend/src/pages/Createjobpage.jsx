import React, { useState } from "react";
import Select from "react-select";
import { LuArrowDownUp } from "react-icons/lu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const Createjobpage = ({ setShowCreateJob}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "Full-time",
    minSalary: "",
    maxSalary: "",
    applicationDeadline: "",
    jobDescription: "",
  });

  const locationOptions = [
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Remote", label: "Remote" },
  ];

  const jobTypeOptions = [
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Internship", label: "Internship" },
    { value: "Contract", label: "Contract" },
    { value: "Freelance", label: "Freelance" },
    { value: "Temporary", label: "Temporary" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    const payload = {
      ...formData,
      location: formData.location.value || "",
      jobType: formData.jobType.value || "",
    };

    try {
      const postjob = await axios.post(
        "https://cyberminds-admin-interface-assignment.onrender.com/admin/createjob",
        payload
      );
      console.log(payload);
      setShowCreateJob(false);
      // onJobAdded();
      toast.success("Job Added !!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast.error("Error Adding Job!!");
      setShowCreateJob(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="p-6 relative">
      <button
        onClick={() => {
          navigate("/");
          setShowCreateJob(false);
        }}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h2 className="text-2xl font-bold mb-8 text-center">
        Create Job Opening
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Stack Developer"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Amazon, Microsoft, Swiggy"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="w-full md:w-1/ flex-1">
            <label className="block text-gray-700 mb-2">Location</label>
            <Select
              name="location"
              options={locationOptions}
              value={formData.location}
              onChange={(selectedOption) => {
                setFormData((prev) => ({
                  ...prev,
                  location: selectedOption,
                }));
              }}
              placeholder="Select or search location"
              isSearchable
              className="react-select-container text-[15px]"
              classNamePrefix="react-select"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Job Type</label>
            <div className="w-full flex-1">
              <Select
                name="jobType"
                options={jobTypeOptions}
                value={formData.jobType}
                onChange={(selectedOption) => {
                  setFormData((prev) => ({
                    ...prev,
                    jobType: selectedOption,
                  }));
                }}
                placeholder="Job Type"
                isSearchable={false}
                className="react-select text-[15px]"
                classNamePrefix="react-select"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Salary Range</label>
            <div className="flex space-x-2">
              <div className="w-1/2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[14px]">
                  <span className="text-gray-400">
                    <LuArrowDownUp />
                  </span>
                </div>
                <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
                  <span className="text-gray-500">₹</span>
                </div>
                <input
                  type="Number"
                  name="minSalary"
                  max={2500000}
                  min={200000}
                  value={formData.minSalary}
                  onChange={handleChange}
                  className="pl-11 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                  required
                />
              </div>
              <div className="w-1/2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[14px]">
                  <span className="text-gray-400">
                    <LuArrowDownUp />
                  </span>
                </div>
                <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
                  <span className="text-gray-500">₹</span>
                </div>
                <input
                  type="Number"
                  max={2500000}
                  min={200000}
                  name="maxSalary"
                  value={formData.maxSalary}
                  onChange={handleChange}
                  className="pl-11 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="12,00,000"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Application Deadline
            </label>
            <div className="relative">
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Please share a description to let the candidate know more about the job role"
            required
          ></textarea>
        </div>

        <div className="flex space-x-4 mt-8">
          <button
            type="button"
            className="w-1/2 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition flex items-center justify-center space-x-2"
          >
            <span>
              {" "}
              <div className="flex flex-row items-center gap-2 hover:text-blue-600 cursor-pointer">
                <div>Save Draft</div>
                <div>
                  <FaAnglesDown />
                </div>
              </div>
            </span>
          </button>
          <button
            type="submit"
            className="w-1/2 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition flex items-center justify-center space-x-2"
          >
            <div className="flex flex-row items-center gap-2  cursor-pointer">
              <div>Save Draft</div>
              <div>
                <FaAnglesRight />
              </div>
            </div>
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Createjobpage;
