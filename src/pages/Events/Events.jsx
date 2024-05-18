import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEventData } from "../../services/fetchEventData";
import Loader from "../../components/Loader/Loader";
import {
  Button,
  ButtonWrap,
  Container,
  EventsDate,
  EventsItem,
  EventsList,
  EventsText,
  EventsTitle,
  Img,
  Title,
} from "./Events.styled";

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
    <Container>
      {isLoading && <Loader />}
      <Title>Featured Events</Title>
      <EventsList>
        {events.map((event) => (
          <EventsItem key={event._id}>
            <Img
              src={event.image}
              alt="Event poster"
              width={250}
              height={160}
            />
            <EventsTitle>{event.title}</EventsTitle>
            <EventsText>{event.description}</EventsText>
            <EventsDate>
              {new Date(event.eventDate).toLocaleDateString()}
            </EventsDate>
            <p>Organizer: {event.organizer}</p>

            <ButtonWrap>
              <Link to="/registration">
                <Button type="button">Register</Button>
              </Link>

              <Link to={`/participants/${event._id}`}>
                <Button type="button">View</Button>
              </Link>
            </ButtonWrap>
          </EventsItem>
        ))}
      </EventsList>
    </Container>
  );
};

export default Events;
