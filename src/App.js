import React, { Component } from 'react'
import Inputcomp from './components/Inputcomp'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center', color: 'purple', fontFamily: 'cursive', fontSize: '40px'}}>Avtar Generator</h1>
        <Inputcomp />
      </div>
    )
  }
}

export default App
