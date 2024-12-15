
import React, { useState } from "react";
import FormInput from '../action/FormInput'
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
React;
const Register = () => {
  const [values, setValues] = useState({

    email: "",
    password: "",
    fullname: "",
    phone: ""

  });
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Names",
      errorMessage: "Names needed ",
      label: "Your Names",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email should be valid and should incloude @ symbols",
      label: "email",
      required: true
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "+250787944577",
      errorMessage: "Phone should start with country code +250",
      label: "Telephone",
      required: true
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "password should be 8-12 characters include at least 1 letter and 1 symbol",
      label: "password",
      pattern:"/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g",
      required: true
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post('https://backendproject-8m9r.onrender.com/users', values);
      if (window.confirm("Do you really want to continue to login?")) {
        Navigate("/login");
      }else{
        Navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const Navigate=useNavigate()
  const onChange = (e) => {

    setValues({ ...values, [e.target.name]: e.target.value });

  }
  return (
    <>
    <div className="title"></div>
  <div className="container flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 bg-white rounded shadow-md">

          <div className="Register">
            <form onSubmit={handleSubmit} >
              <div className="head">
                
                  <h2 className="text-green-400">Register</h2>
              </div>
              <div className="contain">
                {inputs.map((input) => (
                  <FormInput key={input.id} className="p-3"
                    {...input} value={values[input.name]}
                    onChange={onChange} />
                ))}
                <div className="head">
                  <button className="btn w-full">Submit</button>
                 
                  <p className="p-4">If you do have an account got 
                    <Link to="/login"><b> 
                      <button className="p-3">Login</button>
                      </b></Link> </p>
                      </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}
export default Register;