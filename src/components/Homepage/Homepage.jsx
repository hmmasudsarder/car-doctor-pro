import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import Footer from "../Shared/Footer";

const Homepage = () => {
  return (
    <div className="h-screen">
      <Banner />
      <Services/>
      <Footer />
    </div>
  );
};

export default Homepage;
