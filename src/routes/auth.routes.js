import express from "express";
import { registerUser, loginUser } from "../services/auth.service.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = await registerUser({ email, password });
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await loginUser({ email, password });
  res.json(user);
});

export default router;