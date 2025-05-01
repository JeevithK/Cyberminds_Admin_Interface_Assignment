import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import Job from "./models/jobcreationmodel.js";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "https://cyberminds-admin-interface-assignment-bamg.onrender.com",
    credentials: true,
  })
);
app.use(express.json());

//controllers

app.post("/admin/createjob", async (req, res) => {
  const createjob = await Job.create(req.body);
  res.status(202).json({ message: "job created sucessfully" });
});

app.get("/admin/getalljobs", async (req, res) => {
  const getall = await Job.find({});
  res.status(202).json(getall);
});

app.get("/apply/:id", async (req, res) => {
  try {
    console.log("Fetching job with ID:", req.params.id);
    const getone = await Job.findById(req.params.id);
    console.log("Found job:", getone);
    res.status(200).json(getone);
    // ... rest of the code
  } catch (error) {
    console.error("Error in /apply/:id:", error);

  }
  
});

app.get("/select", async (req, res) => {
  try {
    const { location, type } = req.query;
    const filter = {};

    if (location && location !== "undefined") {
      filter.location = { $regex: location, $options: "i" };
    }

    if (type && type !== "undefined") {
      filter.type = type;
    }

    console.log("Filter criteria:", filter); // Debug log
    const jobs = await Job.find(filter);
    res.json(jobs);
  } catch (err) {
    console.error("Filter error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});




app.listen(process.env.PORT, () => {
  console.log("running in PORT", process.env.PORT);
  connectDB();
});
