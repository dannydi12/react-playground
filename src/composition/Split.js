import React from 'react';
import './Split.css'

function Split(props) {
    const combinedClasses = `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
        <div className={combinedClasses} style={newStyles}>
            {props.children}
        </div>
    );
}

export default Split;