import Report from "../models/Report.js";

export const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserReports = async (req, res) => {
  try {
    const { userId } = req.params;
    const reports = await Report.find({ userId });
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("userId", "name email");
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateReportStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, rejectionReason } = req.body;

    const updated = await Report.findByIdAndUpdate(
      id,
      { status, rejectionReason },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
