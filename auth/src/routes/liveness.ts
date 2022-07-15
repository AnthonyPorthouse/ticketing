import express from "express";
import Bugsnag from "@bugsnag/js";

const router = express.Router();

router.get("/healthz", async (req, res) => {
  Bugsnag.pauseSession()
  res.sendStatus(200);
});

export { router as livenessRouter };
