import React from 'react';
import "../styles/ClickItem.css"

function ClickItem(props) {
    return <div className="click-item"
            role="img" 
            aria-label="click item"
            onClick={() => props.scrambleGifs(props.id)}
            style={{ backgroundImage: `url(${props.gif})`}}
        />
};

export default ClickItem;