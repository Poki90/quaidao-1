import React from 'react';
import Modal from "components/Modal";
import {ReactSVG} from "react-svg";
import logo from "assets/svg/home/startModal/logo.svg";
import modBut1 from "assets/svg/home/startModal/modal-button-1.svg";
import modBut2 from "assets/svg/home/startModal/modal-button-2.svg";
import modBut3 from "assets/svg/home/startModal/modal-button-3.svg";

const StartModal = ({isShowing,
                        toggle}) => {
    return (
        <Modal
            isShowing={isShowing}
            hide={toggle}
            className='starting-modal-lighting'
            modalStyles={{
                maxWidth: '70%', minHeight: '80%', overflow: 'hidden',
                border: "2px solid #005BBC",
                boxSizing: 'border-box',
                boxShadow: '0px 0px 20px #000AFF',
                borderRadius: 15,
                animation: " neon .08s ease-in-out infinite alternate"
            }}
        >
            <div className="starting-modal">
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
