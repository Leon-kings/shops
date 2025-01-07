import React, { useState } from "react";
import IT from "../../../pages/information/IT";
import Sidebar from "./components/sidebar/Side";
import Postview from "./components/postview/Postview";
import axios from "axios";
import FormInput from "../../../pages/form/action/FormInput";
import { BiSearch } from "react-icons/bi";
import { TrashIcon } from "@heroicons/react/16/solid";

React;
const Dashboard = () => {
  const [values, setValues] = useState({
    search: "",
  });
  const [search, setSearch] = useState([]);

  const inputs = [
    {
      id: 1,
      name: "search",
      type: "search",
      placeholder: "search user by ID",
      errorMessage: "ID required to Fetch User",
      required: true,
    },
  ];
  // fetching data from database
  // handleSubmit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Submitting with values:", values);

  //   try {
  //     const response = await axios.get(
  //       `https://shopsnodejs.onrender.com/users/${values}`
  //     );
  //     console.log("Response data:", response.data);

  //     if (response.data.data) {
  //       setSearch(response.data.data);
  //       console.log(response.data)
  //       alert("Fetched Successfully");
  //     } else {
  //       alert("No data found");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //     alert(
  //       "Error in fetching: " + (error.response?.data?.message || error.message)
  //     );
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    console.log("Submitting with values:", values);

    try {
      const response = await axios.get(
        `https://shopsnodejs.onrender.com/users/${values}`
      );
      console.log("Response data:", response.data);

      if (response.data.data) {
        setSearch(response.data.data); // Set fetched data
        alert("Fetched Successfully");
      } else {
        alert("No data found");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      alert(
        "Error in fetching: " + (error.response?.data?.message || error.message)
      );
    }
  };

  // Delete user
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm("Do you really want to Delete?")) {
        await axios.delete(
          `https://shopsnodejs.onrender.com/users/${values}`
        );
        setSearch(search.filter((user) => user._id !== values));
      } else {
        alert("Error in delete");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user:", error);
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="title">
        <br />
      </div>
      <div className=" w-full bg-white md:w-full lg:w-full xl:w-full">
        <div className="nec py-4">
          <form onSubmit={handleSubmit} className="justify-items-center">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                className="p-3"
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button className="button">
              <BiSearch className="text-green-400" />
            </button>
            {/* results */}
          </form>
          <div className="results">
            {search.map((data, index) => {
              <tr key={index} className="shadow-md border">
                <td className="p-2 text-black">{data.fullname}</td>
                <td className="p-2 text-red-400">{data.email}</td>
                <td className="p-2 text-black">{data.phone}</td>
                <td>
                  <button onClick={handleDelete}>
                    <TrashIcon className="w-6" />
                  </button>
                </td>
              </tr>;
            })}
          </div>
          <h3 className="text-center text-red-400 font-bold">USERS PAGE</h3>
          <Sidebar />
        </div>
        <div className="title"></div>
        <hr className="p-4 text-2xl text-blue-600" />
        <div className="title"></div>

        <IT />

        <h3 className="text-center text-red-400 font-bold">PRODUCT PAGE</h3>
        <Postview />
      </div>
    </>
  );
};

export default Dashboard;
