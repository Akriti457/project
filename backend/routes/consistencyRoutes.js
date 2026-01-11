import express from "express";
import { checkConsistency } from "../controllers/consistencyController.js";

const router = express.Router();

router.post("/check-consistency", checkConsistency);

export default router;
