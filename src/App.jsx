import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../public/pages/contact/Contact";
import Navbar from "../public/components/navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
