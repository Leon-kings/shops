import React from 'react'
import IT from '../../../pages/information/IT';
import Sidebar from './components/sidebar/Side';
React;
const Dashboard = () => {
  return (
    <div>
     <div className="title"></div>
     <div className="nec">
      <Sidebar/>
     </div>
     <IT/>
    </div>
  )
}

export default Dashboard
