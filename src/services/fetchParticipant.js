import axios from "axios";

export const getAllParticipants = async (eventId, limit = 20) => {
  const response = await axios.get(`/participants`, {
    params: { id: eventId, limit },
  });
  return response.data;
};

export const getEventById = async (id) => {
  const response = await axios.get(`/participants/${id}`);
  return response.data;
};

export const createParticipant = async (participantData, eventId) => {
  const response = await axios.post(`/participants`, participantData, {
    params: { id: eventId },
  });
  return response.data;
};
