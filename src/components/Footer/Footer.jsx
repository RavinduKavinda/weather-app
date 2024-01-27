import React from 'react';
import './footer.css';
import openWeather from './../../assets/images/openweather.png';

const Footer = () => {
  return (
    <footer>
      <p className="body-3">
        Copyright 2024 REACT, All Rights Reserved.
      </p>

      <p className="body-3">
        Powered By <a href="https://openweathermap.org/api" target='_blank' rel='noopener'>
          <img src={openWeather} alt="Open Weather" loading='lazy' />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
