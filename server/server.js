const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const questionRoutes = require("./routes/questionRoutes");
const resultRoutes = require("./routes/resultRoutes");
const pyqRoutes = require("./routes/pyqRoutes");
const currentAffairRoutes = require(
  "./routes/currentAffairRoutes"
);

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use(
  "/api/auth",
  authRoutes
);

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

app.use(
  "/api/pyqs",
  pyqRoutes
);

app.use(
  "/api/current-affairs",
  currentAffairRoutes
);

// Test Route
app.get("/", (req, res) => {
  res.send(
    "🚀 Inane AI Backend Running"
  );
});

// Start Server
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});