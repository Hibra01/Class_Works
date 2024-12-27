import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
    return (
        <section id='navbar'>
            <div className="container">
                <div className="navbar">
                    <h1>Logo</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/admin">Products</Link>
                            </li>
                            <li>
                                <Link to="add">Add</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
