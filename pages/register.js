import React, { useState } from "react";
import Header from '../components/Header/Header';
import Head from 'next/head';
import axios from "axios";
import { AuthContextProvider } from "../components/Header/AuthContext.";

export default function Register() {

    const [registration, setRegistration] = useState({
    username: "",
    email: "",
    password: "",
    application_message:""
  });

    const[returnMessage,setReturnMessage] = useState("") 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRegistration((prevRegistration) => ({
      ...prevRegistration,
      [id]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post(
      '/api/register', registration
    )
      .then(res => {
        setRegistration(
          {
            username: "",
            email: "",
            password: "",
            application_message:""
          }
        );
        console.log(res)
        if(res.data.message === "User created successfully"){
          setReturnMessage("User has been created successfully.")
        } else if (res.data.message === 'Duplicate email address'){
          setReturnMessage(`Registration failed. An account already exists with this email or username. `)
        } 
      });
  };


  return (
    <>
      <Head>
        <title>Register - CloudCastle</title>
      </Head>
      <Header />
      <form className="register form">
      <div className="form-header">
        <h2> Submit your application today!</h2>
        <h3> Register </h3>
      </div>
      <div>{returnMessage}</div>
      <div className="form-group">
        <label className="form__label" htmlFor="username">
          User Name
        </label>
        <input
          className="form__input"
          type="text"
          value={registration.username}
          onChange={(e) => handleInputChange(e)}
          id="username"
          placeholder="User Name"
          required
        />
      </div>
      <div className="form-group">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form__input"
          value={registration.email}
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
          value={registration.password}
          onChange={(e) => handleInputChange(e)}
          placeholder="Password"
          required
          minLength="6"
        />
      </div>
      <div className="form-group">
        <label className="form__label" htmlFor="application_message">
          Application Message
        </label>
        <input
          className="form__input"
          type="text"
          id="application_message"
          value={registration.application_message}
          onChange={(e) => handleInputChange(e)}
          placeholder="Help us know you better"
        />
      </div>
      <footer>
        <button onClick={handleSubmit} type="submit" className="btn">
          Register
        </button>
      </footer>
    </form>
      
    </>
  );
}


// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [registration, setRegistration] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setRegistration((prevRegistration) => ({
//       ...prevRegistration,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     axios.post(
//       '/register', registration
//     )
//       .then(res => {
//         setRegistration(
//           {
//             userName: "",
//             email: "",
//             password: "",
//           }
//         );
//       });
//   };

//   return (

//   );
// }

// export default Register;
