import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function AdminNavbar() {
    return (
        <>
            <header id='navbar' className='bg-primary-subtle'>
                <div className="container">
                    <div className="navbar d-flex justify-content-between align-items-center">
                        <h1>Admin Panel</h1>
                        <nav>
                            <ul className='m-0 p-0 d-flex gap-5'>
                                <li className='list-group-item'><NavLink to="/admin">Table</NavLink></li>
                                <li className='list-group-item'><NavLink to="addPage">Add Product</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
