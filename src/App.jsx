import React from "react";
import Navbar from "./scenes/Navbar";
import Hero from "./scenes/Hero";
import Countries from "./scenes/Countries";
import Destination from "./scenes/Destination";
import Customers from "./scenes/Customers";
import Footer from "./scenes/Footer";
import Contact from "./scenes/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Countries />
      <Destination />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
