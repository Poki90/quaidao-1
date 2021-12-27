import React from 'react';
import cx from 'classnames';
import {useAnimation} from "hooks";

const UiButton = ({
                      priority,
                      type,
                      children,
                      disabled,
                      onclick,
                      styles,
                      nativeType = 'button',
                      selected,
                      className,
                  }) => {
    const cssClasses = cx(
        className,
        'btn',
        priority,
        type,
        selected ? 'selected' : '',
    );
    const ref2 = React.useRef(null)
    useAnimation(ref2, {scale: 1.5, duration: 600})
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}} className='ui-button-wrap'>
            <button
                ref={ref2}
                type={nativeType}
                disabled={disabled}
                onClick={onclick}
                className={cssClasses}
                style={styles}
            >
                {children}
            </button>
            <div style={{zIndex: -1}} className='back-primary'/>

        </div>
    );
};

export default UiButton;
