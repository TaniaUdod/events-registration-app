import axios from "axios";

export const fetchEventData = async () => {
  try {
    const response = await axios.get("/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
