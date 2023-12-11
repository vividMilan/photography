import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)

    const linkItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Exposure Triangle',
            path: '/exposure-triangle'
        },
        {
            title: 'Composition Techniques',
            path: '/composition-techniques'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
        {
            title: 'Feedback',
            path: '/feedback'
        },
    ]

    useEffect(() =>{
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
  return (
    <nav className={isScrolled ? 'nav scroll' : 'nav'}>
        <span>Photography</span>
        <ul className='link'>
            {linkItems.map((link) => (
                <li key={link.title} >
                    <NavLink to={link.path}>{link.title}</NavLink>
                </li>
            ))}
        </ul>
        <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebar-btn active' : "sidebar-btn"}>
                <div className='bar'></div>
                <div className='bar'></div>
        </div>
        {showSidebar && (
            <Sidebar 
                linkItems = {linkItems}
            />
        )}
    </nav>
  )
}

export default Navbar