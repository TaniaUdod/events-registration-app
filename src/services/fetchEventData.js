import axios from "axios";

const fetchEventData = async () => {
  try {
    const response = await axios.get("/events");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export default fetchEventData;
