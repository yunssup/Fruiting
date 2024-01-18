import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../public/pages/contact/Contact";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
