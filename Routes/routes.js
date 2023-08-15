let router = require("express").Router();
const staff_Leaverequest = require("../Model/models");

router.get("/api/Leaverequest", function (req, res) {
  res.json({
    status: "API Works",
    message: "Welcome to Staff leaveRequest API",
  });
});

const idCount = require("../Model/models");

router.post("/register", async (req, res) => {
  try {
    const staff = new staff_Leaverequest({
      Name: req.body.Name,
      Leavetype: req.body.Leavetype,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      Reason: req.body.Reason,
      Command: req.body.Command,
      Status: req.body.Status,
      id: req.body.id,
    });

    await staff.save();

    return res.json({
      message: "New staff leaverequest",
      data: {
        Name: req.body.Name,
        Leavetype: req.body.Leavetype,
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        Reason: req.body.Reason,
        Command: req.body.Command,
        Status: req.body.Status,
        id: req.body.id,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});

var Controller = require("../Controller/Controller.js");
router.route("/staff").get(Controller.index);

router
  .route("/staff/:id")
  .get(Controller.view)
  .put(Controller.update)
  .delete(Controller.Delete);

module.exports = router;
