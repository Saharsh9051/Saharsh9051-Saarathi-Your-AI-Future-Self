
import User from "../models/User.js";


export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};


export const updateMe = async (req, res) => {
  try {
    const { name, bio, email,phone,location,careerGoal } = req.body;

    const update = {};
    if (name) update.name = name;
    if (bio) update.bio = bio;
    if (email) update.email = email; 
    if (phone) update.phone = phone;
    if (location) update.location = location;
    if (careerGoal) update.careerGoal = careerGoal;

    const user = await User.findByIdAndUpdate(req.user.id, update, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "Profile updated successfully", user });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ success: false, message: "Email already in use" });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};


export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    
    if (!req.file.mimetype.startsWith("image/")) {
      return res.status(400).json({ success: false, message: "Invalid file type, only images allowed" });
    }

    
    if (req.file.size > 2 * 1024 * 1024) {
      return res.status(400).json({ success: false, message: "File too large, max 2MB allowed" });
    }

    
    const avatarPath = `/${req.file.path}`.replace(/\\/g, "/");

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: avatarPath },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      message: "profile updated successfully",
      avatar: user.avatar,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};
