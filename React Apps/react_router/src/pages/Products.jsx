import React, { useEffect, useState } from 'react'
import { TrophySpin, Atom, Mosaic } from 'react-loading-indicators'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './Details'
import axios from 'axios'


export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios.get('http://localhost:3000/products')
            .then(response => {
                setProducts(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Have someone error: ', error)
            })
    }

    function deleteItem(elementId) {
        console.log(elementId)
        axios.delete(`http://localhost:3000/products/${elementId}`)
            .then(response => {
                console.log("Process: ", response)
                getData()
            })
            .catch(error => {
                // console.error('Have someone error: ', error)
                console.error('Error deleting product: ', error.response ? error.response.data : error.message)
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
                                    <div className="card" style={{ width: "18rem" }} key={p.id}>
                                        <img src={p.image} className="card-img-top" alt={p.title} style={{ height: "300px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{p.title.slice(0, 20)}...</h5>
                                            <p className="card-text">{p.description.slice(0, 50)}...</p>
                                            <div className='d-flex justify-content-center gap-2'>
                                                <Link to={`/details/${p.id}`}>
                                                    <button className='btn btn-success'>Details</button>
                                                </Link>
                                                <button className='btn btn-danger' onClick={() => deleteItem(p.id)}>Delete</button>
                                            </div>
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
