import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Participants = lazy(() => import("./pages/Participants/Participants"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/participants" element={<Registration />} />
        <Route path="/participants/:id" element={<Participants />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
