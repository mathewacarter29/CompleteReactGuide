import React, { Component } from 'react';
import './App.css';
//Import name can be anything and a ./ is used because its a relative path
import Person from './Person/Person.js';

class App extends Component {

  //If state changes, the page will re-render
  state = {
    persons: [
      { id: '1', name: 'Mat', age: '20' },
      { id: '2', name: 'Kelsi', age: '19' },
      { id: '3', name: 'Lucy', age: '18' }
    ],
    otherState: 'some value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      //Condition to confirm the right person was found
      return p.id === id;
    });

    //Copy of person to be changed
    const person = {
      ...this.state.persons[personIndex]
    };

    //Changes the name of person gotten
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //Flips the value of showPersons
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //This would result in mutating the original state array VV
    //const persons = this.state.persons;
    const persons = [...this.state.persons];

    //Remove 1 person from the array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

      color: 'white',
      backgroundColor: 'green',

      //pseudo selector using Radium
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        //The index in map is passed in for free
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            ></Person>
          })}
        </div>
      );
    }

    //Turns array of strings into one string 'red bold'
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <p className={classes.join(' ')}>This is really working!!!</p>

        <button className="button"
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >Toggle Names</button>

        {persons}

      </div>
    );
  }
}
export default App;
