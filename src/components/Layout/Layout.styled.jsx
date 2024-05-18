import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    margin: 0 auto;
    max-width: 1184px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  font-size: 18px;
`;

export const LinkStyled = styled(NavLink)`
  line-height: 20px;
  transition: transform 150ms linear, color 150ms linear;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    color: #80c2c7;
  }
`;
