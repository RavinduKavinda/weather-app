import React, { useEffect } from 'react';
import "./header.css";

const Header = () => {

  useEffect(() => {
    import('./../../assets/js/app.js').then((script) => {
      script.default(); 
    });
  }, []);

  
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          WEATHER.
        </h1>

        <div className="search-view" data-search-view>

          <div className="search-wrapper">
            <input 
              type="search"
              name='search'
              placeholder='Search city...'
              autoComplete='off'
              className='search-feild'
              data-search-field />

            <span className="m-icon leading-icon">Search</span>

            <button 
              className="icon-btn leading-icon has-state"
              aria-label='close search' data-search-toggler> 
                <span className="m-icon">arrow_back</span> 
            </button>

          </div>

          <div className="search-result" data-search-result>
            
          </div>



        </div>

        <div className="header-actions">
          <button 
            className="icon-btn hsa-state"
            aria-label='open search' data-search-toggler>
              <span className="m-icon icon">
                Search
              </span>
            </button>

          <a 
            href="#/current-location" 
            className='btn-primary has-state' data-c-location-btn>
              <span className="m-icon">
                my_location
              </span>
              <span className="span">
                Current Location
              </span>
            </a>
        </div>

        
      </div>
    </header>
  )
}

export default Header