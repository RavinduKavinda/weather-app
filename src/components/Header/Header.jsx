import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          WEATHER.
        </h1>

        <div className="search-view">

          <div className="search-wrapper">
            <input 
              type="search"
              name='search'
              placeholder='Search city...'
              autoComplete='off'
              className='search-feild' />

            <span className="m-icon">Search</span>

            <button 
              className="icon-btn leading-icon has-state"
              aria-label='close search'> 
                <span class="m-icon">arrow_back</span> 
            </button>

          </div>

          <div className="search-result">
            <ul className="view-list">
              <li className="view-item">
                <span className="m-icon">
                  location_on
                </span>

                <div>
                  <p className="item-title">
                    London
                  </p>

                  <p className="label-2 item-subtitle">
                  State of London, GB
                  </p>
                </div>

                <a href="#" className='item-link has-state'></a>

              </li>
            </ul>
          </div>



        </div>

        <div className="header-actions">
          <button 
            className="icon-btn hsa-state"
            aria-label='open search'>
              <span className="m-icon icon">
                Search
              </span>
            </button>

          <a 
            href="#/current-location" 
            className='btn-primary has-state'>
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