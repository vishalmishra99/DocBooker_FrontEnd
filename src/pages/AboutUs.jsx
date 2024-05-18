import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero 
        title={"Learn More About Us | DocBooker"}
        imageUrl={"/about1.png"}  
      />
      <Biography imageUrl={"/whoweare1.jpg"}  style={{borderRadius:"5px"}}/>
    </>
  )
}

export default AboutUs;