import React from 'react';
import {observer} from 'mobx-react-lite';

const RenderResponsiveBlocks = observer(({leftChildren, rightChildren}) => (
    <div className="render-responsive-blocks">
        <div className='left'>{leftChildren}</div>
        <div className='right'>{rightChildren}</div>
    </div>
));

export default RenderResponsiveBlocks;
