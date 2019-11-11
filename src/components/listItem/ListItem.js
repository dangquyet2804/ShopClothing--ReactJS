import React from 'react'
import './ListItem.css';

const ListItem = ({title, image}) => {
    
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default ListItem
