import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./productList.css"
import { Link } from 'react-router-dom'
import { Mosaic } from 'react-loading-indicators'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])


  function getData() {
    axios('https://6769264ccbf3d7cefd39c513.mockapi.io/products')
      .then((response) => {
        setProducts(response.data)
        setLoading(false)
      })
  }

  function deleteProduct(id) {
    axios.delete(`https://6769264ccbf3d7cefd39c513.mockapi.io/products/${id}`)
      .then((res) => {
        console.log(res.data)
        getData()
      })
  }

  return (
    <>
      {
        loading ?
          <div className='text-center'>
            <Mosaic color="#32cd32" size="medium" text="" textColor="" />
          </div> :
          <div className="container">
            <table className='w-100'>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Title</td>
                  <td>Description</td>
                  <td>Price</td>
                  <td>Delete</td>
                  <td>Edit</td>
                </tr>
              </thead>

              <tbody>
                {
                  products.map((p) =>
                    <tr key={p.id}>
                      <td style={{ width: "200px" }}><img src={p.image} alt="" className='w-100' /></td>
                      <td>{p.title.slice(0, 20)}</td>
                      <td>{p.description.slice(0, 60)}</td>
                      <td>{p.price}</td>
                      <td>
                        <button className='btn btn-danger' onClick={() => deleteProduct(p.id)}>Delete</button>
                      </td>
                      <td>
                        <Link to={`update/${p.id}`}>
                          <button className='btn btn-primary'>Edit</button>
                        </Link>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
      }
    </>
  )
}
