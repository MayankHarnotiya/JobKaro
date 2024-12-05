import { Job } from "../models/jobModel.js";

// Admin posts a job
export const postJob = async (req, res) => {
  try {
    const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
    const userId = req.id;
    if (!title || !description || !salary || !location || !jobType || !experience || !position || !companyId) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId,
    });
    return res.status(201).json({
      message: "New job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while creating the job.",
      success: false,
    });
  }
};

// Get all jobs (for students)
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query).populate({
        path:"company"
    }).sort({createdAt:-1});
    if (!jobs.length) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching the jobs.",
      success: false,
    });
  }
};

// Get job by ID (for students)
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path:"applications"
    });
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching the job.",
      success: false,
    });
  }
};

// Get jobs created by admin
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId }).populate({
      path:'company'
    });
    if (!jobs.length) {
      return res.status(404).json({
        message: "No jobs found for this admin.",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching the jobs.",
      success: false,
    });
  }
};
// In your jobController.js

// Function to delete a job by ID
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!job) {
      console.log(`Job with ID ${id} not found.`);
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    if (job.created_by.toString() !== req.id) {
      console.log(`User ${req.id} is not authorized to delete job ${id}`);
      return res.status(401).json({
        message: "User not authorized to delete this job",
        success: false,
      });
    }

    // Use findByIdAndDelete
    await Job.findByIdAndDelete(id);
    console.log(`Job ${id} deleted successfully.`);
    res.status(200).json({
      message: "Job deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error(`Failed to delete job ${id}:`, error);
    res.status(500).json({
      message: `An error occurred while deleting the job: ${error.message || error.toString()}`,
      success: false,
    });
  }
};
