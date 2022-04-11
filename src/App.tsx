import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import Post from './components/post/post'
import testData from './data.json'

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Post postData={testData.posts[0]} />
    </div>
  );
}

export default App;
