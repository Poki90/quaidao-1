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
import partner125248 from "assets/images/partners/Group 125248.png";
import partner1927 from "assets/images/partners/image 1927.png";
import partner1928 from "assets/images/partners/image 1928.png";
import {useMedia} from "hooks";

const partnersMob1 = [
    {
        photo: partner1922,
    },
    {
        photo: partner1923,
    },

    {
        photo: partner1917,
    },
    {
        photo: partner126592,
    },
]
const partnersMob2 = [
    {
        photo: partner123653,
    },
    {
        photo: partner125986,
    },
    {
        photo: partner1925,
    },
    {
        photo: partner1926,
    },
]
const partnersMob3 = [
    {
        photo: partner1927,
    },
    {
        photo: partner1928,
    },
    {
        photo: partner125248,
    },
]

const partnersDesk1 = [
    {
        photo: partner1922,
    },
    {
        photo: partner1923,
    },
    {
        photo: partner1917,
    },
    {
        photo: partner1925,
    },
    {
        photo: partner1927,
    },
    {
        photo: partner1926,
    },
    {
        photo: partner125248,
    },


    {
        photo: partner1928,
    },


];

const partnersDesk2 = [
    {
        photo: partner125986,
    },
    {
        photo: partner123653,
    },
    {
        photo: partner126592,
    },
];


const PartnersSection = () => {
    const isSmall = useMedia('(max-width: 699px)');
    const isMobileScreen = useMedia('(max-width: 450px)');

    return (
        <div className="partners-section">
            <div className="partners-section__title">
                PARTNERS
            </div>
            <div className="container">
                <CarouselProvider
                    naturalSlideWidth={800}
                    naturalSlideHeight={!isSmall ? 300 : 820}
                    totalSlides={!isSmall ? 2 : 3}
                    visibleSlides={1}
                >
                    <Slider>
                        {!isSmall ?
                            <>
                                <Slide index={0}>
                                    <div className='container__list'>
                                        {partnersDesk1
                                            .map((partner, index) => (
                                                <div key={index} className='container__list--item'>
                                                    <div className='container__list--item__hover'>
                                                        <img className='photo' src={partner.photo} alt='none'/>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className='container__list'>
                                        {partnersDesk2
                                            .map((partner, index) => (
                                                <div key={index} className='container__list--item'>
                                                    <div className='container__list--item__hover'>
                                                        <img className='photo' src={partner.photo} alt='none'/>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </Slide>
                            </>
                            :
                            <>
                                <Slide index={0}>
                                    <div className='container__list'>
                                        {partnersMob1
                                            .map((partner, index) => (
                                                <div key={index} className='container__list--item'>
                                                    <div className='container__list--item__hover'>
                                                        <img className='photo' src={partner.photo} alt='none'/>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className='container__list'>
                                        {partnersMob2
                                            .map((partner, index) => (
                                                <div key={index} className='container__list--item'>
                                                    <div className='container__list--item__hover'>
                                                        <img className='photo' src={partner.photo} alt='none'/>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className='container__list'>
                                        {partnersMob3
                                            .map((partner, index) => (
                                                <div key={index} className='container__list--item'>
                                                    <div className='container__list--item__hover'>
                                                        <img className='photo' src={partner.photo} alt='none'/>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </Slide>
                                    </>
                                }

                    </Slider>
                    <div className="options">
                        <ButtonBack><ReactSVG src={prevSlide} wrapper='span'/></ButtonBack>
                        <ButtonNext><ReactSVG src={nextSlide} wrapper='span'/></ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>

    );
}

export default PartnersSection;
