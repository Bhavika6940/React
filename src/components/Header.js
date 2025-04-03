import React from 'react'

const Header = (props) => {
  return (
    <div className="alert alert-info">
        <div className="container">
            <h1>{props.title}</h1>
        </div>
        <div className="container">
            <p className="lead">{props.subtitle}</p>
        </div>


      
    </div>
  )
}

export default Header
