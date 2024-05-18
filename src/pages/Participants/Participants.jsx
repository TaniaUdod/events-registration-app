import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getAllParticipants } from "../../services/fetchParticipant";

const Participants = () => {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);

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

  return (
    <div>
      <Link to={backLink.current}>
        <button type="button">Go back</button>
      </Link>

      {participants.length > 0 ? (
        <>
          <h2>
            {participants.length > 0 && participants[0].owner.title}{" "}
            participants
          </h2>
          <ul>
            {participants.map((participant) => (
              <li key={participant._id}>
                <p>{participant.name}</p>
                <p>{participant.email}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No participants found.</p>
      )}
    </div>
  );
};

export default Participants;
