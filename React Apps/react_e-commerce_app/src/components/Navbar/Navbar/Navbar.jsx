import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../../contexts/BasketProvider'

export default function Navbar() {
    const { basket } = useContext(BasketContext)

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
                                <i className="fa-regular fa-heart"></i><sup>0</sup>
                            </span>

                            <Link to={'basket'}>
                                <span>
                                    <i className="fa-solid fa-basket-shopping"></i><sup>{basket.length}</sup>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
