import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import './form.css';

const App = () => {
  const [inputvalue, setInputvalue] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const onChangehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
// console.log(name,value)
    setInputvalue({ ...inputvalue, [name]: value });
  };

  const [data, setData] = useState([]);
 
  const[localvalue,setLocalvalue]=useState([]);
  const onhandlesubmit = (e) => {
    e.preventDefault();

    const newdata = { ...inputvalue, id: new Date().getTime().toString() };
 
    setData([...data, newdata]);
    console.log(newdata);
    setInputvalue({
      username: "",
      phone: "",
      email: "",
      password: "",
    })
 localvalue.push(newdata)
  setLocalvalue(localvalue)
   console.log(localvalue)
    localStorage.setItem('localvalue',JSON.stringify(localvalue));
  }; 
  //  const onhandleclick = ()=>{
  //   navigate('/dashboard')
  //  }

  return (
    <div className="container-fluid  "  >
      <div className="row  logo" >
        <div className="col-lg-4 col-md-6 col-sm-12 bg-info py-5 my-5 mx-auto">
          <form  action='' onSubmit={onhandlesubmit}>
            
            <h2 className="text-center">Registration Form</h2>
            <div className="form-outline mb-4">
              <input
                type="username"
                autoComplete="off"
                name="username"
                value={inputvalue.username}
                onChange={onChangehandler}
                id="username"
                className="form-control"
              />
              <label className="form-label" htmlFor="form2Example1">
                Username
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="number"
                autoComplete="off"
                name="phone"
                onChange={onChangehandler}
                value={inputvalue.phone}
                id="phone"
                className="form-control"
              />
              <label className="form-label" htmlFor="form2Example1">
                Phone Number
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="emai l"
                autoComplete="off"
                name="email"
                onChange={onChangehandler}
                value={inputvalue.email}
                id="email"
                className="form-control"
              />
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="password"
                autoComplete="off"
                name="password"
                value={inputvalue.password}
                onChange={onChangehandler}
                className="form-control"
              />
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>

            <button
              type="submit" 
                           className="btn btn-light btn-block mx-auto"
            >
              Register
            </button>

            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
          </div>
  );
};

export default App;
