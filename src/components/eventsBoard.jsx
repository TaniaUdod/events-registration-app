import React, { useState, useEffect } from "react";
import fetchEventData from "../services/fetchEventData";

const EventsBoard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const eventData = await fetchEventData();
      setEvents(eventData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Events Board</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.eventDate).toLocaleDateString()}</p>
            <p>Organizer: {event.organizer}</p>
            <img src={event.image} alt="Event poster" width={300} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsBoard;
