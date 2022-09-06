import React from 'react';

const Home = () => {
    
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-stone-900 via-stone-900 to-stone-600'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
          <h2 className='text-4xl sm:text-4xl md:text-7xl font-bold text-white'>
            Menu
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home