const mongoose = require("mongoose");

const pyqSchema = new mongoose.Schema(
  {
    exam: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    question: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },

    explanation: {
      type: String,
      default: "",
    },

    subject: {
      type: String,
      required: true,
    },

    topic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "PYQ",
    pyqSchema
  );