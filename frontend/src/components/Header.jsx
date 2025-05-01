import React, { useState } from "react";
import Createjobpage from "../pages/Createjobpage";
// import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Header = () => {
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseModal = () => {
    setShowCreateJob(false);
  };

  return (
    <>
      <header className="bg-white bg-opacity-90 sticky top-0 z-40">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8 py-7 rounded-full shadow-sm flex items-center justify-between bg-white">
          <div className="text-2xl font-bold text-blue-600 cursor-pointer">
            <img
              src="https://www.cybermindworks.com/images/cmwlogo.svg"
              alt="CMW Image"
              className="h-13 w-auto"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMobileMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 text-[17px]">
            <a href="#" className="text-gray-700">
              <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                Home
              </div>
            </a>
            <a href="#" className="text-gray-700">
              <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                Find Jobs
              </div>
            </a>
            <a href="#" className="text-gray-700">
              <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                Find Talents
              </div>
            </a>
            <a href="#" className="text-gray-700">
              <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                About us
              </div>
            </a>
            <a href="#" className="text-gray-700">
              <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                Testimonials
              </div>
            </a>
          </nav>

          {/* Create Job/Login Button - Hidden on mobile when menu is open */}
          {(!showMobileMenu || window.innerWidth >= 768) && (
            <div className="group inline-block">
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition relative overflow-hidden h-10 w-32"
                onClick={() => {
                  setShowCreateJob(true);
                }}
              >
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full">
                  Create Job
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
                  Login
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden bg-white shadow-lg rounded-b-xl">
            <div className="flex flex-col space-y-2 px-4 py-2">
              <a href="#" className="text-gray-700">
                <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                  Home
                </div>
              </a>
              <a href="#" className="text-gray-700">
                <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                  Find Jobs
                </div>
              </a>
              <a href="#" className="text-gray-700">
                <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                  Find Talents
                </div>
              </a>
              <a href="#" className="text-gray-700">
                <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                  About us
                </div>
              </a>
              <a href="#" className="text-gray-700">
                <div className="px-4 py-2 border-amber-50 border rounded-xl hover:shadow-md transition-shadow duration-200 font-bold">
                  Testimonials
                </div>
              </a>
              <div className="group inline-block pt-2">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition relative overflow-hidden h-10 w-full"
                  onClick={() => {
                    setShowCreateJob(true);
                    setShowMobileMenu(false);
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-full">
                    Create Job
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
                    Login
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Overlay with backdrop blur */}
        {showCreateJob && (
          <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-80 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-y-auto max-h-[90vh]">
              <Createjobpage setShowCreateJob={setShowCreateJob} />
            </div>
          </div>
        )}
      </header>
      <Toaster />
    </>
  );
};

export default Header;