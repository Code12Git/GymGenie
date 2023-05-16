import express from "express";
const router = express.Router();

import {
  getWorkoutPlans,
  getWorkoutPlan,
  addWorkoutPlan,
} from "../controllers/WorkoutController.js";

// Get all workout plans
router.get("/", getWorkoutPlans);

// Get a specific workout plan
router.get("/:id", getWorkoutPlan);

// Add a workout plan to a user's profile
router.post("/:id", addWorkoutPlan);

export default router;
