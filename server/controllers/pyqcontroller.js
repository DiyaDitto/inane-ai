const PYQ =
  require("../models/PYQ");

exports.getPYQs =
  async (req, res) => {

    try {

      const filter = {};

      if (req.query.exam) {
        filter.exam =
          req.query.exam;
      }

      if (req.query.year) {
        filter.year =
          Number(
            req.query.year
          );
      }

      const pyqs =
        await PYQ.find(
          filter
        );

      res.json(pyqs);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };

exports.createPYQ =
  async (req, res) => {

    try {

      const pyq =
        await PYQ.create(
          req.body
        );

      res.status(201).json(
        pyq
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };

exports.updatePYQ =
  async (req, res) => {

    try {

      const pyq =
        await PYQ.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      if (!pyq) {

        return res.status(404).json({
          message:
            "PYQ not found",
        });

      }

      res.json(pyq);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };

exports.deletePYQ =
  async (req, res) => {

    try {

      const pyq =
        await PYQ.findByIdAndDelete(
          req.params.id
        );

      if (!pyq) {

        return res.status(404).json({
          message:
            "PYQ not found",
        });

      }

      res.json({
        message:
          "PYQ deleted successfully",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };