import React from 'react';
import {observer} from 'mobx-react-lite';
import {useMedia} from "hooks";

const RenderResponsiveBlocks = observer(({leftChildren, rightChildren}) => {

    const isMobileScreen = useMedia('(max-width: 600px)');

    return (
        <div className="render-responsive-blocks">
            <div style={{width:!isMobileScreen &&  `calc(100% - 494px)`}} className='left'>{leftChildren}</div>
            <div style={{width:!isMobileScreen &&  494}} className='right'>{rightChildren}</div>
        </div>
    )
});

export default RenderResponsiveBlocks;
