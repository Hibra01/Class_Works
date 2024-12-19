import React from 'react'
import "./Card.css"
import Button from '../Button/Button'

export default function Card() {
    return (
        <div className='card'>
            <h4>Card Name</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
            <div className='button'>
                <Button
                    buttonContent={"More info"}
                />
            </div>
        </div>
    )
}
