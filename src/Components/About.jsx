import React from 'react';
import PikachuImage from '../images/pikachu.png'; // Replace with the actual path

const About = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <img src={PikachuImage} alt="Pikachu" style={{ width: '200px', borderRadius: '50%' }} />
      <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
        Welcome to the Pokemon World! This is a simple web application that allows you to explore information about various Pokemon.
        Catch 'em all and discover their unique characteristics, abilities, and stats.
        Enjoy your journey through the fascinating world of Pokemon!
      </p>
    </div>
  );
};

export default About;