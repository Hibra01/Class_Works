import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function addProduct(obj) {
    axios.post('https://6769264ccbf3d7cefd39c513.mockapi.io/products', obj)
        .then(function (response) {
            console.log(response)
        })
    console.log(obj)
}

export default function AddPage() {
    const navigate = useNavigate()

    return (
        <>
            <h1 className='text-center'>ADD PRODUCT</h1>
            <Formik
                initialValues={{ title: '', description: '', image: '', price: "" }}
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
                    addProduct(values)
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
    )
}
