import React, {useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Welcome from './pages/Welcome/Welcome';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop'
import NotFound from './pages/NotFound/NotFound'
import Profile from './pages/Profile/Profile';
import VendorFoods from './components/VendorFoods/VendorFoods';
import AuthContext from './store/auth-context';
import Tray from './pages/Tray/Tray';

function App() {

  const authCtx = useContext(AuthContext)

  return (
    <div className="App">
    
      <Routes>
        <Route path = '/' element = {<Welcome />} />
        <Route path = '/signup' element = { !authCtx.isLoggedIn ? <SignUp /> : <Welcome />} />
        <Route path = '/signin' element = { !authCtx.isLoggedIn ? <SignIn /> : <Welcome />} />
        <Route path='/about' element={<About />} />
        <Route path = '/tray' element = {<Tray />} />
        <Route path = '/shop/:vendorId' element = {<VendorFoods />} />
        <Route path = '/shop' element = { !authCtx.isLoggedIn ? <SignIn /> : <Shop />} />
        <Route path = '/profile' element = { authCtx.isLoggedIn ? <Profile /> : <Welcome />} />
        <Route path = '*' element = {<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
