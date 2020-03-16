import React from 'react';

function Section(props) {
    return (<div className="flex flex-col">
        {props.children}
    </div>
    );
}

export default Section;
