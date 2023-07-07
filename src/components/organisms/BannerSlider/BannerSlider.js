import React, {useState} from 'react';
import Button from "../../atoms/Button/Button";
import './BannerSlider.css';
const BannerSlider = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
    }

    return (
        <div className="banner-slider">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={slide.image} alt={slide.caption}/>
                    <div className="caption">{slide.caption}</div>
                </div>
            ))}
            <Button  buttonClassName="prev-button" text="Previous" onClick={prevSlide}/>
            <Button  buttonClassName="next-button" text="Next" onClick={nextSlide}/>
        </div>
    )
}

export default BannerSlider;