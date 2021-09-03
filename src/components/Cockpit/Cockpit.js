import React, {useEffect, useRef} from 'react';
import './Cockpit.css'
import styled from 'styled-components'

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    
    //We only want this to occur when Persons change
    useEffect(() => {
        console.log('useEffect()');
        //http request
        // const timer = setTimeout(() => {
        //     alert("Saved data to the cloud");
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            //This part cancels the alert after the component is removed from the screen
            //clearTimeout(timer);
            console.log('cleanup work in cockpit in useEffect')
        }
        //The second argument will be what changes when we want this method to happen
    }, []);

    const SytledButton = styled.button`
    background-color: ${props.showPersons ? 'red' : 'green'};
    color: white;
    font: inherit;
     border: 1px solid blue;
     padding: 8px;
     cursor: pointer;
     
     &:hover {
        background-color: ${props.showPersons ? 'salmon' : 'lightgreen'};
        color: black;
     }
     `

  
    //Turns array of strings into one string 'red bold'
    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red'); //classes = ['red']
    }
    if (props.persons.length <= 1) {
        classes.push('bold'); //classes = ['red', 'bold']
    }


    return (
        <div className="Cockpit">
            <h1>Hi, I'm a React App</h1>

            <p className={classes.join(' ')}>This is really working!!!</p>

            <SytledButton className='btn'
                onClick={props.clicked}
                ref={toggleBtnRef}
            >Toggle Names</SytledButton>
            <button onClick={props.login}>Log in</button>
        </div>
    );
}


export default React.memo(Cockpit);