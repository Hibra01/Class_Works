import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function AdminNavbar() {
    return (
        <section id='navbar'>
            <div className="container">
                <div className="navbar">
                    <h1>Logo</h1>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="add">Add</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
