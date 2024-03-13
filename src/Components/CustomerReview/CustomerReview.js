import React, { useEffect, useState } from 'react'
import slide_1 from '../Assets/comment_1.png'
import slide_2 from '../Assets/comment_2.png'
import slide_3 from '../Assets/comment_3.png'
import './CustomerReview.css'

function CustomerReview() {
    const [currentSlide, setCurrentSlide]=useState(0);
    const slides=[slide_1, slide_2, slide_3];
    const nextSlide=()=>{
        setCurrentSlide((prev)=>(prev+1) % slides.length);
    }
    const prevSlide=()=>{
        setCurrentSlide((prev)=>(prev-1+slides.length)%slides.length);
    }
    useEffect(
        ()=>{
            const interval=setInterval(nextSlide, 3000)
            return ()=> clearInterval(interval)
        },[]
    )
  return (
    <div className="customerreview">
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div
                key={index}
                className={index === currentSlide ? 'slide fade show' : 'slide fade'}
                >
                <img src={slide} alt={`Slide ${index}`} />
                </div>
            ))}
            <a className="prev" onClick={prevSlide}>&#10094;</a>
            <a className="next" onClick={nextSlide}>&#10095;</a>
            <div className="dots">
                {slides.map((_, index) => (
                <span
                    key={index}
                    className={index === currentSlide ? 'dot active' : 'dot'}
                    onClick={() => setCurrentSlide(index)}
                ></span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CustomerReview
