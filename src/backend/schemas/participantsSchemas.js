const Joi = require("joi");

const createParticipantSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().required(),
  source: Joi.string().required(),
});

module.exports = { createParticipantSchema };
