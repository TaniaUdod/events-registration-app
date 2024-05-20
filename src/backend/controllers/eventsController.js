const { Event } = require("../models/events");
const ctrlWrapper = require("../helpers/ctrlWrapper");
const fetchEvents = require("../apiServices/fetchEvents");

const getEvents = async (req, res, next) => {
  const { page = 1 } = req.query;
  await fetchEvents(page);

  const events = await Event.find({})
    .skip((page - 1) * 20)
    .limit(20);

  res.status(200).json(events);
};

module.exports = { getEvents: ctrlWrapper(getEvents) };
