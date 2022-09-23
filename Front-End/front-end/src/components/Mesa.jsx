import React, { useEffect, useState } from 'react';

const Mesa = () => {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/mesa/getAll")
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
        Mesas
      </h1>
      {/* Display foods */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-4'>
        {platos.map((item, index) => (
          <div class="flex justify-center">
          <div class="block rounded-lg shadow-lg bg-white max-w-sm w-56 text-center">
            <div class="py-3 px-6 border-b border-gray-300">
              Mesa N° {item.id_mesa}
            </div>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">{item.tipo_mesa}</h5>
              <p class="text-gray-700 text-base mb-4">
                {item.capacidad} personas
              </p>
              <button type="button" class=" inline-block px-6 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Reservar</button>
            </div>
            <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
            {item.estado}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Mesa;
