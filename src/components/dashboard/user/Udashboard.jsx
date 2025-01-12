import React from 'react'
import MyChart from './components/charts/Chart';
import MyBarChart from './components/charts/Barchart';
import Sidebar from './components/sidebar/Side';

React;
export default function Udashboard() {
  return (
<> <div className="title"></div>
    <div className='w-full container xl:w-full lg:w-full md:w-full sm:w-full'> 
   <Sidebar/>
      <div className="grid grid-cols-2 gap-2 ">
        <div className="head">
           <MyBarChart/>
        </div>
     <div className="head">
      <MyChart/>
     </div>
      </div>
    </div>
    </>
  )
}
