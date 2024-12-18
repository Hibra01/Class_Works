import React from 'react'
import "./banner.css"
import image from '../../assets/image/image.jpg';
import Button from '../Button/Button';

export default function Banner() {
    return (
        <section id="banner">
            <div className="container">
                <div className="banner">
                    <div className="image">
                        <img src={image} alt="image" />
                    </div>
                    <div className="desc">
                        <p>Business Name or Tagline</p>
                        <p>This is a template that is great for small businesses.
                            It doesn't have too much fancy flare to it, but it
                            makes a great use of the standard Bootstrap core components.
                            Feel free to use this template for any project you want!</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
