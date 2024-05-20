const axios = require("axios");
const { Event } = require("../models/events");

const fetchEvents = async (page = 1) => {
  try {
    const response = await axios.get(
      "https://app.ticketmaster.com/discovery/v2/events.json",
      {
        params: {
          keyword: "concert music",
          countryCode: "US",
          page: page - 1,
          size: "20",
          apikey: process.env.REACT_APP_API_KEY,
        },
      }
    );

    const events = response.data._embedded?.events;
    if (events) {
      const eventsToSave = events.map((event) => ({
        ticketmasterId: event.id,
        title: event.name,
        description: event.info || "No description available",
        eventDate: new Date(event.dates.start.dateTime),
        organizer: event.promoter?.name || "Unknown organizer",
        image: event.images[2].url,
      }));

      for (const event of eventsToSave) {
        await Event.updateOne({ ticketmasterId: event.ticketmasterId }, event, {
          upsert: true,
        });
      }

      console.log("Events saved successfully");
    } else {
      console.log("No events found");
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

module.exports = fetchEvents;
