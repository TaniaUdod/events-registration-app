import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1342px;
  margin: 0 auto;
  padding: 0px 15px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96px;
  margin-bottom: 28px;
`;

export const EventsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const EventsItem = styled.li`
  padding: 14px;
  width: 300px;
  border-radius: 15px;
  background-color: #e9eeee;
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 250px;
  height: 150px;
`;

export const EventsTitle = styled.h3`
  font-size: 20px;
  letter-spacing: -0.96px;
  margin-bottom: 14px;
  margin-top: 14px;
  text-align: center;
`;

export const EventsText = styled.p`
  font-size: 12px;
  text-align: justify;
`;

export const EventsDate = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 12px;
  color: #65979b;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  transition: transform 150ms linear, color 150ms linear;

  &:hover {
    transform: scale(1.1);
    color: #84c7cc;
  }
`;
