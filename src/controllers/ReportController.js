const reportModel = require("../models/ReportModel");

// Create Report
const addReport = async (req, res) => {
  try {
    const createdReport = await reportModel.create(req.body);
    res.status(201).json({
      message: "Report generated successfully",
      data: createdReport,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error generating report",
      error: err,
    });
  }
};

// Get All Reports
const getAllReports = async (req, res) => {
  try {
    const reports = await reportModel.find().populate("userId");
    res.status(200).json({
      message: "Reports fetched successfully",
      data: reports,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching reports",
      error: err,
    });
  }
};

//Get report by userid
const getReportByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const reports = await reportModel.find({ userId }).populate("userId");
    
    res.status(200).json({
      message: "Reports fetched successfully",
      data: reports,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching reports",
      error: err,
    });
  }
};


// Get Report by ID
const getReportById = async (req, res) => {
  try {
    const report = await reportModel.findById(req.params.id).populate("userId");
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json({
      message: "Report fetched successfully",
      data: report,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching report",
      error: err,
    });
  }
};

// Update Report
const updateReport = async (req, res) => {
  try {
    const updatedReport = await reportModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json({
      message: "Report updated successfully",
      data: updatedReport,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating report",
      error: err,
    });
  }
};

// Delete Report
const deleteReport = async (req, res) => {
  try {
    const deletedReport = await reportModel.findByIdAndDelete(req.params.id);
    if (!deletedReport) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json({
      message: "Report deleted successfully",
      data: deletedReport,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting report",
      error: err,
    });
  }
};

// Exports
module.exports = {
  addReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
  getReportByUserId,
};
