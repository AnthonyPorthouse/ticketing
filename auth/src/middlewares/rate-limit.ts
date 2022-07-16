import RateLimit from "express-rate-limit";

export const rateLimit = RateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
});
