import React from 'react'

const Footer = (props) => {
    return (
        <div className="text-center">
            &copy;{props.year || 2023}-All rights are reserved by{" "}
            <a href="https://google.com">{props.org || "Learn with Bhavika Kriplani"}</a>

        </div>
    )
}

export default Footer
