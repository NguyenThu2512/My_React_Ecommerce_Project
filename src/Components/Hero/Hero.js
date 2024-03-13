import React, { useEffect, useState } from 'react'
import './Hero.css'
import banner_1 from '../Assets/hero1.png'
import banner_2 from '../Assets/hero2.png'
import banner_3 from '../Assets/hero3.png'

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        banner_1, banner_2,banner_3
      ];
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      };
    
      useEffect(() => {
        // Tự động chuyển đổi slide sau mỗi 3 giây
        const interval = setInterval(nextSlide, 3000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="hero">
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

export default Hero
