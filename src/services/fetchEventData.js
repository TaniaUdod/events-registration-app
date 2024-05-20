import axios from "axios";

export const fetchEventData = async (page = 1) => {
  try {
    const response = await axios.get(`/events?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
