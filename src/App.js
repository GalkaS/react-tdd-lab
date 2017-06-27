import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import phoneNumberValidator from './validators/phoneNumber'
import PhoneNumberInput from './components/PhoneNumberInput'

class App extends Component {
    constructor(props) {
        super(props)

        this.change = this.change.bind(this)
        this.validate = this.validate.bind(this)

        this.state = {
            valid: undefined,
            phoneNumber: ''
        }
    }

    change({target: {value}}) {
        this.setState({phoneNumber: value})
    }

    validate() {
        let result = phoneNumberValidator(this.state.phoneNumber)

        this.setState({valid: (typeof result === 'undefined')})

        return result
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <PhoneNumberInput value={this.state.phoneNumber} onChange={this.change} validate={this.validate} />
            <div className="valid">valid = {JSON.stringify(this.state.valid)}</div>
        </div>
      </div>
    );
  }
}

export default App;
