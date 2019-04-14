import React from 'react';
import './TitleBar.css';

const TitleBar = (props) => {
    return (
        <div className="TitleBar">
            <p>Sulai Sivadel: WebDeveloper {props.userName}</p>
            <p>This is how the web is writtten</p>
        </div>
    );
};

export default TitleBar;