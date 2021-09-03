import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import './Person.css';
import PropTypes from 'prop-types'
import Persons from '../Persons';

const person = (props) => {

    const style = {
        width: '60%',
        margin: '16px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign: 'center',
    };

    console.log('Person.js rendering...');

    //Don't NEED a wrapping element, you can wrap in an array
    return (
        <React.Fragment>
            {props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
            <p key='1' onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p key='2'>{props.children}</p>
            <input key='3' type="text" onChange={props.changed} value={props.name}
            //ref={(inputEl) => {this.inputElement = inputEl}}
            ></input>
        </React.Fragment>
    );
};

//React will watch out for this object and will watch for if you pass an incorrect prop
person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};


export default person;