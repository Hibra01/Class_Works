import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import link from '../../services/link';

function addProduct(obj) {
    axios.post(link, obj)
        .then(function (response) {
            console.log(response)
        })
    console.log(obj)
}
export default function AddPage() {
    const navigate = useNavigate()

    return (
        <section id='addPage'>
            <div className="container">
                <div className="addPage py-5">
                    <Formik
                        initialValues={{ title: "", description: "", image: "", price: "" }}
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
                            <label className='mt-3' htmlFor="title">Title</label>
                            <Field name="title" type="text" />
                            <ErrorMessage name="title" />

                            <label className='mt-3' htmlFor="description">Description</label>
                            <Field name="description" type="text" />

                            <label className='mt-3' htmlFor="image">Image</label>
                            <Field name="image" type="text" />

                            <label className='mt-3' htmlFor="price">Price</label>
                            <Field name="price" type="number" />

                            <button className='mt-3' type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </section>
    )
}
