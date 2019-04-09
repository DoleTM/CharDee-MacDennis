import React from 'react';
import "../styles/ClickItem.css"

function ClickItem(props) {
    return (
        <div onClick={() => props.scramblePictures(props.id)} className="clickItem"><img alt={props.name} src={props.gif} /></div>
    );
}

export default ClickItem;