import React, { useContext, useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import App from '../../App'
import axios from 'axios'
import { WishListContext } from '../../context/WishListProvider'

export default function Home() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const { wishs, addToWishList } = useContext(WishListContext)

    console.log(wishs)

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios('https://6769264ccbf3d7cefd39c513.mockapi.io/products')
            .then((res) => setProducts(res.data))
    }

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <header>
                <div className="container">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </header>

            <section id='products'>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                        {
                            products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase())).map((p) =>
                                <div className="col d-flex justify-content-center my-3" key={p.id}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={p.image} className="card-img-top" alt="..." />
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <h5 className="card-title">{p.title.slice(0, 20)}...</h5>
                                            <p className="card-text">{p.price}</p>
                                        </div>
                                        <div className='text-end p-2 cart'>
                                            <i className="fa-regular fa-heart" onClick={() => addToWishList(p)}></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
