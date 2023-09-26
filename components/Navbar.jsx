'use client'
import React from 'react'
import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Rick and Morty</h1>
      <ul className="nav-links">
        <li><Link href="/">Characters</Link></li>
        <li><Link href="/locations">Locations</Link></li>
        <li><Link href="/episodes">Episodes</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar