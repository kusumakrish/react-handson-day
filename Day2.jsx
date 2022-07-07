//What is the Difference between react and react native? Which one is library or framework?

//React: React is a javascript library.
//React is used to design resp.onsible User Interfaces.
//React is a single page application.developed by facebook.React is component based.we can add Html code inside react code.easy implimentation.

//react native: React native is a framework.
//react native is used to design mobile application like , android,ios applications.
//react uses native components. It is a platform independent. write once and used any where. It is cost efficient.

//What is the package name you are using for routing

//The package name used for Routing is "react-router-dom".
//react-router-dom is a library created on the top of the react.
//Routers normally used to navigate to other pages of application.we have to install seperatly to use routing.
//we can install react-router-dom by writing this command in terminal
//npm i react-router-dom

//Routing Implementation

//uploaded files in github.

//How do you pass data from parent to child

//uploaded files in github with names compA , compB.

//What is lazy loading in react ?

//Lazy loading: Lazy loading allows us to load the resources that are really needed.
//Insted of loading entire webpage and rendering in the browser at all once, just render the critical components first and then render the remaining components later when required.
//we can impliment Lazy loading by using the function React.Lazy();

//Difference b/w Stateful and stateless Component

//State: State means a key-value pair that stores the data of that component and these are internal to component.

//Stateless components:

//Stateless components the name itself saying that the component dont have any state.
//we can just using the data by props.
//In react Functional components are stateless components.these components don't have state default.
//if we want we can add state by using react Hooks to the stateless/functional components.

//Statefull components:

//Statefull components the name itself saying that the components having state.
//we can manipulate data by using states.
//In react class components are Statefull components.these components having state by default.
//we can access state data by using this.state.value;

//How do you switch one component to another, Conditional Rendering

//We have different ways to switch between components.
//conditional rendering, Link , NavLink...

//compA.jsx
// const CompA = () => {
//     return(
//         <h1>this is componentA</h1>
//     )
// }

//compB.jsx
// const CompB = () => {
//     return(
//         <h1>this is componentB</h1>
//     )
// }

//In app.jsx
//import {useState} from "react";
// const App = () => {
//     const[show , setShow] = useState(false);
//       const handleClick = () => {
//         setShow(true);
//       }
//     return(
//         <div>
//         <button onClick={handleClick}>click</button>
//         {show? <compA/> : <compB/>}
//         </div>
//     )
// }
