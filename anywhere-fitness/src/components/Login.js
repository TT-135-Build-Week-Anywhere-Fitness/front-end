import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";



const initialValues = {
  // text inputs
  username: "",
  password: "",
};



export default function Login() {
  //const [loginInfo, setloginIn] = useState(initialMember);
  const [infoValues, setInfoValues] = useState(initialValues);
  const history = useHistory();

  // changeHandler
  const inputChange = (evt) => {
    evt.persist();
    setInfoValues({
      ...infoValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitLogin = (e) => {
      e.preventDefault()
      axios
      .post("",infoValues)
      .then(res=> {
          console.log(res)
          window.localStorage.setItem('token',res.data.token)
          console.log(res)
          if(res.data.role === "client"){
            history.push("/client");
          }
          else if(res.data.role === "instructor"){
            history.push("/instructor");
          }
      })
      .catch(err => {
          console.log(err.response)
      })
  }

  return (
  <>
    <h1>Login</h1>
    <form onSubmit={submitLogin}>
      <label>
        Username
        <input
          type = "text"
          name="username"
          value={infoValues.username}
          onChange={inputChange}
        />
      </label>

      <label>
        Password
        <input
          type = "password"
          name="password"
          value={infoValues.password}
          onChange={inputChange}
        />
      </label>

      <button className='loginBtn'>Login</button>
      <br/>
      <p>If you don't have account</p>
      <Link className='signUp' to = "/register">Please Sign Up</Link>
    </form>
  </>
  );
}


