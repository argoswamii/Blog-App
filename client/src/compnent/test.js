/*This application should allow the user to update their username by inputting a custom value and clicking the button.

The Username component is finished and should not be changed, but the App component is missing parts. Finish the App component so that the Username component displays the inputted text when the button is clicked.

The App component should use the React.useRef Hook to pass the input to the Username component for the input element and for the Username component.

For example, if the user inputs a new username of "John Doe" and clicks the button, the div element with id root should look like this:

<div><button>Change Username</button><input type="text"><h1>John Doe</h1></div> */

////////////////ques-1

// https://codesandbox.io/s/mern-q1-forked-i9ntmw?file=/src/index.js

// import ReactDOM from "react-dom";
// import React from "react";
// import { useRef, useState } from "react";

// function Username(props) {
//   return <h1>{props.username}</h1>;
// }

// function App() {
//   const [username, setUsername] = useState("");
//   const inputRef = useRef();

//   const handleButtonClick = () => {
//     setUsername(inputRef.current.value);
//   };
//   return (
//     <div>
//       <button onClick={handleButtonClick}>Change Username</button>
//       <input type="text" ref={inputRef} />
//       <Username username={username} />
//     </div>
//   );
// }
// document.body.innerHTML = "<div id='root'></div>";
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// document.querySelector("input").value = "John Doe";
// document.querySelector("button").click();
// setTimeout(() => console.log(document.getElementById("root"), 1000));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// question-0
// https://codesandbox.io/s/mern-q1-forked-s4ivq3?file=/src/App.js

/*
Create a screen with 5 stars on it. 
(You can use asterisk(*) key instead of stars).
Initially all stars are black. 
When the user clicks on any star, 
all the stars before the clicked star
should become blue, 
the star clicked should become red 
and all the stars after the clicked star 
should remain black.
For eg: If you clicked 3rd star then
1st and 2nd star will become blue, 
the 3rd star will become red and 
the 4th and 5th star will become black

You have to code this in react. 
Do not use any external libraries.
*/
// import React from "react";
// import { useState } from "react";

// function Star() {
//   const [rating, setRating] = useState(0);

//   const handelStateClick = (index) => {
//     setRating(index + 1);
//   };
//   return (
//     <div>
//       {[...Array(5)].map((star, index) => {
//         const color = index < rating ? "blue" : "black";
//         if (index === rating - 1) {
//           return (
//             <span
//               style={{ color: "red", cursor: "pointer" }}
//               onClick={() => handelStateClick(index)}
//             >
//               *
//             </span>
//           );
//         } else {
//           return (
//             <span
//               style={{ color: color, cursor: "pointer" }}
//               onClick={() => handelStateClick(index)}
//             >
//               *
//             </span>
//           );
//         }
//       })}
//     </div>
//   );
// }
// export default Star;

/////////////////////////////////////////////////////////////////////////////////////////
