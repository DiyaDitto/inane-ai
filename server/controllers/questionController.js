const Question =
  require("../models/Question");

exports.getQuestions =
  async (req, res) => {

    try {

      const filter = {};

      if (req.query.subject) {
        filter.subject =
          req.query.subject;
      }

      const questions =
        await Question.find(
          filter
        );

      res.json(
        questions
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };
exports.createQuestion =
  async (req, res) => {
    try {

      const question =
        await Question.create(
          req.body
        );

      res.status(201).json(
        question
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };
  exports.updateQuestion = async (req, res) => {
  try {

    const question =
      await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.json(question);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

exports.deleteQuestion = async (req, res) => {
  try {

    const question =
      await Question.findByIdAndDelete(
        req.params.id
      );

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.json({
      message:
        "Question deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
exports.bulkUploadQuestions =
  async (req, res) => {

    try {

      const questions =
        req.body;

      const inserted =
        await Question.insertMany(
          questions
        );

      res.status(201).json({
        success: true,
        count:
          inserted.length,
        message:
          "Questions uploaded successfully",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };