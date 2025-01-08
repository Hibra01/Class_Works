import React, { useContext } from 'react'
import { BasketContext } from '../../contexts/BasketProvider'

export default function BasketPage() {
    const { basket } = useContext(BasketContext)
    return (
        <table className="table table-dark table-striped-columns">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
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
                                <img src="https://m.media-amazon.com/images/I/71Ls2+M7TSL._AC_UL320_.jpg" alt={p.title} style={{width: "100px", height: "100px"}} />
                            </td>
                            <td>{p.title}</td>
                            <td>{p.description}</td>
                            <td>{p.price}$</td>
                            <td><button onClick={() => deleteFunction(p.id)}><i className="fa-solid fa-trash"></i></button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
