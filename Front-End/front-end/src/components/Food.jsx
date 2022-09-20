import React, { useEffect, useState } from 'react';

const Food = () => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/plato/getAll")
      .then(res => res.json())
      .then((data) => {
        setPlatos(data);
        console.log(data);
      }
      )
  }, [])

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-amber-600 font-bold text-4xl text-center'>
        Menu
      </h1>
      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {platos.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.foto}
              alt={item.nombre}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.nombre}</p>
              <p>
                <span className='bg-amber-600 text-white p-2 mr-2 rounded-full'>
                  ${item.precio}
                </span>
                <button className='bg-amber-600 text-white p-1.5 rounded-full'>
                    Agregar
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
