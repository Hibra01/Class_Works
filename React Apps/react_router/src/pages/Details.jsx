import React, { useEffect, useState } from 'react'
import { Mosaic } from 'react-loading-indicators'
import { useParams } from 'react-router-dom'

export default function Details() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    fetch(`https://6769264ccbf3d7cefd39c513.mockapi.io/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }

  const product = products.find((p) => p.id == id)
  return (
    <>
      {
        loading ?
          <>
            <div className='mosaic-div'>
              <Mosaic color="#32cd32" size="large" text="" textColor="" />
            </div>
          </> :
          <div className="card" style={{width: "18rem"}}>
            <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Title: {product.title}</p>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Rate: {product.rating.rate}</p>
                <p className="card-text">Count: {product.rating.count}</p>
                <p className="card-text">Price: {product.price}</p>
              </div>
          </div>
      }
    </>
  )
}
