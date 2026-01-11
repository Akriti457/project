import express from "express";
import multer from "multer";
import { uploadNovel } from "../controllers/uploadController.js";

const router = express.Router();
const upload = multer();

router.post("/upload", upload.single("file"), uploadNovel);

export default router;
