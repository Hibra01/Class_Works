import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./productList.css"
import { Link } from 'react-router-dom'

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [])


  function getData() {
    axios('https://6769264ccbf3d7cefd39c513.mockapi.io/products')
      .then((response) => {
        setProducts(response.data)
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
    <div className="continer">
      <table>
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
                <td><img src={p.image} alt="" /></td>
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
  )
}
