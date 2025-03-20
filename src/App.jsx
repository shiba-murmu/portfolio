import React from "react";
import Profile from "./profile/Profile";
import Header from "./component/Header";
import "./App.css";
import About from "./About/About";
import Contact from "./Contact/Contact";
export default function App() {
  return (
    <>
      {/* Personal - portfolio */}
      {/* Profile section.... */}
      <div className="back">
        <Header />
        <Profile />
        <About />
        <Contact />
      </div>
      {/* Design profile page such images and other  */}
    </>
  );
}


