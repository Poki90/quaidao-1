import React from 'react';
import FelipeDeAnda from "assets/images/members/Felipe De Anda.png";
import StefanArsenijevic from "assets/images/members/Stefan Arsenijevic.png";
import AnatoliiShaitanov from "assets/images/members/Anatolii Shaitanov.png";
import JeffreyCommons from "assets/images/members/Jeffrey Commons.png";
import RuslanGavriljuk from "assets/images/members/Ruslan Gavriljuk.png";
import RomanFerlii from "assets/images/members/Roman Ferlii.png";
import Davien from "assets/images/members/Davien.png";
import VictorYampolsky from "assets/images/members/Victor Yampolsky.png";

import {useMedia} from "hooks";
import {ButtonBack, ButtonNext, CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {ReactSVG} from "react-svg";
import prevSlide from "assets/svg/prevSlide.svg";
import nextSlide from "assets/svg/nextSlide.svg";
import lnIcon from 'assets/images/members/lnIcon.svg'

const teamMembersForPhone1 = [
    {
        photo: VictorYampolsky,
        fullName: 'Victor Yampolsky',
        description: 'Advisor/Contributor, Business Development and Growth',
    },
    {
        photo: FelipeDeAnda,
        fullName: 'Felipe De Anda',
        description: 'Co-Founder, Senior Manager Growth and Development',
    },
]
const teamMembersForPhone2 = [
    {
        photo: StefanArsenijevic,
        fullName: 'Stefan Arsenijevic',
        description: 'Web Developer and SEO Expert',
    },
    {
        photo: AnatoliiShaitanov,
        fullName: 'Anatolii Shaitanov',
        description: 'Senior UI/UX Designer',
    },
]
const teamMembersForPhone3 = [
    {
        photo: JeffreyCommons,
        fullName: 'Jeffrey Commons',
        description: 'Co-Founder,  Senior Solidity Developer and Smart Contracts Architrct',
    },
    {
        photo: Davien,
        fullName: 'Davien',
        description: 'p2e Specialist',
    },

]
const teamMembersForPhone4 = [
    {
        photo: RuslanGavriljuk,
        fullName: 'Ruslan Gavriljuk',
        description: 'Front-end Developer',
    },
    {
        photo: RomanFerlii,
        fullName: 'Roman Ferlii',
        description: 'UI/UX Designer',
    },
]
const teamMembers = [
    {
        photo: VictorYampolsky,
        fullName: 'Victor Yampolsky',
        description: 'Advisor/Contributor, Business Development and Growth',
    },
    {
        photo: FelipeDeAnda,
        fullName: 'Felipe De Anda',
        description: 'Co-Founder, Senior Manager Growth and Development',
    },
    {
        photo: StefanArsenijevic,
        fullName: 'Stefan Arsenijevic',
        description: 'Web Developer and SEO Expert',
    },
    {
        photo: AnatoliiShaitanov,
        fullName: 'Anatolii Shaitanov',
        description: 'Senior UI/UX Designer',
    },
    {
        photo: JeffreyCommons,
        fullName: 'Jeffrey Commons',
        description: 'Co-Founder,  Senior Solidity Developer and Smart Contracts Architrct',
    },
    {
        photo: Davien,
        fullName: 'Davien',
        description: 'p2e Specialist',
    },
    {
        photo: RuslanGavriljuk,
        fullName: 'Ruslan Gavriljuk',
        description: 'Front-end Developer',
    },
    {
        photo: RomanFerlii,
        fullName: 'Roman Ferlii',
        description: 'UI/UX Designer',
    },

];
const teamMembersMob1 = [
    {
        photo: VictorYampolsky,
        fullName: 'Victor Yampolsky',
        description: 'Advisor/Contributor, Business Development and Growth',
    },
    {
        photo: FelipeDeAnda,
        fullName: 'Felipe De Anda',
        description: 'Co-Founder, Senior Manager Growth and Development',
    },
    {
        photo: StefanArsenijevic,
        fullName: 'Stefan Arsenijevic',
        description: 'Web Developer and SEO Expert',
    },
    {
        photo: AnatoliiShaitanov,
        fullName: 'Anatolii Shaitanov',
        description: 'Senior UI/UX Designer',
    },

];
const teamMembersMob2 = [
    {
        photo: JeffreyCommons,
        fullName: 'Jeffrey Commons',
        description: 'Co-Founder,  Senior Solidity Developer and Smart Contracts Architrct',
    },
    {
        photo: Davien,
        fullName: 'Davien',
        description: 'p2e Specialist',
    },
    {
        photo: RuslanGavriljuk,
        fullName: 'Ruslan Gavriljuk',
        description: 'Front-end Developer',
    },
    {
        photo: RomanFerlii,
        fullName: 'Roman Ferlii',
        description: 'UI/UX Designer',
    },
];

const TeamSection = () => {
    const isSmall = useMedia('(max-width: 450px)');
    const isMobileScreen = useMedia('(max-width: 350px)');
    return (
        <div className="team-section">
            <div className='team-section__title'>TEAM</div>
            <div className='container'>
                {!isSmall ?
                    <div className='container__list'>
                        {teamMembers.map(member => (
                            <div className='container__list--item' key={member.fullName}>
                                <div className='photo'>
                                    <ReactSVG className='ln-icon' src={lnIcon} wrapper='span'/>
                                    <img style={{marginTop: member.fullName === 'Davien' && 4}} src={member.photo}
                                         alt={member.fullName}/>
                                </div>
                                <div className='fullName'>{member.fullName}</div>
                                <div className='description'>{member.description}</div>
                            </div>
                        ))}
                    </div>
                    :
                    (
                        <CarouselProvider
                            naturalSlideWidth={800}
                            naturalSlideHeight={isMobileScreen ? 1620 : 1600}
                            totalSlides={isMobileScreen ? 4 : 2}
                            visibleSlides={1}
                        >
                            <Slider>
                                {!isMobileScreen ?
                                    <>
                                        <Slide index={0}>
                                            <div className='container__list'>
                                                {teamMembersMob1
                                                    .map((member) => (
                                                        <div className='container__list--item' key={member.fullName}>
                                                            <div className='photo'>
                                                                <ReactSVG className='ln-icon' src={lnIcon}
                                                                          wrapper='span'/>
                                                                <img
                                                                    style={{marginTop: member.fullName === 'Davien' && 4}}
                                                                    src={member.photo} alt={member.fullName}/>
                                                            </div>
                                                            <div className='fullName'>{member.fullName}</div>
                                                            <div className='description'>{member.description}</div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className='container__list'>
                                                {teamMembersMob2
                                                    .map((member) => (
                                                        <div className='container__list--item' key={member.fullName}>
                                                            <div className='photo'>
                                                                <ReactSVG className='ln-icon' src={lnIcon}
                                                                          wrapper='span'/>
                                                                <img
                                                                    style={{marginTop: member.fullName === 'Davien' && 4}}
                                                                    src={member.photo} alt={member.fullName}/>
                                                            </div>
                                                            <div className='fullName'>{member.fullName}</div>
                                                            <div className='description'>{member.description}</div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </Slide>
                                    </> :
                                    <>
                                        <Slide index={0}>
                                            <div className='container__list'>
                                                {teamMembersForPhone1
                                                    .map((member) => (
                                                        <div className='container__list--item' key={member.fullName}>
                                                            <div className='photo'>
                                                                <ReactSVG className='ln-icon' src={lnIcon}
                                                                          wrapper='span'/>
                                                                <img
                                                                    style={{marginTop: member.fullName === 'Davien' && 4}}
                                                                    src={member.photo} alt={member.fullName}/>
                                                            </div>
                                                            <div className='fullName'>{member.fullName}</div>
                                                            <div className='description'>{member.description}</div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className='container__list'>
                                                {teamMembersForPhone2
                                                    .map((member) => (
                                                        <div className='container__list--item' key={member.fullName}>
                                                            <div className='photo'>
                                                                <ReactSVG className='ln-icon' src={lnIcon}
                                                                          wrapper='span'/>
                                                                <img
                                                                    style={{marginTop: member.fullName === 'Davien' && 4}}
                                                                    src={member.photo} alt={member.fullName}/>
                                                            </div>
                                                            <div className='fullName'>{member.fullName}</div>
                                                            <div className='description'>{member.description}</div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className='container__list'>
                                                {teamMembersForPhone3
                                                    .map((member) => (
                                                        <div className='container__list--item' key={member.fullName}>
                                                            <div className='photo'>
                                                                <ReactSVG className='ln-icon' src={lnIcon}
                                                                          wrapper='span'/>
                                                                <img
                                                                    style={{marginTop: member.fullName === 'Davien' && 4}}
                                                                    src={member.photo} alt={member.fullName}/>
                                                            </div>
                                                            <div className='fullName'>{member.fullName}</div>
                                                            <div className='description'>{member.description}</div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className='container__list'>
                                                {teamMembersForPhone4
                                                    .map((member) => (
                                                        <div className='container__list--item' key={member.fullName}>
                                                            <div className='photo'>
                                                                <ReactSVG className='ln-icon' src={lnIcon}
                                                                          wrapper='span'/>
                                                                <img
                                                                    style={{marginTop: member.fullName === 'Davien' && 4}}
                                                                    src={member.photo} alt={member.fullName}/>
                                                            </div>
                                                            <div className='fullName'>{member.fullName}</div>
                                                            <div className='description'>{member.description}</div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </Slide>
                                    </>}


                            </Slider>
                            <div className="options">
                                <ButtonBack><ReactSVG src={prevSlide} wrapper='span'/></ButtonBack>
                                <ButtonNext><ReactSVG src={nextSlide} wrapper='span'/></ButtonNext>
                            </div>
                        </CarouselProvider>
                    )
                }

            </div>
        </div>

    );
}

export default TeamSection;
