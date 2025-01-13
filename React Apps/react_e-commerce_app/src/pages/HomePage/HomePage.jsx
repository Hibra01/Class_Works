import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import { Helmet } from 'react-helmet-async'
import { getData } from '../../services/GetData'

export default function HomePage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData(setProducts, setLoading)
    }, [])

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <section id='home'>
                <div className="container">
                    <div className="home py-5">
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-gap-4">
                                {
                                    loading ?
                                        <div className="spinner-border text-success m-auto" role="status">
                                        </div> :
                                        products.map((p) => <Card product={p} key={p.id} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
