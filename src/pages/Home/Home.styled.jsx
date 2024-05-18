import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1342px;
  margin: 0 auto;
  padding: 0px 15px;
`;

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const TitleWrap = styled.div`
  max-width: 720px;
  border-radius: 30px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96px;
  margin-bottom: 32px;
`;

export const Text = styled.p`
  line-height: 22px;
  letter-spacing: -0.32px;
  max-width: 471px;
  margin-bottom: 64px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 267px;
  height: 60px;
  border-radius: 12px;
  background-color: #80c2c7;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #91dde2;
  }
`;

export const Img = styled.img`
  margin: 0 auto;
`;
