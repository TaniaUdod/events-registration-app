import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Events = lazy(() => import("./pages/Events/Events"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Participants = lazy(() => import("./pages/Participants/Participants"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route
          path="participants/registration/:id"
          element={<Registration />}
        />
        <Route path="participants/:id" element={<Participants />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
