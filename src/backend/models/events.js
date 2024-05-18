const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    image: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Event = model("event", eventSchema);

module.exports = { Event };
