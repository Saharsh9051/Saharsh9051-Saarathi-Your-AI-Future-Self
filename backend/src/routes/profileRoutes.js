import express from "express";
import { auth } from "../middlewares/auth.js";
import { upload } from "../utils/upload.js";
import { getMe, updateMe, uploadAvatar } from "../controllers/profileController.js";

const router = express.Router();

router.get("/me", auth, getMe);
router.put("/me", auth, updateMe);
router.post("/avatar", auth, upload.single("avatar"), uploadAvatar);

export default router;
