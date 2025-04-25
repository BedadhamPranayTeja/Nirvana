import express from "express";
import {
  createReport,
  getUserReports,
  getAllReports,
  updateReportStatus,
} from "../controllers/report.controller.js";

const router = express.Router();

router.post("/", createReport);
router.get("/user/:userId", getUserReports);
router.get("/", getAllReports); // Admin view
router.patch("/:id/status", updateReportStatus); // Approve/Reject

export default router;
