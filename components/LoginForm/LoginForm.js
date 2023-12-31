import React, { useState } from "react";
import { useRouter } from 'next/router';

import axios from "axios";

const LoginForm = () => {

  // const router = useRouter();
  const router = useRouter();

  const [login_data, setLogin_data] = useState({
    email: "",
    password: "",
  });

  const[returnMessage,setReturnMessage] = useState("") 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLogin_data((prevState)=>{
      return{...prevState, [id]:value}
    })
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post('/api/login', login_data)
      .then(res => {
        setLogin_data(
          {
            email: "",
            password: "",
          }
        );
        if(res.data.user === null){
          setReturnMessage("Log in failed. Incorrect email and/or password.");
        } else {
          setReturnMessage(`You have logged in successfully. Redirecting to the front page in 5 seconds.`)
          setTimeout(() => {
            router.push('/');
          }, 5000); 
        } 
      });
  };

  return (
    <form className="register form">
      <h2>Login</h2>
      <div>{returnMessage}</div>
          <div className="form-group">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              value={login_data.email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={login_data.password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
              required
            />
          </div>
          <footer>
            <button onClick={handleSubmit} type="submit" className="btn">
              Login
            </button>
          </footer>
    </form>
  );
};

export default LoginForm; // Ensure you are exporting the component correctly

