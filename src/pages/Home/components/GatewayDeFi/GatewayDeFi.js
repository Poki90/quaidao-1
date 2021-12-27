import React from 'react';
import UiButton from "components/UiButton";

const GatewayDeFi = () => (
    <div className='gateway-DeFi'>
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
            <div className="staking-button" style={{zIndex: 0}}>
                <UiButton priority='white' type='button'><p>Explore</p>
                </UiButton>
            </div>
        </div>
    </div>

);

export default GatewayDeFi;
