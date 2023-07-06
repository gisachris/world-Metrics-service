import React from 'react';
import earthfull from '../assets/images/fullearth.jpg';
import Continents from './continents';
import '../styles/home.css';

const HomePage = () => (
  <section className="homepageHolder">
    <div className="homepageImage">
      <span className="gradientLayer" />
      <img src={earthfull} alt="display of the continents" className="earthfull" />
    </div>
    <div className="restHome">
      <span className="homeRestHeader">STATS BY CONTINENT...</span>
      <Continents />
    </div>
  </section>
);

export default HomePage;
