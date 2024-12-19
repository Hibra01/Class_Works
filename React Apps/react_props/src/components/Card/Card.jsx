import React from 'react'

export default function Card({keyId, pImage, pTitle, pDesc}) {
    return (
        <div className="card col" style={{ width: '18rem' }} key={keyId}>
            <img src={pImage} className="card-img-top" alt={pTitle} style={{height: '200px'}}/>
            <div className="card-body">
                <h5 className="card-title">{pTitle.slice(0, 20)}...</h5>
                <p className="card-text">{pDesc.slice(0, 50)}...</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
        </div>
    )
}
