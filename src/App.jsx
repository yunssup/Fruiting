import React from "react";
import { Route, Routes } from "react-router-dom";

import Fruiting from "./pages/Fruitung/Fruiting";
import Team from "./pages/team/Team";
import Project from "./pages/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Review1 from "./pages/Project/Review1";
import Review2 from "./pages/Project/Review2";
import Review3 from "./pages/Project/Review3";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./GlobalStyle";
import "./index.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Navbar />
      <Routes>
        <Route path="/" element={<Team />} />
        <Route path="/Fruiting" element={<Fruiting />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Review1" element={<Review1 />} />
        <Route path="/Review2" element={<Review2 />} />
        <Route path="/Review3" element={<Review3 />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
