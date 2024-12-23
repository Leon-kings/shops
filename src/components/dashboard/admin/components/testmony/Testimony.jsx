import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from '../../../../../pages/form/action/FormInput';
React;

export default function Testimony() {
    const [values, setValues] = useState({
        email: "",
        testimony: "",
        name: ""
      });
      const Navigate = useNavigate();
     
      const inputs = [
    
    
        {
          id: 1,
          name: "email",
          type: "email",
          placeholder: "email",
          errorMessage: "email should be valid and should incloude @ symbols",
          label: "email",
          required: true
        },
        {
          id: 2,
          name: "name",
          type: "name",
          placeholder: "name",
          errorMessage: "name should be same as those you use to register",
          label: "Name",
          required: true
        },
    
        {
          id: 3,
          name: "testimony",
          type: "testimony",
          placeholder: "testimony",
          errorMessage: "testimony should be text",
          label: "testimony",
          required: true
        },
      ];
    
      // fetching data from database
      // handleSubmit
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
    
    
        try {
          await axios.post('https://backendproject-8m9r.onrender.com/testimony', values);
          alert('Testimony Received Successfully');
          Navigate('/5Eqi3pEyTJliNa7ANd9GcQN')
        } catch (error) {
          console.log(error);
          alert(error);
        }
    
      };
    
    
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      }
  return (
    <div>
         {/* Main Content */}
         <div className="flex-grow bg-gray-100 min-h-screen ">
              <form onSubmit={handleSubmit} className="form">
                <h2 className="title text-red-300">Testimony</h2>
                
                  {inputs.map((input) => (
                    <FormInput key={input.id} className="p-3"
                      {...input} value={values[input.name]}
                      onChange={onChange} />
                  ))}
                  <div className="head">
                    <button className="button">Submit</button>

                  </div>
                
              </form>
           
          
          </div>
    </div>
  )
}
