import React from 'react';
import FelipeDeAnda from "assets/images/members/FelipeDeAnda.png";
import StefanArsenijevic from "assets/images/members/StefanArsenijevic.png";
import AnatoliiShaitanov from "assets/images/members/AnatoliiShaitanov.png";
import JeffreyCommons from "assets/images/members/JeffreyCommons.png";
import RuslanGavriljuk from "assets/images/members/RuslanGavriljuk.png";
import RomanFerlii from "assets/images/members/RomanFerlii.png";
import Davien from "assets/images/members/Davien.png";
import VictorYampolsky from "assets/images/members/VictorYampolsky.png";

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

const TeamSection = () => (
    <div className="team-section">
        <div className='team-section__title'>TEAM</div>
        <div className='container'>
            <div className='container__list'>
                {teamMembers.map(member => (
                    <div className='container__list--item'>
                        <img className='photo' src={member.photo} alt={member.fullName}/>
                        <div className='fullName'>{member.fullName}</div>
                        <div className='description'>{member.description}</div>
                    </div>
                ))}

            </div>
        </div>
    </div>

);

export default TeamSection;
