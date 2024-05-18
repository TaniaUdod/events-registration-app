const { Schema, model } = require("mongoose");

const participantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "event",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Participant = model("participant", participantSchema);

module.exports = { Participant };
