import React from 'react'

function App() {

  // JSX Example 1

  // return (
  //   <div>
  //     <h1>Hello React</h1>
  //     <p>I am learning JSX.</p>
  //   </div>
  // );


  // JSX Example 2

  // const name = "Lokesh";

  // return (
  //   <div>
  //     <h1>Hello {name}</h1>
  //   </div>
  // );


  // JSX Example 3

  // return (
  //   <div>
  //     <h1>Calculation</h1>
  //     <p>2 + 2 = {2 + 2}</p>
  //     <p>10 - 5 = {10 - 5}</p>
  //     <p>3 * 4 = {3 * 4}</p>
  //   </div>
  // );


  // JSX Example 4

  // function greet () {
  //   return "Hello Lokesh!"; 
  // }

  // return(
  //   <div>
  //     <h1>{greet()}</h1>
  //   </div>
  // )


  // JSX Example 5

  // return (
  //   <div>
  //     <h1 className='title'>Hello React</h1>
  //     <p className='text'>I am learning JSX</p>
  //   </div>
  // )


  // JSX Example 6

  // const imageUrl = "https://via.placeholder.com/200";

  // return(
  //   <div>
  //     <h1>My Image</h1>

  //     <img src={imageUrl} alt="My example" />
  //   </div>
  // );


  // JSX Example 7
  // JSX needs one parent element

  // return (
  //   <>
  //   <h1>My Website</h1>
  //   <p>I am learning React JSX.</p>
  //   <p>This is my second paragraph</p>
  //   </>
  // );

  // JSX Example 8
  // self-closing tags

  // return(
  //   <div>
  //     <h1>Self Closing Tags</h1>

  //     <img 
  //     src="https://via.placeholder.com/150"
  //     alt="Example"
  //     />

  //     <input type='text' placeholder='Enter your name' />

  //   </div>
  // )


  // JSX Example 9
  // camelCase in JSX.

  // function handleClick() {
  //   alert("Button clicked!");
  // }

  // return(
  //   <div>
  //     <h1>Button Example</h1>

  //     <button onClick={handleClick}>
  //       Click Me
  //     </button>
  //   </div>
  // ) 


  // JSX Example 10
  // Comments in JSX
  // a.JavaScript Comment

    // This is a comment
    // return (
    //   <div>
    //     <h1>Hello Comment</h1>
    //   </div>
    // )


    // b.Multi-line JavaScript comment


    // return(
    //   <div>
    //     <h1>Hello Comment</h1>
    //   </div>
    // )


    // c.Comment inside JSX

    // return(
    //   <div>
    //     {/* {This is a comment inside JSX} */}
    //     <h1>Hello Comment</h1>
    //     <p>I am learning JSX</p>
    //   </div>
    // )

    // JSX Example 11
    // Using variables and expressions together

  // const name = "Lokesh";
  // const age = 20;

  // return (
  //   <div>
  //     <h1>Hello {name}</h1>

  //     <p>I am {age} years old.</p>

  //     <p>Next year I will be {age + 1} years old.</p>

  //     <p>{name} is learning React.</p>
  //   </div>
  // );


  // JSX Example 12
  // Conditional Rendering in JSX
  // Part 1:- If/else

    // const isDay = true;

    // let message;
    // if (isDay) {
    //   message = "Good Morning";
    // } else {
    //   message = "Good Night";
    // }

    // return(
    //   <div>
    //     <h1>{message}</h1>
    //   </div>
    // );


    // Part 2:- Ternary (? :)

    // const isDay = false;

    // return(
    //   <div>
    //     <h1>
    //       {isDay ? "Good Morning" : "Good Night"}
    //     </h1>
    //   </div>
    // );


    // JSX Example 13
    // Logical AND && in JSX
    // step1- Create a condition

    // const isLoggedIn = true;

    // step2- Use && inside JSX

    // const isLoggedIn = true;

    // return(
    //   <div>
    //     <h1>My Website</h1>

    //     {isLoggedIn && <p>Welcome, Lokesh!</p>}

    //   </div>
    // );


    // JSX Example 14
    // Rendering Multiple Elements with Conditions
    // Step 1 — Add this to App.jsx

    // const isLoggedIn = true;

    // return(
    //   <div>
    //     <h1>My Website</h1>

    //     {isLoggedIn && (
    //       <>
    //       <h2>Welcome, Lokesh!</h2>
    //       <p>You are logged in.</p>
    //       <button>Logout</button>
    //       </>
    //     )}
    //   </div>
    // );

    // Step 2 — Understand the important part

    // {isLoggedIn && (
    //   <>
    //   <h2>Welcome, Lokesh!</h2>
    //   <p>You are logged in.</p>
    //   <button>Logout</button>
    //   </>
    // )}

    // JSX Example 15
    // .map() in JSX
    // Step 1 — Add this to App.jsx

    // const fruits = ["Apple", "Banana", "Orange", "Mango"];

    // return(
    //   <div>
    //     <h1>My Fruits</h1>

    //     <ul>
    //       {fruits.map((fruit) => (
    //         <li key={fruit}>{fruit}</li>
    //       ))}
    //     </ul>
    //   </div>
    // )

    // Step 2 — Understand .map()

    // fruits.map ((fruit) => (
    //   <li>{fruit}</li>
    // ))


    // JSX Example 16
    // .map() with Objects

  //     const students = [
  //   { name: "Lokesh", age: 20 },
  //   { name: "Ram", age: 21 },
  //   { name: "Sita", age: 19 }
  // ];

  // return (
  //   <div>
  //     <h1>Students</h1>

  //     {students.map((student) => (
  //       <div key={student.name}>
  //         <h2>{student.name}</h2>
  //         <p>Age: {student.age}</p>
  //       </div>
  //     ))}
  //   </div>
  // );


  // JSX Example 17
  // Rendering Object Data in JSX
  // Step 1 — Create an object

  // const student = {
  //   name: "Lokesh",
  //   age: 20,
  //   course: "React"
  // };

  // return(
  //   <div>
  //     <h1>Student Information</h1>

  //     <p>Name: {student.name}</p>
  //     <p>Age: {student.age}</p>
  //     <p>Course: {student.course}</p>
  //   </div>
  // );


  // JSX Example 18
  // Key in .map()

  // const fruits = ["Apple", "Banana", "Orange", "Mango"]

  // return(
  //   <div>
  //     <h1>My Fruits</h1>

  //     <ul>
  //       {fruits.map((fruit) => (
  //         <li key={fruit}>{fruit}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );


  // JSX Example 19
  // Event Handling in JSX.

  // function handleClick() {
  //   alert("Button was clicked!");
  // }

  // return(
  //   <div>
  //     <h1>Event Handling</h1>

  //     <button onClick={handleClick}>
  //       Click Me
  //     </button>
  //   </div>
  // );


  // JSX Example 20
  // Event Object

  // function handleClick() {
  //   console.log(event);
  //   alert("You clicked the button!");
  // }

  // return(
  //   <div>
  //     <h1>Event Object</h1>

  //     <button onClick={handleClick}>
  //       Click Me
  //     </button>
  //   </div>
  // );
}

export default App
