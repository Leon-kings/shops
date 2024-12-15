import React from "react";
import Head from "../../universal/head/Head";
import Header from "../../universal/header/Header";
import Package from "../../universal/packages/Package";
import Product from "../products/Product";
import Fquestion from "../fquestion/Fquestion";
import About from "../about/About";
import Login from "../form/login/Login";
import Register from "../form/register/Register";
import Services from "../services/Services";
React
const Home = () => {
  return (
    <>
      
            {/* Body space */}
      <div className="container px-0 py-0 mx-0">
        {/* general container */}
         {/* Head Body starts*/}
          <div className="head">
           {/* space btn nav and body */}
           <div className="title"></div>
          {/* space btn nav and body ends*/}
        {/* Header Video components*/}
      <div className="header">
       <div className="header">
        <Header />
         </div>
          </div> 
           </div>
            <hr className="p-3 text-2xl text-blue-600"/>
        {/* end of nav part */}
        {/*  */}
        {/*  */}
     

        {/* head components start*/}
        <div className="head">
        
          {/* space btn nav and body ends*/}
        {/* Header Video components*/}
      <div className="main">
       <div className="main">
        <Head />
         </div>
          </div> 
           </div>
        {/*  */}
        <hr className="p-3 text-2xl text-blue-600"/>
        <div className="head">
           {/* space btn nav and body */}
       
          {/* space btn nav and body ends*/}
        {/* Header Video components*/}
      <div className="header">
       <div className="header">
       <Product/>
         </div>
          </div> 
           </div>
           <hr className="p-3 text-2xl text-blue-600"/>
        {/* end of head */}
        {/*  */}
        {/*  */}
        <div className="head">
        
        {/* space btn nav and body ends*/}
      {/* Header Video components*/}
    <div className="main">
     <div className="main ">
      <Package/>
       </div>
        </div> 
         </div>
         <hr className="p-3 text-2xl text-blue-600"/>
         <div className="head">
        
        {/* space btn nav and body ends*/}
      {/* Header Video components*/}
    <div className="main">
     <div className="main ">
      <Fquestion/>
       </div>
        </div> 
         </div>
         {/*  */}
         <hr className="text-blue-600"/>
         <div className="head">
        
        {/* space btn nav and body ends*/}
      {/* Header Video components*/}
    <div className="main">
     <div className="main ">
      <About/>
       </div>
        </div> 
         </div>
         <hr className="text-blue-600"/>
         <div className="head">
        
        {/* space btn nav and body ends*/}
      {/* Header Video components*/}
    <div className="main grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
     <div className=" grid-cols-1 main ">
      <Login/>
       </div>
       <div className=" main ">
      <Register/>
       </div>
        </div> 
         </div>
         {/*  */}
         {/*  */}
         <hr className="p-3 text-2xl text-blue-600"/>
         <div className="head">
           {/* space btn nav and body */}
           <div className="title"></div>
          {/* space btn nav and body ends*/}
        {/* Header Video components*/}
      <div className="header">
       <div className="header">
        <Services />
         </div>
          </div> 
           </div>
            <hr className="p-3 text-2xl text-blue-600"/>



      </div>
    </>
  );
};

export default Home;
