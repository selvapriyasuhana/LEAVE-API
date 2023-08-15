var mongoose = require("mongoose");

var Schema = mongoose.Schema({
  Name: {
    required: true,
    type: String,
  },
  Leavetype: {
    required: true,
    type: String,
  },

  StartDate: {
    type: Date,
  },
  EndDate: {
    required: true,
    type: Date,
  },
  Reason: {
    type: String,
    required: true,
  },
  Command: {
    type: String,
    required: true,
  },
  Status: {
    type: [
      {
        required: true,
        type: String,
        enum: ["pending", "accepted", "rejected"],
      },
    ],
    default: ["pending"],
  },
  id: {
    required: true,
    type: String,
  },
});

Schema.path("id").validate(async (id) => {
  const idCount = await mongoose.models.list2.countDocuments({
    id,
  });
  return !idCount;
}, "Leave details exists");

// Schema.path('mobile').validate(async (mobile) =>{
//   const mobileCount = await mongoose.models.list.countDocuments({ mobile })
//   return !mobileCount
// },'Mobile already exists');

var staff_Leaverequest = (module.exports = mongoose.model("list2", Schema));
module.exports.get = function (callback, limit) {
  staff_Leaverequest.find(callback).limit(limit);
};
