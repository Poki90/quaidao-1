import React from 'react';
import {ReactSVG} from 'react-svg';
import {observer} from 'mobx-react-lite';
import headerLogoSvg from '../../../assets/svg/header-logo.svg';
import {DEFI_PROJECTS, MAIN_PAGE} from "config";
import {Link, useLocation} from "react-router-dom";

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
        text: 'Community QUAI DAO',
    },
];

export const Header = observer(() => {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <div className="header">
            <div className='menu'>
                <ReactSVG src={headerLogoSvg} wrapper='span'/>
                {headerConfig.map(({link, text}) => (
                    <div className='menu-link' key={text}>
                        <Link to={link}>{text}</Link>
                        {pathname === link && <div className="menu-link--active"/>}
                    </div>
                ))}
            </div>
        </div>
    );
});
export default Header;
