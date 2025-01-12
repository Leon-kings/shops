import React from 'react'
import UCreateMessage from './components/message/CreateMessage';
import UCreatePost from './components/post/CreatePost';
import UCreateTestimony from './components/testmony/Testimony';
import USidebar from './components/sidebar/Side';
React;
export default function Udashboard() {
  return (
    <div>
        <UCreateMessage/>
        <UCreatePost/>
        <UCreateTestimony/>
        <USidebar/>
      
    </div>
  )
}
