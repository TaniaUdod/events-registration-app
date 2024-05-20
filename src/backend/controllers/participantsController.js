const { Participant } = require("../models/participants");
const { Event } = require("../models/events");
const ctrlWrapper = require("../helpers/ctrlWrapper");
const { HttpError } = require("../helpers/HttpError");

const getAllParticipants = async (req, res, next) => {
  const { id } = req.query;
  const { limit = 20 } = req.query;

  const participants = await Participant.find({ owner: id })
    .limit(Number(limit))
    .populate("owner");

  res.status(200).json({ participants });
};

// const getOneParticipant = ctrlWrapper(async (req, res, next) => {
//   const { id } = req.params;
//   const event = await Event.findById(id);
//   if (!event) {
//     throw HttpError(404, "Event not found");
//   }
//   res.json(result);
// });

const createParticipant = async (req, res) => {
  const { id } = req.params;
  const { name, email, dateOfBirth, source } = req.body;

  const event = await Event.findById(id);
  if (!event) {
    throw HttpError(404, "Event not found");
  }

  const participant = new Participant({
    name,
    email,
    dateOfBirth,
    source,
    owner: id,
  });

  await participant.save();

  event.participants.push(participant._id);
  await event.save();

  res.status(201).json(participant);
};

module.exports = {
  getAllParticipants: ctrlWrapper(getAllParticipants),
  // getOneParticipant: ctrlWrapper(getOneParticipant),
  createParticipant: ctrlWrapper(createParticipant),
};
