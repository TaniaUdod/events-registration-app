import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <div>
      <h1>Events Registration App</h1>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
