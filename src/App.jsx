import React from "react";
import { Route, Routes } from "react-router-dom";
import Fruiting from "./pages/Fruitung/Fruiting";
import Team from "./pages/team/Team";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Fruiting />} />
        <Route path="/Fruiting" element={<Fruiting />} />
      </Routes>
    </div>
  );
}
export default App;
