import React, { Component } from 'react'
import './Avtar.css'

export class Avtargen extends Component {
    render() {
        return (
            <div className="Avtar">
                <img src={`https://joeschmoe.io/api/v1/${this.props.name ? this.props.name : 'your name'}`} alt="Avtar"></img>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default Avtargen

