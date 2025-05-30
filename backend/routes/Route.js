import express from "express";
import { getAllPlaces, getPlacesByCategory } from "../controllers/PlaceController.js";

const router = express.Router();

// User Routes
router.get("/get-all-places", getAllPlaces);
router.get("/get-places-by-category", getPlacesByCategory);
// router.post("/update-profile", verifyToken, upload.single("picture"), updateProfilePicture);
// router.post("/register", Register);
// router.post("/login", Login);
// router.delete("/logout", logout);

router.all("\\*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default router;
