import express from "express";
import { saveBackstory } from "../controllers/backstoryController.js";

const router = express.Router();

router.post("/backstory", saveBackstory);

export default router;
