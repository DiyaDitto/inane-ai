const mongoose =
  require("mongoose");

const currentAffairSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      category: {
        type: String,
        required: true,
      },

      date: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "CurrentAffair",
    currentAffairSchema
  );