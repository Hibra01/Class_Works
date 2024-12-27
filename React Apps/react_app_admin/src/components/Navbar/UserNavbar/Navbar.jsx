import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <section id='navbar'>
        <div className="container">
            <div className="navbar">
                <h1>Logo</h1>
                <nav>
                    <ul>
                      <li>
                        <Link to="/">Products</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
  )
}
