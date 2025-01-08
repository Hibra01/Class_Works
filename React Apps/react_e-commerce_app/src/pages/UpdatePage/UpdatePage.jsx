import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { getDataById } from '../../services/GetData'

export default function UpdatePage() {
    const [obj, setObj] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        getDataById(setObj, setLoading, id)
    }, [])

    function updateProduct(obj) {
        axios.put(`https://6769264ccbf3d7cefd39c513.mockapi.io/products/${id}`, obj)
    }

    return (
        <>
            <section id='updatePage'>
                <div className="container">
                    <div className="updatePage py-5" style={{display: loading ? "flex" : false}}>
                        {
                            loading ?
                                <div className="spinner-border text-success m-auto" role="status">
                                </div> :
                                <>
                                    <h1 className='text-center'>Edit Product</h1>
                                    <Formik
                                        initialValues={{ title: `${obj.title}`, description: `${obj.description}`, image: `${obj.image}`, price: `${obj.price}` }}
                                        validationSchema={Yup.object({
                                            title: Yup.string()
                                                .required('Required'),
                                            description: Yup.string()
                                                .required('Required'),
                                            image: Yup.string()
                                                .required('Required'),
                                            price: Yup.number()
                                                .required('Required'),
                                        })}
                                        onSubmit={(values) => {
                                            updateProduct(values)
                                            navigate("/admin")
                                        }}
                                    >
                                        <Form className='d-flex flex-column w-25 m-auto' >
                                            <label htmlFor="title">Title</label>
                                            <Field name="title" type="text" />
                                            <ErrorMessage name="title" />

                                            <label htmlFor="description">Description</label>
                                            <Field name="description" type="text" />

                                            <label htmlFor="image">Image</label>
                                            <Field name="image" type="text" />

                                            <label htmlFor="price">Price</label>
                                            <Field name="price" type="number" />

                                            <button type="submit">Submit</button>
                                        </Form>
                                    </Formik>
                                </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
