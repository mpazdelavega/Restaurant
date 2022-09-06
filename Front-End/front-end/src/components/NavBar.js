import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { useLocalState } from "../util/useLocalStorage";

const NavBar = () => {

  

  const [jwt, setJwt] = useLocalState("", "jwt");

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'mesa'
    },
    {
      id: 2,
      link: 'menu'
    },
    {
      id: 3,
      link: 'reservar'
    },
    {
      id: 4,
      link: 'perfil'
    },
  ]
    
		

  return (
    <div className='z-10 flex justify-between items-center w-full h-20 px-4 text-gray-300 bg-stone-900 fixed'>
      <div>
        <h1 className='ml-2 text-gray-300'>Restaurant Siglo  XXl</h1>
      </div>

      <ul className='hidden md:flex'>

        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-amber-600 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
        <li
            onClick={() => {
              setJwt("");
              window.location.href = "/login";
            }}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-amber-600 duration-200'>
            Cerrar Sesión
          </li>
          
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>


      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-stone-600 to-stone-900 text-gray-500'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}



    </div>
  )
};

export default NavBar;
