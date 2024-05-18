import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Header, LinkStyled, Nav } from "./Layout.styled";

const Layout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/events">Events</LinkStyled>
        </Nav>
      </Header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
