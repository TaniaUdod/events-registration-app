import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getAllParticipants } from "../../services/fetchParticipant";
import {
  Button,
  Container,
  Input,
  ItemName,
  Message,
  ParticipantsItem,
  ParticipantsList,
  ParticipantsTitle,
  TitleAccent,
} from "./Participants.styled";

const Participants = () => {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/events");

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const data = await getAllParticipants(id);
        setParticipants(data.participants);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    fetchParticipants();
  }, [id]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredParticipants = participants.filter((participant) => {
    return (
      participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Container>
      <Link to={backLink.current}>
        <Button type="button">Go back</Button>
      </Link>

      <Input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {filteredParticipants.length > 0 ? (
        <>
          <ParticipantsTitle>
            <TitleAccent>
              {participants.length > 0 && participants[0].owner.title}
            </TitleAccent>{" "}
            participants
          </ParticipantsTitle>
          <ParticipantsList>
            {filteredParticipants.map((participant) => (
              <ParticipantsItem key={participant._id}>
                <ItemName>{participant.name}</ItemName>
                <p>{participant.email}</p>
              </ParticipantsItem>
            ))}
          </ParticipantsList>
        </>
      ) : (
        <Message>No participants found.</Message>
      )}
    </Container>
  );
};

export default Participants;
