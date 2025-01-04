import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import { Mosaic } from 'react-loading-indicators'
import { Link } from 'react-router-dom'

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setsearch] = useState("")

    useEffect(() => {
        getData()
    }, [])


    function getData() {
        axios('https://6769264ccbf3d7cefd39c513.mockapi.io/products')
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
    }

    function searchProduct(input) {
        const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(input.search.toLowerCase()) || p.description.toLowerCase().includes(input.search.toLowerCase()))
        setProducts(filteredProducts)
    }

    return (
        <>
            {
                loading ?
                    <div className='text-center'>
                        <Mosaic color="#32cd32" size="medium" text="" textColor="" />
                    </div> :
                    <>
                        <div className='container'>
                            <input type="text" value={search} onChange={(e => setsearch(e.target.value))} />
                        </div>
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                                {
                                    products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase())).map((p) =>
                                            <div className='col d-flex justify-content-center my-3' key={p.id}>
                                                <div className="card" style={{ width: "18rem" }}>
                                                    <img src={p.image} className="card-img-top" alt="..." />
                                                    <div className="card-body d-flex flex-column justify-content-between">
                                                        <h5 className="card-title">{p.title}</h5>
                                                        <p className="card-text">{p.price} $</p>
                                                        <div className='d-flex justify-content-center gap-3'>
                                                            <button className='btn btn-success'>Buy</button>
                                                            <Link to={`details/${p.id}`}>
                                                                <button className='btn btn-info'>Details</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                            </div>
                        </div>
                    </>
            }
        </>
    )
}
