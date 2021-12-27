import React from 'react';
import RenderResponsiveBlocks from "components/RenderResponsiveBlocks";
import {ReactSVG} from "react-svg";
import uiDaoTitleSecondSection from "assets/svg/home/ui-dao-title-second-section.svg";
import uiDaoSecondSection from "assets/svg/home/ui-dao-second-section.svg";
import UiButton from "components/UiButton";
import chipSvg from "assets/svg/home/chip.svg";

const SecondSection = ({openModal}) => (
    <div className="second-section">
        <RenderResponsiveBlocks
            leftChildren={<div className="second-section__left-part">
                <div className="container">
                    <div className="title">
                        <ReactSVG src={uiDaoTitleSecondSection} wrapper='span'/>
                    </div>
                    <div className='text-block'>
                        <ReactSVG src={uiDaoSecondSection} wrapper='span'/>
                        <div className='paragraphs'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            <br/>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex
                                ea commodo consequat.</p>
                            <br/>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa
                                qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="staking-button">
                            <UiButton priority='primary' type='button' onclick={openModal}><p>Cohort farming</p>
                            </UiButton>
                        </div>
                    </div>
                    <div className='chip'><ReactSVG src={chipSvg} wrapper='div'/></div>
                </div>
            </div>}
            rightChildren={
                <div className="second-section__right-part">
                    <div className="top-section__right-part__heading-button"/>
                </div>
            }/>
    </div>

);

export default SecondSection;
