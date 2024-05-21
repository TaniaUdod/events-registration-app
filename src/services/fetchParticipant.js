import axios from "axios";

export const getAllParticipants = async (eventId, limit = 20) => {
  const response = await axios.get(
    `https://events-registration-app-syfh.onrender.com/participants`,
    {
      params: { id: eventId, limit },
    }
  );
  return response.data;
};

export const createParticipant = async (participantData, eventId) => {
  const response = await axios.post(
    `https://events-registration-app-syfh.onrender.com/participants/registration/${eventId}`,
    participantData
  );
  return response.data;
};
