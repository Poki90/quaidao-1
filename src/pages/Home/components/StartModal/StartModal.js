import React from 'react';
import Modal from "components/Modal";
import {ReactSVG} from "react-svg";
import logo from 'assets/svg/header-logo.svg';

import modBut1 from "assets/svg/home/startModal/modal-button-1.svg";
import modBut2 from "assets/svg/home/startModal/modal-button-2.svg";
import xIcon from "assets/svg/x.svg";
import modBut3 from "assets/svg/home/startModal/modal-button-3.svg";
import {useMedia} from "hooks";

const StartModal = ({isShowing,
                        toggle}) => {
    const isSmall = useMedia('(max-width: 800px)');
    return (
        <Modal
            isShowing={isShowing}
            hide={() => toggle()}
            className='starting-modal-lighting'
            modalStyles={{
                width: isSmall ? '90%' : '70%', minHeight: isSmall ? '90%' : '60%', overflow: 'hidden',
                maxWidth: 1100,
                height:'max-content',
                maxHeight: 550,
                border: "2px solid #005BBC",
                boxSizing: 'border-box',
                boxShadow: '0px 0px 20px #000AFF',
                borderRadius: 15,
            }}
        >
            <div className="starting-modal">
                <ReactSVG onClick={toggle} className='close-btn' src={xIcon} wrapper='span'/>
                <div className='starting-modal__info'>
                    <div className='logo'><ReactSVG src={logo} wrapper={"span"}/></div>
                    <div className='primary'><p>Cohort multi-token farms with all farms</p></div>
                    <div className='secondary'><p>Cohort farms are designed to provide token holders a variety of
                        ways to earn and reap
                        the benefits of being an eYe token holder. Farms offer unique strategies for token holders
                        to earn yields in multiple tokens native to relevant blockchain networks.</p></div>
                </div>
                <div className='starting-modal__selects'>
                    <div className='item-border'>
                        <div className='item'><ReactSVG src={modBut1}/></div>
                    </div>
                    <div className='item-border'>
                        <div className='item'><ReactSVG src={modBut2}/></div>
                    </div>
                    <div className='item-border'>
                        <div className='item'><ReactSVG src={modBut3}/></div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default StartModal;
