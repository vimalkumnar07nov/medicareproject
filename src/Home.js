import React from "react";
import Clinic from "./components/Clinic";
import Doctors from "./components/Doctors";
import Card from "./components/FetchApi/Card";
import HeroSection from "./components/HeroSection";
import Subscribe from "./components/Subscribe";
import Services from "./Services";

const Home = () => {
  const data = {
    name: "Best Specialists",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Clinic/>
      <Doctors/>
      <Card />
      <Subscribe />
      
      
    </>
  );
};

export default Home;
