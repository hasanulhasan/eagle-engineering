import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import State from './State/State';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <Services></Services>
      <State></State>
    </div>
  );
};

export default Home;