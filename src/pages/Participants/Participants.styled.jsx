import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1342px;
  margin: 0 auto;
  padding: 0px 15px;
`;

export const Input = styled.input`
  display: flex;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  width: 100%;
  max-width: 190px;
  margin: 20px 0;
  transition: border-color 150ms linear;

  &:hover {
    border-color: #84c7cc;
  }
`;

export const ParticipantsTitle = styled.p`
  font-size: 20px;
  letter-spacing: -0.96px;
  margin-bottom: 14px;
  margin-top: 14px;
  text-align: center;
`;

export const TitleAccent = styled.span`
  font-weight: bold;
`;

export const ParticipantsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
`;

export const ParticipantsItem = styled.li`
  padding: 14px;
  width: 300px;
  border-radius: 15px;
  background-color: #e9eeee;
`;

export const ItemName = styled.p`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.96px;
  margin-bottom: 14px;
`;

export const Message = styled.h4`
  margin-top: 24px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 120px;
  height: 40px;
  border-radius: 12px;
  background-color: #80c2c7;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #91dde2;
  }
`;
