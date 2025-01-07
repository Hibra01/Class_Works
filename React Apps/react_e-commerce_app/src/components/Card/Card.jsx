import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({product}) {
    return (
        <div className="col">
            <div className="card" style={{ width: "18rem", height: "360px"}}>
                <img src={product.image} className="card-img-top" alt={product.title.slice(0, 20) + '..._image'} style={{height: "200px"}} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price} $</p>
                    <Link to={`detail/${product.id}`}><button className='btn btn-info'>Details</button></Link>
                </div>
            </div>
        </div>
    )
}
