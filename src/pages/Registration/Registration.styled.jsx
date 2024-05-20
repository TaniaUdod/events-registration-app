import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
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

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  line-height: 22px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 16px 18px;
  line-height: 22px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  width: 100%;
  max-width: 438px;
`;

export const Error = styled.p`
  font-size: 12px;
  color: #80c2c7;
`;

export const TextForm = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 20px;
`;

export const RadioList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
`;

export const RadioItem = styled.li`
  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 22px;
    cursor: pointer;
  }
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
  margin-bottom: 32px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #91dde2;
  }
`;
