import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios(`https://6769264ccbf3d7cefd39c513.mockapi.io/products/${id}`)
            .then((res) => {
                setProduct(res.data)
                setLoading(false)
            })
    }, [])


    return (
        <>
            {
                loading ?
                    <div className='text-center'>
                        <Mosaic color="#32cd32" size="medium" text="" textColor="" />
                    </div> :
                    <div className="container">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.price} $</p>
                                <div className='d-flex justify-content-center gap-3'>
                                    <button className='btn btn-success'>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
