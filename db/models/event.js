const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    organizer: {
      type: String,
    },
    // },
    // name: {
    //   type: String,
    //   required: true,
    // },
    // email: { String },
    // image: { type: String },
    // numOfSeats: {
    //   type: Number,
    //   default: 50,
    // },
    // bookedSeats: { type: Number },
    // startDate: { type: Number },
    // endDate: {
    //   type: Number,
    // },
  }
  //   {
  //     timestamps: true,
  //   }
);

module.exports = mongoose.model("Event", EventSchema);
