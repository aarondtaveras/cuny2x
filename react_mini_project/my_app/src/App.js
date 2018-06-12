// Need these imports every time! 

import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      nameArray: [],
      done: false , 
      starred : false
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
    let updatedListOfNames = this.state.nameArray;
    updatedListOfNames.push(name);
    this.setState({
      nameArray : updatedListOfNames
    })
    console.log("current state of array: ", this.state.nameArray);

  }

  handleDelete(event){
    event.preventDefault();
    let updatedListOfNames = this.state.nameArray;
    updatedListOfNames.pop();
    this.setState({
      nameArray : updatedListOfNames
    })
    console.log("current state of array: ", this.state.nameArray);
  }

  handleStarred(event){
    event.preventDefault();
    let isStarred = !this.state.starred;
    this.setState({
      starred : isStarred
    })
    
  }

  removeItem(i, event){
    console.log("i is ", i);
    event.preventDefault();
    let updatedListOfNames = this.state.nameArray;
    updatedListOfNames.filter((item,i,array)=> item!== array[i]);
    this.setState({
      nameArray : updatedListOfNames
    })
  }


  render() {
    // When returning a component, you need to return a single div tag
    // You can have multiple divs, but there must be a PARENT tag

    const listOfNames = this.state.nameArray;
    const name = listOfNames.map((name,i)=>(<li key = {i}><i onClick={this.handleStarred.bind(this)}className="material-icons"
    >star</i>{name}<i onClick={this.removeItem.bind(this)}className="material-icons">times</i></li>)); 

    

    return (
      <div className="App">
        <header className="App-header">
          Welcome to the To-Do List: Powered by React.
        </header>
        <p className="App-intro">
          Welcome to the to-do list app! Submit tasks below. 
        </p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Task:
              <input onChange={this.handleChange.bind(this)} type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
              <button onClick={this.handleDelete.bind(this)} type="delete" value="Delete" />
          </form>
          <ul>
            { (name) ? name : null}
            </ul>
      </div>
    );
  }
}

export default App;
