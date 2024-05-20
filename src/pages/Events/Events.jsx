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
  SortWrap,
  Title,
} from "./Events.styled";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [sortBy, setSortBy] = useState("");

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

  const sortEvents = (sortByParam) => {
    let sortedEvents = [...events];
    switch (sortByParam) {
      case "title":
        sortedEvents.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "eventDate":
        sortedEvents.sort(
          (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
        );
        break;
      case "organizer":
        sortedEvents.sort((a, b) => a.organizer.localeCompare(b.organizer));
        break;
      default:
        break;
    }
    setEvents(sortedEvents);
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <Title>Featured Events</Title>

      <SortWrap>
        <label>Sort events by: </label>
        <select
          value={sortBy}
          onChange={(event) => {
            setSortBy(event.target.value);
            sortEvents(event.target.value);
          }}
        >
          <option value=""></option>
          <option value="title">Title</option>
          <option value="eventDate">Event date</option>
          <option value="organizer">Organizer</option>
        </select>
      </SortWrap>

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
