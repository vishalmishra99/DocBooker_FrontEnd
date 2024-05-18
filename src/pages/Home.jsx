import React, { useState } from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';

const Home = () => {
  return (
    <>
        <Hero title={"Welcome to DocBooker Your Trusted Healthcare provider"} imageUrl={"./hero.png"} />
        <Biography imageUrl={"./about1.png"}/>
        <Departments/>
        <MessageForm/>
    </>
  );
};

export default Home