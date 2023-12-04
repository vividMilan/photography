import React from 'react'

const Footer = () => {

  const today = new Date()

  return (
    <footer className='footer section'>
        <div className="footer-container">
            <p className="title">Photography.com</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident laborum perspiciatis quos voluptatum.</p>
            <p>&copy; {today.getFullYear()} | All rights reserved</p>
        </div>
        <div className="footer-container">
            <p className="title">Contact Us</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident laborum perspiciatis quos voluptatum.</p>
        </div>
        <div className="footer-container">
            <p className="title">Socials</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
    </footer>
  )
}

export default Footer