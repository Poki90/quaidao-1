import React, {useState} from 'react';
import {slide as Menu} from 'react-burger-menu';
import {ReactSVG} from 'react-svg';
import {Link} from 'react-router-dom';
import {DEFI_PROJECTS, socialsLinks} from 'config';

import ambLogo from '../../assets/svg/header-logo.svg';
import UiButton from "components/UiButton";
import close from 'assets/svg/close.svg'

const Sidebar = () => {
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
                    <UiButton priority='white' type='button'><p>Cohort farming</p>
                    </UiButton>
                </div>
            </div>
            <a style={{marginTop: 191}} className="menu-item" target="_blank" href="https://ambrosus.io/">
                <p>Governance</p>
            </a>
            <a
                className="menu-item"
                target="_blank"
                href="https://explorer.ambrosus.io/"
            >
                <p>DeFi Projects</p>
            </a>
            <Link className="menu-item" to={DEFI_PROJECTS}>
                <p>Litepaper</p>
            </Link>
            <a className="menu-item" href="https://amb.to/" target="_blank">
                <p>Community
                    QUAI DAO</p>
            </a>
            <div className="socials">
                <ul className="socials__list">{socials}</ul>
            </div>
        </Menu>
    );
};
export default Sidebar;
