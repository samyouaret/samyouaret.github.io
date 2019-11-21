import React from 'react';

function ChildSection(props) {
    return (<div className="child flex flex-column">
        {props.children}
    </div>
    );
}

export default ChildSection;
