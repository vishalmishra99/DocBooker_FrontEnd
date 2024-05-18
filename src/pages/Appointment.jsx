import React from 'react';
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";

//Schedule Your Appointment | DocBooker  
const Appointment = () => {
  return (
    <>
      <Hero 
        title={"Schedule Your Appointment at | DocBooker"} 
        imageUrl={"/signin1.png"}/>
      <AppointmentForm />
    </>
  );
};

export default Appointment;