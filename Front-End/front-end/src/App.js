import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Home from './components/Home';
import Navbar2 from './components/NavBar2';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';

function App() {

  // const [jwt, setJwt] = useLocalState("","jwt");

  // useEffect(() => {
  //   console.log(`JWT is: ${jwt}`);
  // },[jwt]);

  

  return (
    <Routes>
      <Route path='/menu' element={
        <PrivateRoute>
          <><NavBar/><Home/></>
        </PrivateRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Login />} />
      <Route path='/prueba' element={<><Navbar2/><Hero/><HeadlineCards/><Food/><Category/></>} />
      {/* <Route exact path='/home' element={<><NavBar/><Home/></>} /> */}
    </Routes>
    

    
    
  );
}

export default App;
