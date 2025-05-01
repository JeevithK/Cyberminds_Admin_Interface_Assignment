import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    minSalary: {
      type: Number,
      required: true,
      min: 0,
    },
    maxSalary: {
      type: Number,
      required: true,
      min: 0,
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
