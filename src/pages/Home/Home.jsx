import React from "react";
import { Link } from "react-router-dom";
import home from "../../images/home.jpg";

const Home = () => {
  return (
    <div>
      <h1>Event Management Platform</h1>
      <p>
        Simple, modern and affordable online event management platform with
        online event registration
      </p>
      <Link to="/events">
        <button type="button">Join event</button>
      </Link>

      <img src={home} alt="big party" width="600px" height="400px" />
    </div>
  );
};

export default Home;
