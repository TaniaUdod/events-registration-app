import axios from "axios";

export const fetchEventData = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://events-registration-app-syfh.onrender.com/events?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
