/*eslint-disable*/
import React from 'react';
import UiButton from "components/UiButton";
import bitook from 'assets/svg/bittok.svg'
import bitookMobile from 'assets/svg/bitkoin-mobile.svg'
import {ReactSVG} from "react-svg";
import {useMedia} from "hooks";

const GatewayDeFi = () => {
    const isSmall = useMedia('(max-width: 699px)');

    return (
        <div className='gateway-DeFi'>
            <div className='bitcoin-chain'>
                <ReactSVG src={!isSmall ? bitook : bitookMobile} wrapper='div'/>
            </div>
            <div className='container'>
                <div className='gateway-DeFi__title'>
                    Gateway for DeFi

                </div>
                <div className='gateway-DeFi__info'>
                    <div className='gateway-DeFi__info--primary'>Transfer any token between any blockchain</div>
                    <br/>
                    <div className='gateway-DeFi__info--secondary'>Access tokens from any blockchain using your
                        existing
                        smart contracts without having to worry about wrapping or unwrapping tokens.
                    </div>
                </div>
                <div className="staking-button"  style={{zIndex: 0 , width:294}}>
                    <UiButton priority='white' style={{zIndex: 0 , width:294}} type='button' ><p>Explore</p>
                    </UiButton>
                </div>
            </div>
        </div>

    );
}

export default GatewayDeFi;
