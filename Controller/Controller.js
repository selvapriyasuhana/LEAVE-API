Service = require("../Service/Service.js");

exports.index = function (err, staff) {
  Service.Service_index(err, staff);
  if (err) return console.error(err);
};

exports.add = function (err, staff) {
  Service.Service_add(err, staff);
  if (err) return console.error(err);
};

exports.view = function (err, staff) {
  Service.Service_view(err, staff);
  if (err) console.error(err);
};

exports.update = function (err, staff) {
  Service.Service_update(err, staff);
  if (err) console.error(err);
};
exports.Delete = function (err, staff) {
  Service.Service_Delete(err, staff);
  if (err) console.error(err);
};
