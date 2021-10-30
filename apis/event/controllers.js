const Event = require("../../db/models/event");

exports.eventCreate = async (req, res) => {
  console.log("create");
  try {
    const newevent = await Event.create(req.body);
    return res.json(newevent);
  } catch (error) {
    res.status(404).json({ message: "can u see me" });
  }
};

exports.eventListFetch = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.eventUpdate = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findByIdAndUpdate({ _id: eventId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (event) {
      return res.status(200).json(event);
    } else {
      return res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.eventDelete = async (req, res) => {
  const { eventId } = req.params;
  try {
    const Event = await Event.findByIdAndDelete({ _id: eventId });
    if (Event) {
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.eventListFetch = async (req, res) => {
  try {
    Event.find({ $expr: { $eq: ["$numOfSeats", "$bookedSeats"] } });
    return res.json(Event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
