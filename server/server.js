const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const userRoutes =
  require(
    "./routes/userRoutes"
  );
  const questionRoutes =
  require("./routes/questionRoutes");
const resultRoutes =
  require(
    "./routes/resultRoutes"
  );
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(
  "/api/users",
  userRoutes
);
app.use(
  "/api/questions",
  questionRoutes
);
app.use(
  "/api/results",
  resultRoutes
);
app.get("/", (req, res) => {
  res.send("Inane AI Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});