import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../../contexts/BasketProvider'
import { WishListContext } from '../../../contexts/WishListProvider'

export default function Navbar() {
    const { basket } = useContext(BasketContext)
    const { wishList } = useContext(WishListContext)

    const totalItemsInBasket = basket.reduce((total, item) => total + (item.count || 0), 0);

    return (
        <>
            <header id='navbar' className='bg-primary-subtle'>
                <div className="container">
                    <div className="navbar d-flex justify-content-between align-items-center">
                        <h1>Shopping</h1>
                        <nav>
                            <ul className='m-0 p-0'>
                                <li className='list-group-item'><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
                            </ul>
                        </nav>

                        <div className='wishlist-basket d-flex gap-3'>
                            <Link to={'wishList'} style={{ textDecoration: "none" }}>
                                <span>
                                    <i className="fa-regular fa-heart"></i><sup>{wishList.length}</sup>
                                </span>
                            </Link>

                            <Link to={'basket'} style={{ textDecoration: "none" }}>
                                <span>
                                    <i className="fa-solid fa-basket-shopping"></i><sup>{totalItemsInBasket}</sup>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
