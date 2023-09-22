import React from 'react'
import './Navbar.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Rick and Morty</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/characters">Characters</Link></li>
        <li><Link href="/locations">Locations</Link></li>
        <li><Link href="/episodes">Episodes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar