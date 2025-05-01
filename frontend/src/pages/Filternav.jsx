import React, { useEffect, useState } from "react";
import { Range } from "react-range";
import Select from "react-select";
import { FiSearch, FiFilter, FiX } from "react-icons/fi";
import "react-range-slider-input/dist/style.css";
import RangeSlider from "react-range-slider-input";
import { RiSpeakLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import Listalljobs from "../components/Listalljobs";
import useStore from "../stores/filterstore";
import { shallow } from "zustand/shallow";
import { useMemo } from "react";




const SalaryRange = ({ min, max, step, values, setValues }) => (
  <div className="flex flex-col align-middle justify-center">
    <div className="flex flex-row justify-between">
      <div className="flex items-center justify-between text-gray-600 text-sm font-semibold">
        <p className="font-bold text-[16px]">Salary Per Month</p>
      </div>
      <div className="flex text-gray-600 text-sm font-semibold">
        <span className="font-bold text-[16px]">₹{values[0]}K </span>
        <span>&nbsp;-&nbsp;</span>
        <span className="font-bold text-[16px]"> ₹{values[1]}K</span>
      </div>
    </div>

    <div className="w-full mt-2 ">
      <RangeSlider
        min={min}
        max={max}
        step={step}
        defaultValue={values}
        value={values}
        onInput={setValues}
        className="mt-2"
      />
    </div>
  </div>
);

const Filternav = () => {
  const [jobtitle, setjobtitle] = useState("");
  const [location, setLocation] = useState(null);
  const [jobtype, setjobtype] = useState("");
  const [salaryRange, setSalaryRange] = useState([20, 80]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const setgloballocation = useStore((state) => state.setgloballocation);
  const setglobaltype = useStore((state) => state.setglobaltype);


  const locationOptions = [
    {value: undefined,label:"Enter Location"},
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Remote", label: "Remote" },
  ];

  const jobTypeOptions = [
    { value: undefined, label: "Enter Job Type" },
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Internship", label: "Internship" },
    { value: "Contract", label: "Contract" },
    { value: "Freelance", label: "Freelance" },
    { value: "Temporary", label: "Temporary" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      minHeight: "unset",
      padding: 0,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
      color: "#4B5563",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9CA3AF",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#111827",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 10,
    }),
  };


  const handleLocationChange = (selectedOption) => {
    const newLocation = selectedOption?.value || "";
    setgloballocation(newLocation);

    const searchParams = new URLSearchParams(location.search);
    if (newLocation) {
      searchParams.set("location", newLocation);
    } else {
      searchParams.delete("location");
    }

    
    navigate(`/jobs?${searchParams.toString()}`);
  };


  return (
    <div className="mx-auto bg-white shadow-md rounded-lg sticky top-24 z-30">
      
      <div className="hidden md:flex flex-wrap items-center justify-between p-7">
        
        <div className="md:w-auto flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="e.g. Software Engineer"
            value={jobtitle}
            onChange={(e) => setjobtitle(e.target.value)}
            className="pl-10 w-full py-1 text-sm text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-0 text-[15px]"
          />
        </div>

        
        <div className="h-12 w-px bg-gray-200 mx-6" />

        
        <CiLocationOn className="left-3 text-gray-400 text-[25px]" />
        <div className="w-1/4 flex-1">
          <Select
            options={locationOptions}
            value={location}
            onChange={
              (selectedOption) => {
              setLocation(selectedOption);
              
              setgloballocation(selectedOption.value)

            }
          }
            placeholder="Prefered Location"
            isSearchable
            className="react-select-container text-[15px]"
            classNamePrefix="react-select"
            styles={customStyles}
          />
        </div>

        
        <div className="h-12 w-px bg-gray-200 mx-6" />

        
        <RiSpeakLine className="left-3 text-gray-400 text-[25px]" />
        <div className="w-1/4 flex-1">
          <Select
            options={jobTypeOptions}
            value={jobTypeOptions.find((option) => option.value === jobtype)}
            onChange={(selectedOption) => {
              setjobtype(selectedOption.value)
              setglobaltype(selectedOption.value); 
             }}
            placeholder="Job Type"
            isSearchable={false}
            className="react-select text-[15px]"
            classNamePrefix="react-select"
            styles={customStyles}
          />
        </div>

        
        <div className="h-12 w-px bg-gray-200 mx-6" />

        
        <div className="flex-1 px-5">
          <SalaryRange
            min={20}
            max={80}
            step={10}
            values={salaryRange}
            setValues={setSalaryRange}
          />
        </div>
      </div>

      
      <div className="md:hidden p-7 flex justify-between items-center">
        <h3 className="font-medium text-gray-700">Filters</h3>
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="flex items-center gap-2 text-black-600"
        >
          {showMobileFilters ? (
            <>
              <FiX className="text-lg" />
              <span>Close</span>
            </>
          ) : (
            <div className="flex cursor-pointer items-center">
              <FiFilter className="text-lg mr-2" />
              <span>Open</span>
            </div>
          )}
        </button>
      </div>

      
      {showMobileFilters && (
        <div className="md:hidden p-5 mb-1 space-y-4 border-t border-gray-200">
          {/* Job Title */}
          <div className="w-full relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              value={jobtitle}
              onChange={(e) => setjobtitle(e.target.value)}
              className="pl-10 w-full py-2 text-sm text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          
          <div className="w-full">
            <Select
              options={locationOptions}
              value={location}
              onChange={(selectedOption) => {
                setLocation(selectedOption);
                setgloballocation(selectedOption.value);
              }}
              placeholder="Prefered Location"
              isSearchable
              className="react-select-container text-[15px]"
              classNamePrefix="react-select"
              styles={{
                ...customStyles,
                control: (provided) => ({
                  ...provided,
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  padding: "2px 8px",
                }),
              }}
            />
          </div>

          


          <div className="w-full">
            <Select
              options={jobTypeOptions}
              value={jobTypeOptions.find((option) => option.value === jobtype)}
              onChange={(selectedOption) => {
                setjobtype(selectedOption.value);
                setglobaltype(selectedOption.value)
              }
                
                
              }
              placeholder="Job Type"
              isSearchable={false}
              className="react-select text-[15px]"
              classNamePrefix="react-select"
              styles={{
                ...customStyles,
                control: (provided) => ({
                  ...provided,
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  padding: "2px 8px",
                }),
              }}
            />
          </div>

          
          <div className="w-full px-2 pt-2">
            <SalaryRange
              min={20}
              max={80}
              step={10}
              values={salaryRange}
              setValues={setSalaryRange}
            />
          </div>

          


          <button
            onClick={() => setShowMobileFilters(false)}
            className="w-full py-2.5 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Apply Filters
          </button>
        </div>
      )}
      <Listalljobs />
    </div>
  );
};

export default Filternav;
