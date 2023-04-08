import React from 'react'
import './NotFound.scss'
import notFoundGif from "../../assets/img/gif/404.gif";

export const NotFound = () => {
  return (
    <div className="error-box">
      <div className="illustration-wrapper">
        <img src={notFoundGif} alt="404 Not Found"/>
      </div>
      <div className='text-not'>
        <p className="form-title">404 Not Found</p>
      </div>
    </div>
  )
}
