//const Cryptr = require("cryptr");
//const { use } = require("../Routes/routes");

const staff_Leaverequest = require("../Model/models.js");

exports.Dao_index = function (req, callback) {
  staff_Leaverequest.get(function (err, staff) {
    if (err)
      callback.json({
        status: "Error",
        message: err,
      });
    callback.json({
      status: "Success",
      message: "Got staff leave accepted Successfully",
      data: staff,
    });
  });
};

exports.Dao_viewall = function (req, callback) {
  staff_Leaverequest.find()({ id: req.params.id }, function (err, staff) {
    if (err) callback.send(err);

    callback.json({
      message: "staff leaverequest Details",
      data: staff,
    });
  });
};

exports.Dao_update = function (req, callback) {
  staff_Leaverequest.find({ id: req.params.id }, function (err, staff) {
    if (err) callback.send(err);

    (staff.Name = req.body.Name),
      (staff.Leavetype = req.body.Leavetype),
      (staff.StartDate = req.body.StartDate),
      (staff.EndDate = req.body.EndDateDate),
      (staff.Reason = req.body.Reason),
      (staff.Command = req.body.Command),
      (staff.Status = req.body.Status),
      (staff.id = req.body.id),
      staff.save(function (err) {
        if (err) callback.json(err);
        callback.json({
          message: "*** staff leave request updated successfully ***",
          data: staff,
        });
      });
  });
};
exports.Dao_Delete = function (req, callback) {
  staff_Leaverequest.deleteOne({ id: req.params.id }, function (err, staff) {
    if (err) callback.send(err);
    callback.json({
      status: "Success",
      message: "*** staff leave request Deleted Successfully ***",
      data: staff,
    });
  });
};
