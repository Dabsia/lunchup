import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Welcome from './pages/Welcome/Welcome';
import About from './pages/About/About';



function App() {

  return (
    <div className="App">
    
      <Routes>
        <Route path = '/' element = {<Welcome />} />
        <Route path = '/signup' element = {<SignUp />} />
        <Route path = '/signin' element = {<SignIn />} />
        <Route path = '/about' element = {<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
