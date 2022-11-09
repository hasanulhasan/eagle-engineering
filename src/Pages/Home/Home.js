import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero/Hero';
import HomeServices from './Services/HomeServices';
import Services from './Services/HomeServices';
import State from './State/State';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <State></State>
    </div>
  );
};

export default Home;