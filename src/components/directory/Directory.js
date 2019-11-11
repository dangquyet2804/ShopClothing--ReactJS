import React, { Component } from 'react';
import ListItem from '../listItem/ListItem.js';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: [
                {id:1, title: 'hats', image: 'https://i.ibb.co/cvpntL1/hats.png'},
                {id:2, title: 'jackets', image: 'https://i.ibb.co/cvpntL1/jackets.png'},
                {id:3, title: 'sneakers', image: 'https://i.ibb.co/cvpntL1/sneakers.png'},
                {id:4, title: 'womens', image: 'https://i.ibb.co/cvpntL1/womens.png'},
                {id:5, title: 'mens', image: 'https://i.ibb.co/cvpntL1/mens.png'}
            ]
        }
    }
    
    render() {
        const {section} = this.state
        return (
            <div>
                {section.map(item => {
                    return (
                        <ListItem key={item.id} title={item.title} image={item.image}/>
                    )
                })}
            </div>
        );
    }
}

export default Directory;
