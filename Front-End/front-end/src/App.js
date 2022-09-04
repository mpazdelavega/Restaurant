import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';

function App() {

  // const [jwt, setJwt] = useLocalState("","jwt");

  // useEffect(() => {
  //   console.log(`JWT is: ${jwt}`);
  // },[jwt]);

  

  return (
    <Routes>
      <Route path='/menu' element={
        <PrivateRoute>
          <Menu />
        </PrivateRoute>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>

    
    
  );
}

export default App;
