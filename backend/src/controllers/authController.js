import { signupService, loginService } from "../services/authService.js";

export const signupController = async (req, res) => {
  try {
    const result = await signupService(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const result = await loginService(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};




