// What is Virtual DOM?

//Virtual DOM is one of the feature provided by react.
//React Virtual DOM Saves the memory 
//Virtual DOM is Actually a copy of original DoM made by react. When any changes happend in the react applications the changes will not directly effecte to the Original DOM first the virtual DOM will update with the changes and then the comparision will happen by dipping algorithem then the only the perticuler changes will update in original DOM. This saves the memory .

// What is SPA

// SPA: SPA stands for Single Page Application .
//React is a single page application
//Single Page Application means that the entire page will not rerender every time.that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. Any interactions with the page or subsequent pages do not require a round trip to the server which means the page is not reloaded.
//Single Page applications are different from multiple page apps that we see everywhere because the SPA doesn't move into new pages; instead, it will load the pages inline within the same page.

//What is difference between class and functional component

//Functional Component : 
//Functional components are just a plain javascript pure functions that accepts props to pass data and return html element
//There is no render method. These will run from top-to-bottom once function is returned it can't kept alive.
//Functional components are also known as Stateless components it just take the data as props and print in perticular form. life cycle methods are not used in Functional components and Hooks can easily used for states in Functional components.
// The syntax for Functional Component is as follows

// const FunctionalComponent = () => {
//     return(
//         <h1>This is Functional Component</h1>
//     )
// }

// export default FunctionalComponent;

// Class Component:

//Class Components are the components having the keyword class.
//Class Components have render method and also have default state. class components are also called statefull components.
//The life cycle methods are used in class Components.
// This is the syntax for Class Component

// import { Component } from "react";

// class ClassComponent extends Component {
//     constructor(props){
//         super(props)
//     }

//     render(){
//         <h1>This is Class Component</h1>
//     }
// }

// export default ClassComponent;

// What does mean by state and its use in react?

//state: 
// the state is a set of key-value pairs. The application will rerender when state of an application change.
//The state will used to store the component data. The state is internal for the component.
//The class component having default state. Functional components are stateless but we can add state to the Functional component by Hooks in react.
//Example : import { Component } from "react";

// class ClassComponent extends Component {
//     constructor(props){
//         super(props)
        // this.state = {
        //      FirstName:"Kusuma",
        //      LastName:"Krishna"
        //      }
//     }

//     render(){
        //    <div>
        //  <h1>This is Class Component</h1>
        //  <h1>FirstName={this.state.FirstName}</h1>
        //  <h1>LastName={this.state.LastName}</h1>
        //   </div>
//     }
// }

// export default ClassComponent;

// What is JSX and why do we use it instead of js?

//JSX : JSX stands for Javascript Xml. It will allow us to write an HTML code inside javascript code.
//It is also one of the feature of react
//JSX makes it easier to writr and add HTML code in javascript.In jsx we can write expression in curely {}.The HTML code should wrap with one top level HTML element.JSX will through error if HTML code is incorrect or not included with parent element.

// What is package.json

//Package.json is a default file created when our react app is creating.
//It contains all the information about the application and the neccessary libraries required for the application to run.
//This is required file to  run any react application. It contains all the key information about the project and all the dependencies.
  
