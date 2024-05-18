const { Event } = require("../models/events");
const ctrlWrapper = require("../helpers/ctrlWrapper");
const fetchEvents = require("../apiServices/fetchEvents");

const getEvents = async (req, res, next) => {
  await fetchEvents();

  const events = await Event.find({});
  res.status(200).json(events);
};

module.exports = { getEvents: ctrlWrapper(getEvents) };
