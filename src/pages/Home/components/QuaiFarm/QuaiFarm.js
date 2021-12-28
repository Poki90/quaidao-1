import React from 'react';
import {ReactSVG} from "react-svg";
import icon1Icon from "assets/svg/home/icon1.svg";
import icon2Icon from "assets/svg/home/icon2.svg";
import icon3Icon from "assets/svg/home/icon3.svg";
import icon4Icon from "assets/svg/home/icon4.svg";
import icon5Icon from "assets/svg/home/icon5.svg";
import icon6Icon from "assets/svg/home/icon6.svg";
import icon7Icon from "assets/svg/home/icon7.svg";
import icon8Icon from "assets/svg/home/icon8.svg";
import icon9Icon from "assets/svg/home/icon9.svg";
import icon10Icon from "assets/svg/home/icon10.svg";

const icons = [
    {
        icon: icon1Icon,
        key: 'icon1Icon'
    },
    {
        icon: icon2Icon,
        key: 'icon2Icon'
    },
    {
        icon: icon3Icon,
        key: 'icon3Icon'
    },
    {
        icon: icon4Icon,
        key: 'icon4Icon'
    },
    {
        icon: icon5Icon,
        key: 'icon5Icon'
    },
    {
        icon: icon6Icon,
        key: 'icon6Icon'
    },
    {
        icon: icon7Icon,
        key: 'icon7Icon'
    },
    {
        icon: icon8Icon,
        key: 'icon8Icon'
    },
    {
        icon: icon9Icon,
        key: 'icon9Icon'
    },
    {
        icon: icon10Icon,
        key: 'icon10Icon'
    },
]

const QuaiFarm = () => (
    <div className="quai-farm">
        <div className="container">
            <div className='quai-farm__primary'><p>QUAI Cohort Farm</p></div>
            <div className='quai-farm__secondary'><p>Farming Rates by Token</p></div>
            <div className="quai-farm-grid" data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine">
                {icons.map(({icon, key}) => (<div key={key}><ReactSVG src={icon} wrapper='span'/></div>))}
            </div>
        </div>
    </div>

);

export default QuaiFarm;
