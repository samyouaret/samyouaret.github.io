import React from 'react';

function SectionChild(props) {
    return (<div className="child flex flex-column">
        {props.children}
    </div>
    );
}

export default SectionChild;
