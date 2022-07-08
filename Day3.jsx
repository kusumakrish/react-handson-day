//Difference between Axios and fetch

//Axios and fetch are the two methods used to access the RESTAPI.

//Fetch:
//Fetch is the javascript inbuilt method which is used to acess RESTAPI or server side data.
//Fetch takes a compulsary argument as a URL where you want to Fetch data.
//And return a promise 

// Example: const Fetch = () => {
//   const handleFetch = () => {
//     fetch("https://api.github.com/users/hacktivist123/repos")
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };
//   return (
//     <div>
//       <button onClick={handleFetch}>Click</button>
//     </div>
//   );
// };

// export default Fetch;

//Axios: 
//Axious is the javascript feature used to consume RESTAPI .
//Axios are easy to use. Axios are promise based and we can also use Async and Await.
//Using Axios we can get and post the data into API

//Example: import axios from "axios";
// const AxiosGet = () => {
//     const handleFetch = () => {
//       axios
//         .get("https://api.github.com/users/hacktivist123/repos")
//         .then((response) => console.log(response));
//     };
//     return (
//       <div>
//         <button onClick={handleFetch}>Click</button>
//       </div>
//     );
//   };
  
//   export default AxiosGet;

//What is UseState Hook ?(Implementation)

// UseState: UseState hook is uesd to store the state data of the functional component
//we need to import useState hook from the react

//import { useState } from "react";

// const Functional = () => {
//     const [state, setState] = useState("kusuma");
//     return (
//       <div>
//         <h1>Name: {state} </h1>
//         <button onClick={() => setState("Kusuma Krishna")}>click</button>
//       </div>
//     );
//   };
  
//   export default Functional;

//What is useEffect Hook ?(Implementation)

//useEffect: useEffect hook is used to provide lifecyclemethods for the functional component.
//This useEffect will render automatically once the application rendered first time on the webpage.
//UseEffect have two parameters one is callback and other it takes is dependency array.
//the UseEffect hook will render only the updated value matches the dependency array.

//Example:const { useEffect, useState } = require("react");

// const UseEffect = () => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//       console.log("inside the useEffect");
//     }, [count]);
//     const handleClick = () => {
//       setCount(count + 1);
//     };
//     return (
//       <div>
//         <h1>Count:{count}</h1>
//         <button onClick={handleClick}>increment click </button>
//       </div>
//     );
//   };
  
//   export default UseEffect;
