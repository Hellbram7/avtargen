import React, { Component } from 'react'
import Avtargen from './Avtargen'
import './Inputstyle.css'
import Cooltxt from './Cooltxt'

export class Inputcomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            username: ''
        }
        this.x = ''
    }
    handleChange = (event) => {
       this.x = event.target.value
    //    this.setState({ inputVal: event.target.value });
    }

    handleClick = () => {
        this.setState({ username: this.x });
        // this.setState({ username: this.state.inputVal });
    }

    render() {
     
        return (
            <div>
            <div className="incomp">
                <h3 style={{color: 'purple'}} className="inputtxt">Enter your name:-</h3>
                <input type="text" placeholder="Enter Name" className="inputbox"
                 onChange={this.handleChange} ></input>
                <button type="button" className="Button" onClick={this.handleClick}>Submit</button>
            </div>
            <Avtargen name = {this.state.username}/>
            <Cooltxt />
            </div>
        )
    }
}

export default Inputcomp
