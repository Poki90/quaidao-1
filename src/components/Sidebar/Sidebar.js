import React, {useState} from 'react';
import {slide as Menu} from 'react-burger-menu';
import {ReactSVG} from 'react-svg';
import {Link} from 'react-router-dom';
import {DEFI_PROJECTS, MAIN_PAGE, socialsLinks} from 'config';

import ambLogo from '../../assets/svg/header-logo.svg';
import UiButton from "components/UiButton";
import close from 'assets/svg/close.svg'


const headerConfig = [
    {
        link: '/',
        text: 'Governance',
    },
    {
        link: DEFI_PROJECTS,
        text: 'DeFi Projects',
    },
    {
        link: `${MAIN_PAGE}Litepaper`,
        text: 'Litepaper',
    },
    {
        link: `${MAIN_PAGE}Community`,
        text: 'Community',
    },
];
const Sidebar = ({openModal}) => {
    const [open, setOpen] = useState(false);

    const handleOnOpen = () => {
        setOpen(() => !open);
    };
    const socials = socialsLinks.map((social) => (
        <li className="socials__list__link" key={social.url}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.title}/>
            </a>
        </li>
    ));

    return (
        <Menu
            noOverlay
            disableOverlayClick
            right
            onOpen={handleOnOpen}
            isOpen={open}
        >
            <div className="header-sidebar">
                <div className="top">
                    <div className="logo">
                        <ReactSVG src={ambLogo}/>
                    </div>
                    <div className="close-sidebar" onClick={handleOnOpen}>
                        <ReactSVG src={close} wrapper='span'/>
                    </div>
                </div>
                <div className="staking-button" style={{zIndex: 0}}>
                    <UiButton priority='white' type='button' onclick={openModal}><p>Cohort farming</p>
                    </UiButton>
                </div>
            </div>
            {headerConfig.map(({link, text},index) => (
                <Link style={{marginTop:index === 0 && 191}} className="menu-item" to={link}>
                    <p>{text}</p>
                </Link>
            ))}
            <div className="socials">
                <ul className="socials__list">{socials}</ul>
            </div>
        </Menu>
    );
};
export default Sidebar;
