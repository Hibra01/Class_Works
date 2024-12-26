import React, { useEffect, useState } from 'react'
import { TrophySpin, Atom, Mosaic } from 'react-loading-indicators'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './Details'


export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        fetch("https://6769264ccbf3d7cefd39c513.mockapi.io/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
    }

    return (
        <>
            {
                loading ?
                    <>
                        <div className='mosaic-div'>
                            <Mosaic color="#32cd32" size="large" text="" textColor="" />
                        </div>
                    </> :
                    <div className="container text-center">
                        <div className="row row-cols-3 d-flex justify-content-between row-gap-5">
                            {
                                products.map((p) =>
                                    <div className="card" style={{width: "18rem"}} key={p.id}>
                                        <img src={p.image} className="card-img-top" alt={p.title} style={{height: "300px"}} />
                                            <div className="card-body">
                                                <h5 className="card-title">{p.title.slice(0, 20)}...</h5>
                                                <p className="card-text">{p.description.slice(0, 50)}...</p>
                                                <Link to={`/details/${p.id}`}>
                                                <button className='btn btn-success'>Details</button>
                                                </Link>
                                                <Link to={`/details/${p.id}`}>
                                                <button className='btn btn-success'>Delete</button>
                                                </Link>
                                            </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
            }
        </>
    )
}
