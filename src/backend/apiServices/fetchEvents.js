const axios = require("axios");
const { Event } = require("../models/events");

const fetchEvents = async () => {
  try {
    const response = await axios.get(
      "https://app.ticketmaster.com/discovery/v2/events.json",
      {
        params: {
          keyword: "concert music",
          countryCode: "US",
          // page: "0",
          // size: "20",
          apikey: process.env.REACT_APP_API_KEY,
        },
      }
    );

    const events = response.data._embedded?.events;
    if (events) {
      const eventsToSave = events.map((event) => ({
        title: event.name,
        description: event.info || "No description available",
        eventDate: new Date(event.dates.start.dateTime),
        organizer: event.promoter?.name || "Unknown organizer",
        image: event.images[2].url,
      }));

      for (const event of eventsToSave) {
        const existingEvent = await Event.findOne({
          title: event.title,
          eventDate: event.eventDate,
        });

        if (!existingEvent) {
          await Event.create(event);
        }
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
