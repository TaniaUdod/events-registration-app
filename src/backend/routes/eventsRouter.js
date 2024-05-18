const express = require("express");
const { getEvents } = require("../controllers/eventsController");

const eventsRouter = express.Router();

eventsRouter.get("/", getEvents);

module.exports = eventsRouter;
