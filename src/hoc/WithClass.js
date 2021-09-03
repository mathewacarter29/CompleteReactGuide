import React from 'react'

//First way to do it
// const withClass = props => (
//     //Sets up a div with whatever content passed in
//     <div className={props.classes}>{props.children}</div>
// );

//Wrapped must start with capital because it is a reference to a component
//Second param is whatever you want in the hoc
/*
    This HOC applies a CSS format to properties
*/
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent></WrappedComponent>
        </div>
    );
};

export default withClass;