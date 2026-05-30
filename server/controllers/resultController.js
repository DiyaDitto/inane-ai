const TestResult =
  require("../models/TestResult");

exports.saveResult =
  async (req, res) => {
    try {

      const {
        score,
        totalQuestions,
        accuracy,
      } = req.body;

      const result =
        await TestResult.create({
          userId:
            req.user.id,
          score,
          totalQuestions,
          accuracy,
        });

      res.status(201).json({
        success: true,
        result,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };

exports.getMyResults =
  async (req, res) => {
    try {

      const results =
        await TestResult.find({
          userId:
            req.user.id,
        }).sort({
          createdAt: -1,
        });

      res.json(results);

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
  };