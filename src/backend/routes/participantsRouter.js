const express = require("express");
const {
  getAllParticipants,
  createParticipant,
} = require("../controllers/participantsController");
const { validateBody } = require("../helpers/validateBody");
const { createParticipantSchema } = require("../schemas/participantsSchemas");

const participantsRouter = express.Router();

participantsRouter.get("/", getAllParticipants);

participantsRouter.post(
  "/registration/:id",
  validateBody(createParticipantSchema),
  createParticipant
);

module.exports = participantsRouter;
