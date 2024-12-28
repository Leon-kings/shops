import React from "react";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";
React;
export default function Testimonyview() {
  return (
    <>
      <div className="title">
        <br />
      </div>
      <div className="container bg-white rounded-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Fugiat alias, delectus voluptas nam sapiente cupiditate sunt. 
        Praesentium ut sunt ad velit omnis suscipit repellat iure quasi 
        dolores totam. Tempora, optio.
        <Link to={'/dashboard'}>
      <button><BsHouse/></button>
      </Link>
      </div>
    </>
  );
}
