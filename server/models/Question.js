const mongoose = require("mongoose");

const questionSchema =
  new mongoose.Schema(
    {
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

      subject: {
        type: String,
        required: true,
      },

      difficulty: {
        type: String,
        default: "Easy",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Question",
    questionSchema
  );