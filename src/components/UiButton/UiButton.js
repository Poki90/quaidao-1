import React from 'react';
import cx from 'classnames';

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
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
            <button
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
