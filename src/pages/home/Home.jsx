import React from "react";
import Head from "../../universal/head/Head";
import Header from "../../universal/header/Header";

const Home = () => {
  return (
    <>
      <div className="container w-full ">
        {/* Header Video components*/}
        <div className="container">
            <div className="header">
               <Header />
            </div>
        </div>

        {/* end of nav part */}
        {/*  */}
        {/*  */}

        {/* head components start*/}
        <div className="container">

          <div className="container m-0">
            <Head />
          </div>
              <div className="card">
                <h2 className="text-2xl">Visit The LD shops and Bought Your Favourite 
                  Computers and Its Accessories To Brightify and Emplify Development 
                  of Digital Substain Technology , Also promotes Services Require 
                  Digital Technological Devices Expecially PC </h2>
              </div>
        </div>

        {/* end of head */}
        {/*  */}
        {/*  */}

        <div className="card">
          <div className="container">{/* <Header/> */}</div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Home;
