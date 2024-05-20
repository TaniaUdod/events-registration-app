import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEventData } from "../../services/fetchEventData";
import toast from "react-hot-toast";
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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    setIsLoading(true);
    const eventData = await fetchEventData(page);
    if (eventData.length === 0) {
      setHasMore(false);
      toast.error("You've reached the end of the event list");
    } else {
      setEvents((prevEvents) => {
        const newEvents = eventData.filter(
          (newEvent) => !prevEvents.some((event) => event._id === newEvent._id)
        );
        return [...prevEvents, ...newEvents];
      });
      setPage((prevPage) => prevPage + 1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading ||
        !hasMore
      ) {
        return;
      }
      fetchMoreData();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

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
              <Link to={`/participants/registration/${event._id}`}>
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
