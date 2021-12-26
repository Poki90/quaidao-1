import React from 'react';
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {ReactSVG} from "react-svg";

import prevSlide from "assets/svg/prevSlide.svg";
import nextSlide from "assets/svg/nextSlide.svg";
import partner123653 from "assets/images/partners/Group 123653.png";
import partner125986 from "assets/images/partners/Group 125986.png";
import partner1917 from "assets/images/partners/image 1917.png";
import partner126592 from "assets/images/partners/Group 126592.png";
import partner1922 from "assets/images/partners/image 1922.png";
import partner1923 from "assets/images/partners/image 1923.png";
import partner1925 from "assets/images/partners/image 1925.png";
import partner1926 from "assets/images/partners/image 1926.png";

const partners = [
    {
        photo: partner123653,
    },
    {
        photo: partner125986,
    },
    {
        photo: partner1917,
    },
    {
        photo: partner126592,
    },
    {
        photo: partner1922,
    },
    {
        photo: partner1923,
    },
    {
        photo: partner1925,
    },
    {
        photo: partner1926,
    },
    {
        photo: partner1926,
    },
    {
        photo: partner1926,
    },

];

const PartnersSection = () => (
    <div className="partners-section">
        <div className="partners-section__title">
            PARTNERS
        </div>
        <div className="container">
            <CarouselProvider
                naturalSlideWidth={800}
                naturalSlideHeight={200}
                totalSlides={2}
                visibleSlides={1}
            >
                <Slider>
                    <Slide index={0}>
                        <div className='container__list'>
                            {partners
                                .filter((img, index) => index < 8)
                                .map(partner => (
                                    <div className='container__list--item'>
                                        <img className='photo' src={partner.photo} alt='none'/>
                                    </div>
                                ))}
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className='container__list'>
                            {partners
                                .filter((img, index) => index < 8)
                                .map(partner => (
                                    <div className='container__list--item'>
                                        <img className='photo' src={partner.photo} alt='none'/>
                                    </div>
                                ))}
                        </div>
                    </Slide>
                </Slider>
                <div className="options">
                    <ButtonBack><ReactSVG src={prevSlide} wrapper='span'/></ButtonBack>
                    <ButtonNext><ReactSVG src={nextSlide} wrapper='span'/></ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    </div>

);

export default PartnersSection;
