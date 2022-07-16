import express from "express";
import jwt from "jsonwebtoken";
import { currentUser } from "../middlewares/current-user";
import { rateLimit } from "../middlewares/rate-limit";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  rateLimit,
  currentUser,
  async (req, res) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
