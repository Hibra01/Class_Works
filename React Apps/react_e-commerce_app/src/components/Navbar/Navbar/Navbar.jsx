import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <header id='navbar' className='bg-primary-subtle'>
                <div className="container">
                    <div className="navbar d-flex justify-content-between align-items-center">
                        <h1>Shopping</h1>
                        <nav>
                            <ul className='m-0 p-0'>
                                <li className='list-group-item'><Link to="/">Home</Link></li>
                            </ul>
                        </nav>

                        <div className='wishlist-basket d-flex gap-3'>
                            <span>
                                <i class="fa-regular fa-heart"></i><sup>0</sup>
                            </span>
                            <span>
                                <i class="fa-solid fa-basket-shopping"></i><sup>0</sup>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
