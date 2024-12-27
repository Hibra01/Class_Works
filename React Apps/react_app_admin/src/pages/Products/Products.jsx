import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData()
    }, [])


    function getData() {
        axios('https://6769264ccbf3d7cefd39c513.mockapi.io/products')
            .then((res) => setProducts(res.data))
    }

    return (
        <div className="continer">
            <div className="container text-center">
                <div className="row row-cols-3 d-flex justify-content-between row-gap-5">
                    {
                        products.map((p) =>
                            <div className="card" style={{ width: "18rem" }} key={p.id}>
                                <img src={p.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className='btn btn-success'>Buy</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
