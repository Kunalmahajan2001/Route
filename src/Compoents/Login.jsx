import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData ={
      email,
      password
    }
    axios.post("https://reqres.in/api/login",userData)
    .then((response)=>{
      let token = response.data.token
      console.log(token)
      localStorage.setItem("token",token)
     })
     };
    
     return ( 
    <div>

      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label type="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;