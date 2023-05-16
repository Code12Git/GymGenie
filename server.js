import connection from "./db/conn.js";
import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.js";
import workoutroute from "./routes/workout.js";
const app = express();

const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use("/api/auth", authRoute);
app.use("/api/workout", workoutroute);

//database
connection();

//Routes
app.get("/", (req, res) => {
  res.send("Helllllll.....");
});

//Listening

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
