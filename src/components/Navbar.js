import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    const linkItems = [
        {
            title: 'Home',
            path: '#Home'
        },
        {
            title: 'Learn',
            path: '#Learn'
        },
        {
            title: 'Gallery',
            path: '#Gallery'
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
        <ul>
            {linkItems.map((link) => (
                <li>
                    <Link to={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar