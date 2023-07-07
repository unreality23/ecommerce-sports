import React from 'react';
import Button from "../../atoms/Button/Button";
import BannerSlider from "../../organisms/BannerSlider/BannerSlider";
const Home = () => {
    const slides = [
        {
            image: '/banner-images/banner-default.jpg',
            caption: 'Slide 1',
        },
        {
            image: '/banner-images/optica_pattern_05.png',
            caption: 'Slide 2',
        },
        {
            image: '/banner-images/optica_pattern_11.png',
            caption: 'Slide 3',
        },
    ]

    const handleClick = () => {

    };

    return (
        <div>
            {/* Your Home page content */}
            <h1>Welcome to the Home Page!</h1>
            <BannerSlider slides={slides} />
            <p>This is the content of the Home page.</p>
            <Button text="Ok" buttonClassName="main-button text-9xl" onClick={handleClick} />
        </div>
    );
};

export default Home;
