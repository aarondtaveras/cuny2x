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
      nameArray : updateListOfNames
    })
    console.log("current state of array: ", this.state.nameArray);

  }

  handleDelete(event){
    event.preventDefault();
    let updateListOfNames = this.state.nameArray;
    updateListOfNames.pop();
    this.setState({
      nameArray : updateListOfNames
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
    
        <p className="App-intro">
          Welcome to the to-do list app! Submit tasks below. 
        </p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Name:
              <input onChange={this.handleChange.bind(this)} type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
              <button onClick={this.handleDelete.bind(this)} type="delete" value="Delete" />
          </form>
          <ul>
            { name ? name : null}
            </ul>
      </div>
    );
  }
}

export default App;
