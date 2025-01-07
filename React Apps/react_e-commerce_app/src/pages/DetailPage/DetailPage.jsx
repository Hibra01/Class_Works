import React, { useEffect, useState } from 'react'
import { getData } from '../../services/GetData'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DetailPage() {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`https://6769264ccbf3d7cefd39c513.mockapi.io/products/${id}`)
            .then((res) => setProduct(res.data))
    }, [])


    return (
        <section id='detail'>
            <div className="container">
                <div className="detail py-5">
                    <div className="card mb-3" style={{maxWidth: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.image} className="img-fluid rounded-start" alt="image" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><small className="text-body-secondary">{product.price} $</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
