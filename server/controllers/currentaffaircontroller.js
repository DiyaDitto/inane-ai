const CurrentAffair =
  require(
    "../models/CurrentAffair"
  );

exports.getCurrentAffairs =
  async (req, res) => {

    try {

      const filter = {};

      if (req.query.category) {
        filter.category =
          req.query.category;
      }

      const affairs =
        await CurrentAffair.find(
          filter
        );

      res.json(affairs);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  };
exports.createCurrentAffair =
  async (req, res) => {
    try {

      const affair =
        await CurrentAffair.create(
          req.body
        );

      res.status(201).json(
        affair
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

exports.updateCurrentAffair =
  async (req, res) => {
    try {

      const affair =
        await CurrentAffair.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.json(affair);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };

exports.deleteCurrentAffair =
  async (req, res) => {
    try {

      await CurrentAffair.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Deleted successfully",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
  };