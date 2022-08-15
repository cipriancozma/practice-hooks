import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Profile from "./Profile";
import Navbar from "./Navbar";

export const UserContext = createContext();

function MainPage() {
  const [userName, setUserName] = useState("Ciprian");

  return (
    <div>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h2>Page not found...</h2>} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default MainPage;
