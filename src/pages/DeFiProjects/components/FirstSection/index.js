import React from 'react';
import RenderResponsiveBlocks from "components/RenderResponsiveBlocks";
import Header from "components/layouts/Header";
import UiButton from "components/UiButton";
import {useMedia} from "hooks";

const FirstSection = ({toggleModal}) => {
    const isDesktop = useMedia('(max-width: 800px)');

    return(
        <div className="top-section">
            <RenderResponsiveBlocks
                leftChildren={<div className="top-section__left-part">
                    <Header/>
                    {isDesktop &&
                    <div className="staking-button" style={{zIndex: 0}}>
                        <UiButton priority='white' type='button' onclick={toggleModal}>
                            <p>Cohort farming</p>
                        </UiButton>
                    </div>}
                </div>}
                rightChildren={
                    <div className="top-section__right-part">
                        <div className="top-section__right-part__heading-button">
                            {!isDesktop &&
                            <UiButton priority='primary' type='button'
                                      onclick={toggleModal}><p>Cohort
                                farming</p>
                            </UiButton>}
                        </div>
                    </div>
                }/>
        </div>
    );
}

export default FirstSection;
