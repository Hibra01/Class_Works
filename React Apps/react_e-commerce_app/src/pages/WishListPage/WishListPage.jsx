import React, { useContext } from 'react'
import { WishListContext } from '../../contexts/WishListProvider'
import { BasketContext } from '../../contexts/BasketProvider'

export default function WishListPage() {
    const { wishList, addToWishList } = useContext(WishListContext)
    const { basket, addToBasket } = useContext(BasketContext)

    return (
        <section id='wishList-table'>
            <div className="container">
                <div className="wishList-table py-5">
                    <table className="table table-dark table-striped-columns text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price($)</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishList.map((p, index) =>
                                    <tr key={p._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src="https://m.media-amazon.com/images/I/71Ls2+M7TSL._AC_UL320_.jpg" alt={p.title} style={{ width: "100px", height: "100px" }} />
                                        </td>
                                        <td>{p.title}</td>
                                        <td>{p.description}</td>
                                        <td>{p.price}$</td>
                                        <td><i className="fa-solid fa-cart-plus" style={basket.some((product) => product._id === p._id) ? { fontSize: '24px', color: 'green', cursor: 'pointer' } : { fontSize: '24px', color: '#007bff', cursor: 'pointer' }} onClick={() => addToBasket(p)}></i></td>
                                        <td><i className={wishList.some((product) => product._id === p._id) ? "fa-solid fa-heart" : "fa-regular fa-heart"} style={{ fontSize: '24px', color: 'red', cursor: 'pointer' }} onClick={() => addToWishList(p)}></i></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
