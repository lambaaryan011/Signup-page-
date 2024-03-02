
import React, { useState } from "react";
import "./component/magic.css";
export default function Form() {
  // allows you to add state to a functional component
  const [data, setData] = useState({
    user: "",
    pass: "",
    num: "",
    mail: "",
  });
  // hook is initialized with an object as its initial state
  function hanldeOutput() {
    console.log(data);
    let arr = [];
    for (let i in data) {
      arr.push(data[i]);
    }
    console.log(arr);
    alert("Welcome " + data.user);
  }
  return (
    <div className="Parent">
      <h1>SignUp Form</h1>
      <form onSubmit={hanldeOutput}>
        <label htmlFor="UserName">Username : </label>
        <input type="text" id="UserName" value={data.user} placeholder="  Enter Your  Name"
          onChange={(e) => setData({ ...data, user: e.target.value })}
          // onChange event is triggered. The provided arrow function takes the event (e) as a parameter and calls setData with a new object. This object is created using the spread operator (...data) to copy the existing properties of the data object. The user property of this new object is then updated with the new value from e.target.value. This is a common pattern in React to update state in response to user input.
        />
        <br />
        <label htmlFor="Pass">Password : </label>
        <input type="password" id="Pass"value={data.pass}placeholder="  Enter Password"
          onChange={(e) => setData({ ...data, pass: e.target.value })}
        />
        <br />
        <label htmlFor="Num">Phone No : </label>
        <input type="text"id="Num" placeholder="  Enter  Number" value={data.num}
          onChange={(e) => setData({ ...data, num: e.target.value })}
        />
        <br />
        <label htmlFor="mail" id="lmail">Email :</label>
        <input type="email" id="mail" placeholder="Enter Your Email address" value={data.mail}
          onChange={(e) => setData({ ...data, mail: e.target.value })}
          style={{ width: "150px" }}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}


