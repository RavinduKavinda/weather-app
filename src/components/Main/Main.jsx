import React from 'react'
import "./main.css";
import icon from "./../../assets/images/weather_icons/01d.png";

const Main = () => {
  return (
    <main>
      <article className="container">
        <div className="content-left">
          {/* Searching Place Weather */}
          <section className="section current-weather" aria-label='current weather'>

            <div className="card card-lg current-weather-card">
              <h2 className="title-2 card-title">
                NOW
              </h2>

              <div className="weapper">
                <p className="heading">
                  25&deg;<sup>c</sup>
                </p>

                <img src={icon} alt="" className="weather-icon" />
              </div>

              <p className="body-3">
                Overcast Clouds
              </p>

              <ul className="meta-list">
                <li className="meta-item">
                  <span class="m-icon">calendar_today</span>

                  <p className="title-3 meta-text">
                    Thursday 16, Feb
                  </p>
                </li>

                <li className="meta-item">
                  <span class="m-icon">location_on</span>

                  <p className="title-3 meta-text">
                    London, GB
                  </p>
                </li>

              </ul>
            </div>

          </section>
        </div>
      </article>
    </main>
  )
}

export default Main