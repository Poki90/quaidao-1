import React from 'react';
import {socialsLinks} from 'config';
import {ReactSVG} from "react-svg";
import logo from 'assets/svg/header-logo.svg'

const Footer = () => {

    const socials = socialsLinks.map((social) => (
        <li className="socials__list__link" key={social.url}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.title}/>
            </a>
        </li>
    ));

    return (
        <footer
            className="footer"
        >
            <div className="wrapper">
                <div><ReactSVG src={logo}/></div>
                <div className="footer-menu">
                    <div className='footer-menu__item'>Governance</div>
                    <div className='footer-menu__item'>DeFi Projects</div>
                    <div className='footer-menu__item'>Litepaper</div>
                    <div className='footer-menu__item'>Community
                        QUAI DAO
                    </div>
                </div>
                <div className="socials">
                    <ul className="socials__list">{socials}</ul>
                </div>
            </div>
            {' '}
        </footer>
    );
};

export default Footer;
