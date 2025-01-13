import React, { useContext } from 'react'
import { BasketContext } from '../../contexts/BasketProvider'

export default function BasketPage() {
    const { basket, addToBasket, decreaseBasket, removeFromBasket, clearBasket } = useContext(BasketContext)

    return (
        <section id='basket-table'>
            <div className="container">
                <div className="basket-table py-5">
                    <table className="table table-dark table-striped-columns text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th></th>
                                <th>Count</th>
                                <th></th>
                                <th>Price($)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                basket.map((p) =>
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>
                                            <img src="https://m.media-amazon.com/images/I/71Ls2+M7TSL._AC_UL320_.jpg" alt={p.title} style={{ width: "100px", height: "100px" }} />
                                        </td>
                                        <td>{p.title}</td>
                                        <td>{p.description}</td>
                                        <td><button className='btn btn-warning' onClick={() => decreaseBasket(p)}>-</button></td>
                                        <td>{p.count}</td>
                                        <td><button className='btn btn-success' onClick={() => addToBasket(p)}>+</button></td>
                                        <td>{p.price}$</td>
                                        <td><button className='btn btn-danger' onClick={() => removeFromBasket(p)}><i className="fa-solid fa-trash"></i></button></td>
                                        {/* <td><button onClick={() => removeFromBasket(p.id)}><i className="fa-solid fa-trash"></i></button></td> */}
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
