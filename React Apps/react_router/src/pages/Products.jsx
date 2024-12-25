import React, { useEffect, useState } from 'react'
import { TrophySpin, Atom, Mosaic } from 'react-loading-indicators'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './Details'


export default function Products() {
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
                        <div className='mosaic-div'>
                            <Mosaic color="#32cd32" size="large" text="" textColor="" />
                        </div>
                    </> :
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((p) =>
                                    <tr key={p.id}>
                                        <td><img src={p.image} alt="" /></td>
                                        <td>{p.title.slice(0, 20)}</td>
                                        <td>{p.price} $</td>
                                        <td>
                                            <Link to={`/details/`} >
                                                <button>Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
            }
            <Routes>
                <Route path='details/' element={<Details />} />
            </Routes>
        </>
    )
}
