import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEventData } from "../../services/fetchEventData";
import Loader from "../../components/Loader/Loader";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const eventData = await fetchEventData();
      setEvents(eventData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      <h1>Featured Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <img src={event.image} alt="Event poster" width={300} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.eventDate).toLocaleDateString()}</p>
            <p>Organizer: {event.organizer}</p>

            <Link to="/registration">
              <button type="button">Register</button>
            </Link>

            <Link to={`/participants/${event._id}`}>
              <button type="button">View</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
