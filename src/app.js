import authRoutes from "./routes/auth.routes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getSubscriptions } from "./services/subscriptions.service.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("GuardrailSafe API is running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/subscriptions", (req, res) => {
  res.json({
    status: "ok",
    plans: getSubscriptions()
  });
});

export default app;