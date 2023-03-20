import React from 'react'
import './NotFound.scss'

export const NotFound = () => {
  return (
    <div className="error-box">
      <div className="illustration-wrapper">
        <img src={require("../../img/gif/404.gif")} alt="404 Not Found"/>
      </div>
      <div className='text-not'>
        <p className="form-title">404 Not Found</p>
      </div>
    </div>
  )
}
