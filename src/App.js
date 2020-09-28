import React, { Component } from "react";
import "./style.css";

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    fullName: ''
  }

  componentDidUpdate() {
    console.log('Component did cupdate')
  }

  onButtonClick = () => {
    ['firstName', 'lastName', 'fullName'].forEach(k => {
      setTimeout(() => {
        this.setState({ k: Math.random() })
      }, 0)

    })
  }

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <button onClick={this.onButtonClick}>Trigger CD</button>
      </div>
    );
  }

}
