import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../contexts/BasketProvider'
import { WishListContext } from '../../contexts/WishListProvider'

export default function Card({ product }) {
    const { basket, addToBasket } = useContext(BasketContext)
    const { wishList, addToWishList } = useContext(WishListContext)


    return (
        <div className="col">
            <div className="card" style={{ height: "380px", position: 'relative', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                <img src="https://m.media-amazon.com/images/I/71Ls2+M7TSL._AC_UL320_.jpg" className="card-img-top" alt={product.title} style={{ height: "220px", objectFit: "cover" }} />

                <i className={wishList.some((p) => p._id === product._id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '24px', color: 'red', cursor: 'pointer' }} onClick={() => addToWishList(product)}></i>

                <div className="card-body d-flex flex-column" style={{ padding: '15px', height: '100%' }}>
                    <h5 className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{product.title}</h5>
                    <p className="card-price" style={{ fontSize: '16px', fontWeight: 'bold', color: '#007bff', marginBottom: '15px' }}>{product.price} $</p>

                    <div className="d-flex justify-content-between align-items-center" style={{ marginTop: 'auto' }}>
                        <Link to={`detail/${product._id}`}>
                            <button className='btn btn-info' style={{ fontSize: '14px', padding: '8px 12px' }}>Details</button>
                        </Link>
                        <i className="fa-solid fa-cart-plus" style={basket.some((p) => p._id === product._id) ? { fontSize: '24px', color: 'green', cursor: 'pointer' } : { fontSize: '24px', color: '#007bff', cursor: 'pointer' }} onClick={() => addToBasket(product)}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
