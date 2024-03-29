import React, { useEffect } from 'react';
import "./main.css";
import icon from "./../../assets/images/weather_icons/01d.png";
import forecast from "./../../assets/images/weather_icons/01n.png";
import Footer from '../../components/Footer/Footer';

const Main = () => {

  useEffect(() => {
    import('./../../assets/js/app.js').then((script) => {
      script.default(); 
    });
  }, []);

  return (
    <main>
      <article className="container" data-container>
        <div className="content-left">
          {/* Searching Place Weather */}
          <section className="section current-weather" aria-label='current weather' data-current-weather>

            

          </section>

          {/* Searching Place Weather Forecast*/}
          <section className="section forecast" aria-labelledby='forecast-label' data-5days-forecast>

              <h2 className="title-2" id='forecast-label'>
                5 Days Forecast
              </h2>

              <div className="card card-lg forecast-card">
                <ul>
                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img src={forecast} alt="" className="weather-icon" />

                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>

                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img src={forecast} alt="" className="weather-icon" />

                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>

                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img src={forecast} alt="" className="weather-icon" />

                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>

                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img src={forecast} alt="" className="weather-icon" />

                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>

                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img src={forecast} alt="" className="weather-icon" />

                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>
                  
                </ul>
              </div>
          </section>
        </div>

        <div className="content-right">
          <section className="section highlights" aria-labelledby='highlights-label' data-highlights>
            <div className="card card-lg">
              <h2 className="title-2">Todays Highlights</h2>

              <div className="highlight-list">
                <div className="card card-sm highlight-card one">
                  <h3 className="title-3">Air Quality Index</h3>

                  <div className="wrapper">

                    <span className="m-icon">air</span>

                    <ul className="card-list">
                    
                      <li className="card-item">
                        <p className="title-1">23.3</p>

                        <p className="label-1">PM<sub>2.5</sub></p>
                      </li>

                      <li className="card-item">
                        <p className="title-1">23.3</p>

                        <p className="label-1">PM<sub>2.5</sub></p>
                      </li>

                      <li className="card-item">
                        <p className="title-1">23.3</p>

                        <p className="label-1">PM<sub>2.5</sub></p>
                      </li>

                      <li className="card-item">
                        <p className="title-1">23.3</p>

                        <p className="label-1">PM<sub>2.5</sub></p>
                      </li>

                    </ul>

                  </div>

                  <span className="badge aqi-1 label-1" title="aqi message">
                    Good
                  </span>

                </div>

                <div className="card card-sm highlight-card two">
                  <h3 className="title-3">
                    Sunrise & Sunset
                  </h3>

                  <div className="card-list">

                    <div className="card-item">
                      <span className="m-icon">
                        clear_day
                      </span>
                      <div>
                        <p className="label-1">Sunrise</p>
                        <p className="title-1">6:30 AM</p>
                      </div>
                    </div>

                    <div className="card-item">
                      <span className="m-icon">
                        clear_night
                      </span>
                      <div>
                        <p className="label-1">Sunrise</p>
                        <p className="title-1">6:30 AM</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Humidity */}
                <div className="card card-sm highlight-card">
                  <h3 className="title-3">
                    Humidity
                  </h3>

                  <div className="wrapper">
                    <span className="m-icon">
                      humidity_percentage
                    </span>

                    <p className="title-1">35<sub>%</sub></p>
                  </div>                 
                </div>

                {/* Pressure */}
                <div className="card card-sm highlight-card">
                  <h3 className="title-3">
                    Pressure
                  </h3>

                  <div className="wrapper">
                    <span className="m-icon">
                      airwave
                    </span>

                    <p className="title-1">1052<sub>hPa</sub></p>
                  </div>                 
                </div>

                {/* Visibility */}
                <div className="card card-sm highlight-card">
                  <h3 className="title-3">
                    Visibility
                  </h3>

                  <div className="wrapper">
                    <span className="m-icon">
                      visibility
                    </span>

                    <p className="title-1">10<sup>km</sup></p>
                  </div>                 
                </div>

                {/* Feels Like */}
                <div className="card card-sm highlight-card">
                  <h3 className="title-3">
                    Feels Like
                  </h3>

                  <div className="wrapper">
                    <span className="m-icon">
                      thermostat
                    </span>

                    <p className="title-1">25&deg;<sup>c</sup></p>
                  </div>                 
                </div>

              </div>
            </div>
          </section>

          <Footer/>
          
        </div>

        <div className="loading" data-loading></div>

      </article>
    </main>
  )
}

export default Main