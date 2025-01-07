import axios from 'axios'
import React from 'react'
import { getData } from '../../services/GetData'
import { Link } from 'react-router-dom'

export default function Table({products, deleteFunction}) {

    return (
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price($)</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p) => 
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td><img src={p.image} alt="image" /></td>
                        <td>{p.title}</td>
                        <td>{p.description}</td>
                        <td>{p.price}$</td>
                        <td><Link to={`updatePage/${p.id}`}><button>Edit</button></Link></td>
                        <td><button onClick={() => deleteFunction(p.id)}><i className="fa-solid fa-trash"></i></button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}
