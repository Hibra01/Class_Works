import { useEffect, useState } from 'react'
import './App.css'
import { TrophySpin, Atom, Mosaic } from 'react-loading-indicators'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }

  return (
    <>
      {
        loading ?
          <>
            <Mosaic color="#32cd32" size="large" text="" textColor="" />
          </> :
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((p) =>
                  <tr key={p.id}>
                    <td>{p.title}</td>
                    <td>{p.description}</td>
                    <td><img src={p.image} alt="" /></td>
                    <td>{p.price}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
      }
    </>
  )
}

export default App
