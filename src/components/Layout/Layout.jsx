import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
        </nav>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
