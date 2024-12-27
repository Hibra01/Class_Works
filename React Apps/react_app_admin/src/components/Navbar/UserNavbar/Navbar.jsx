import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
  return (
    <section id='navbar'>
      <div className="container">
        <div className="navbar">
          <h1>Logo</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Products</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
