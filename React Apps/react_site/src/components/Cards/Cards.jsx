import React from 'react'
import "./cards.css"
import Card from '../Card/Card'

export default function Cards() {
    return (
        <section id="cards">
            <div className="container">
                <div className="cards">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </section>
    )
}
