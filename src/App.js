import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import ChatComp from './ChatComp';

function App() {
  return (
    <div className="App">
     <div className="app__body">

     < Sidebar />

     < ChatComp />

     </div>
    </div>
  );
}

export default App;
