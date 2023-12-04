import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({linkItems}) => {
  return (
    <div className='sidebar'>
        <ul className='link-section'>
            {linkItems.map((link) => (
                <Link className='link' key={link.title} to={link.path}>{link.title}</Link>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar