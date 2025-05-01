import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Amazon from "../assets/amazon.png";
import Swiggy from "../assets/swiggy.png";
import Tesla from "../assets/tesla.png";
import Google from "../assets/google.png"
import Microsoft from "../assets/microsoft.png";
import Zepto from "../assets/zepto.png";
import Meta from "../assets/meta.png";
import Cybermind from "../assets/cybermind.jpeg";

import { IoPersonAddOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { GoStack } from "react-icons/go";

import useStore from "../stores/filterstore";
import { shallow } from "zustand/shallow";

const Listalljobs = () => {
  const [alljobs, setAllJobs] = useState([]);
  const navigate = useNavigate();

  const globallocation = useStore((state) => state.globallocation);
  const globaltype = useStore((state) => state.globaltype);

  
  // useEffect(() => {
  //   console.log("Global Variables:", { globallocation, globaltype });
  // }, [globallocation, globaltype]);


  const companylogos = {
    amazon: Amazon,
    swiggy: Swiggy,
    tesla: Tesla,
    google: Google,
    microsoft: Microsoft,
    zepto: Zepto,
    meta: Meta,
    cybermind:Cybermind,
  };


  // console.log("Global Variables : ", globallocation, globaltype);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://cyberminds-admin-interface-assignment.onrender.com/admin/getalljobs");
        setAllJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [alljobs]);

  // useEffect(() => {
  //     if (globallocation !== "")
  //     {
  //       const fetchJobs = async () => {
  //         try {
  //           const res = await axios.get(
  //             `http://localhost:5000/selected/${globallocation}`
  //           ); // Use correct port if needed
  //           setAllJobs(res.data);
  //         } catch (error) {
  //           console.error("Error fetching jobs:", error);
  //         }
  //       };
  //       fetchJobs();
  //     }
      
  //     }, [globallocation]);

// useEffect(() => {
//   const fetchFilteredJobs = async () => {
//     try {
//       // Only make request if at least one filter is set
//       if (globallocation || globaltype) {
//         const res = await axios.get("http://localhost:5000/select", {
//           params: {
//             location: globallocation || undefined,
//             type: globaltype || undefined,
//           },
//         });
//         setAllJobs(res.data);
//       }
//     } catch (error) {
//       console.error("Error fetching filtered jobs:", error);
//     }
//   };

//   // Add debounce to prevent rapid successive requests
//   const debounceTimer = setTimeout(fetchFilteredJobs, 300);

//   return () => clearTimeout(debounceTimer);
// }, [globallocation, globaltype]);



  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-[1500px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {alljobs.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-2xl shadow-md p-5 space-y-4 relative h-[400px] flex flex-col justify-between"
              >
                

                <div className="flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3 ">
                    
                    <div className="bg-gray-100 p-2 rounded-[17px] border border-white shadow-lg">
                      <img
                        src={
                          companylogos[job.companyName.toLowerCase()] ||
                          "default-logo.png"
                        }
                        alt="Company Logo"
                        className="w-16 h-15 object-contain"
                      />
                    </div>

                    
                    <div className="flex items-center h-8 px-3 py-1 text-xs font-semibold bg-blue-300 rounded-[8px] text-black text-[14px]">
                      24th Ago
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6 mt-2">
                      {job.jobTitle}
                    </h2>
                  </div>

                  <div className="flex justify-between items-start gap-4 text-gray-600 text-sm">
                    <div className="flex flex-row">
                      <div className="text-[17px] mr-1">
                        <IoPersonAddOutline />
                      </div>
                      {job.experienceRequired || "1-3 yr"} Exp
                    </div>
                    <div className="flex flex-row">
                      <div className="text-[17px] mr-1">
                        <BsBuildings />
                      </div>
                      {job.jobType}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-[17px] mr-1">
                        <GoStack />
                      </div>
                      {job.maxSalary || "12"} LPA
                    </div>
                  </div>
                  <ul
                    className="text-gray-500 text-sm list-disc list-inside max-h-[100px] overflow-y-auto mt-3"
                    style={{
                      scrollbarWidth: "none" ,
                      msOverflowStyle: "none" ,
                    }}
                  >
                    <li className="py-1">{job.jobDescription.split("\n")}</li>
                  </ul>
                </div>

                <button
                  className="bg-sky-500 text-white w-full py-2 rounded-xl hover:bg-blue-500 transition"
                  onClick={() => {
                    console.log(job._id);
                    navigate(`/apply/${job._id}`);
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Listalljobs;
