import React, { useEffect, useState } from 'react'
import { getData, getDataById } from '../../services/GetData'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        getDataById(setProduct, setLoading, id)
    }, [])


    return (
        <section id='detail'>
            <div className="container">
                <div className="detail py-5" style={{ display: loading ? "flex" : false }}>
                    {
                        loading ?
                            <div className="spinner-border text-success m-auto" role="status">
                            </div> :
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://m.media-amazon.com/images/I/71Ls2+M7TSL._AC_UL320_.jpg" className="img-fluid rounded-start" alt="image" />
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
                    }
                </div>
            </div>
        </section>
    )
}
