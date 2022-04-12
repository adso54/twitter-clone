import React from 'react';
import './App.css';
import testData from './data.json'

import Sidebar from './components/sidebar/sidebar'
import Post from './components/post/post'
import Mainbar from './components/mainbar/mainbar'

function App() {
  return (
    <div className="App">
        <Mainbar />
        <Sidebar />
        <Post postData={testData.posts[0]} />
    </div>
  );
}

export default App;
