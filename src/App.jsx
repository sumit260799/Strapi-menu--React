import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

function App() {
  return (
    <menu>
      <Navbar />
      <Submenu />
      <Hero />
      <Sidebar />
    </menu>
  );
}

export default App;
