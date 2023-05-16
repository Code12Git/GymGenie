import Workout from "../models/Workout.js";
import userModel from "../models/User.js";
// Get all workout plans
export const getWorkoutPlans = async (req, res) => {
  try {
    const workoutPlans = await Workout.find();
    res.json(workoutPlans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get a specific workout plan
export const getWorkoutPlan = async (req, res) => {
  try {
    const workoutPlan = await Workout.findById(req.params.id);
    if (!workoutPlan) {
      return res.status(404).json({ msg: "Workout plan not found" });
    }
    res.json(workoutPlan);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Workout plan not found" });
    }
    res.status(500).send("Server Error");
  }
};

// Add a workout plan to a user's profile
export const addWorkoutPlan = async (req, res) => {
  try {
    const workoutPlan = await Workout.findById(req.params.id);
    if (!workoutPlan) {
      return res.status(404).json({ msg: "Workout plan not found" });
    }
    const user = await userModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    user.workoutPlans.push(workoutPlan);
    await user.save();
    res.json(user.workoutPlans);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Workout plan not found" });
    }
    res.status(500).send("Server Error");
  }
};
