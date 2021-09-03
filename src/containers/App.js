import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'

class App extends Component {

  constructor(props) {
    super(props);
    console.log("App.js constructor");
  }

  state = {
    persons: [
      { id: '1', name: 'Mat', age: 20 },
      { id: '2', name: 'Kelsi', age: 19 },
      { id: '3', name: 'Lucy', age: 18 }
    ],
    otherState: 'some value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  loginhandler = () => {
    this.setState({ authenticated: true });
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps');
    return state;
  }

  // componentWillMount() {
  //   console.log('App.js componentWillMount()');
  // }

  componentDidMount() {
    console.log('App.js componentWillMount()');
  }

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

    //setState has an optional prevState argument
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    }

    );
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

    console.log('App.js rendering...');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        //The index in map is passed in for free
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}></Persons>
        </div>
      );
    }


    return (
      <div className="App">

        <button
          onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
        {this.state.showCockpit ?
          <Cockpit showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}></Cockpit> : null}
        {persons}

      </div>
    );
  }
}
export default App;
