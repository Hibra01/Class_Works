import React from 'react'
import "./header.css"
import Navbar from '../navbar/navbar'
import Button from '../Button/Button'

export default function Header() {
    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>
                    <h1>Start Bootstrap</h1>
                    <Navbar></Navbar>
                </div>
            </div>
        </header>
    )
}
