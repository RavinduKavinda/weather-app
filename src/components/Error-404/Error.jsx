import React from 'react'
import './error.css'

const Error = () => {
  return (
    <section className="error-content">
        <h2 className="heading">
            404
        </h2>

        <p className="body-1">
            Page Not Found!
        </p>

        <a href="" className='btn-primary'>
            <span className='span'>Go Home</span>
        </a>
    </section>
  )
}

export default Error