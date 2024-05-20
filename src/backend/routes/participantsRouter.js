const express = require("express");
const {
  getAllParticipants,
  createParticipant,
  // getOneParticipant,
} = require("../controllers/participantsController");
const { validateBody } = require("../helpers/validateBody");
const { createParticipantSchema } = require("../schemas/participantsSchemas");

const participantsRouter = express.Router();

participantsRouter.get("/", getAllParticipants);

// participantsRouter.get("/:id", getOneParticipant);

participantsRouter.post(
  "/registration/:id",
  validateBody(createParticipantSchema),
  createParticipant
);

module.exports = participantsRouter;
