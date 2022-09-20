import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { MdLogout, MdOutlineMenuBook} from 'react-icons/md'
import {IoCalendar} from 'react-icons/io5'

const Navbar2 = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Siglo <span className='font-bold text-amber-600'>XXI</span>
        </h1>
        
        <div className='hidden md:flex items-center bg-white rounded-full p-1 text-[14px]'>
        <p className='border-2 border-amber-600 font-bold text-amber-600 rounded-full p-2'>Mesa N°1</p>
        </div>
        
      </div>

      {/* Search Input 
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] md:w-[300px] lg:w-[400px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      */}
      {/* Cart button */}
      <button className='bg-amber-600 text-white hidden md:flex items-center py-2  rounded-full w-[100px]'>
        <MdOutlineMenuBook size={20} className='mr-1 ml-4' /> Menu
      </button>
      <button className='bg-amber-600 text-white hidden md:flex items-center py-2  rounded-full w-[120px]'>
        <IoCalendar size={20} className='mr-1 ml-4' /> Reservar
      </button>
      <button className='bg-amber-600 text-white hidden md:flex items-center py-2  rounded-full w-[120px]'>
        <BsFillCartFill size={20} className='mr-1 ml-4' /> Carro (1)
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Siglo <span className='font-bold text-amber-600'>XXI</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex cursor-pointer'><MdOutlineMenuBook size={25} className='mr-4 text-amber-600' /> Menu</li>
                <li className='text-xl py-4 flex cursor-pointer'><IoCalendar size={25} className='mr-4 text-amber-600' /> Reservar</li>
                <li className='text-xl py-4 flex cursor-pointer'><BsFillCartFill size={25} className='mr-4 text-amber-600' /> Carro</li>
                <li className='text-xl py-4 flex cursor-pointer'><MdLogout size={25} className='mr-4 text-amber-600'/> Cerrar Sesión</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;