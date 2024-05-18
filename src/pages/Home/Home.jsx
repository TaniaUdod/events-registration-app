import React from "react";
import { Link } from "react-router-dom";
import home from "../../images/home.jpg";
import {
  Button,
  Container,
  HeroWrap,
  Img,
  Text,
  Title,
  TitleWrap,
} from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <HeroWrap>
        <TitleWrap>
          <Title>Event Management Platform</Title>
          <Text>
            Simple, modern and affordable online event management platform with
            online event registration
          </Text>
          <Link to="/events">
            <Button type="button">Join event</Button>
          </Link>
        </TitleWrap>
        <Img src={home} alt="big party" width="600px" height="400px" />
      </HeroWrap>
    </Container>
  );
};

export default Home;
