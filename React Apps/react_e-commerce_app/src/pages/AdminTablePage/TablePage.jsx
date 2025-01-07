import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Table from '../../components/Table/Table'
import { getData } from '../../services/GetData'
import axios from 'axios'

export default function TablePage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const handleDelete = async (id) => {
        setLoading(true)
        await axios.delete(`https://6769264ccbf3d7cefd39c513.mockapi.io/products/${id}`)
        getData(setProducts, setLoading)
    }

    useEffect(() => {
        getData(setProducts, setLoading)
    }, [])


    return (
        <>
            <Helmet>
                <title>Admin Table Page</title>
            </Helmet>
            <section id='table'>
                <div className="container">
                    <div className="table" style={{display: loading ? "flex" : false}}>
                        {
                            loading ?
                                <div className="spinner-border text-success m-auto" role="status">
                                </div> :
                                <Table products={products} deleteFunction={handleDelete} />
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
