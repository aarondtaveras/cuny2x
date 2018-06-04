// Need these imports every time! 

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      nameArray: []
    };
  }

  handleChange(event){
    const name = event.target.value;
    this.setState({
      name
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name; 
    let updateListOfNames = this.state.nameArray;
    updateListOfNames.push(name);
    this.setState({
      listOfNames: updateListOfNames
    })
    console.log("current state of array: ", this.state.nameArray);

  }

  render() {
    // When returning a component, you need to return a single div tag
    // You can have multiple divs, but there must be a PARENT tag

    const listOfNames = this.state.nameArray;
    const name = listOfNames.map((name,i)=>(<li key = {i}>name</li>)); 


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Name:
              <input onChange={this.handleChange.bind(this)} type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
          </form>
          <ul>
            { name ? name : null}
            </ul>
      </div>
    );
  }
}

export default App;
