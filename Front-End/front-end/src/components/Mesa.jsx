import React, { useEffect, useState } from "react";
//import mesa1 from '../img/mesa1.jpg';


const Mesa = () => {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/mesa/getAll")
      .then((res) => res.json())
      .then((data) => {
        setMesas(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-amber-600 font-bold text-4xl text-center">Mesas</h1>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {mesas.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            
            <img
              
              src={item.foto}
              alt="{item.descripcion}"
              className="w-full h-[200px] object-cover rounded-t-lg"
              />
            
            {/* {item.tipo_mesa.map((tipo_mesa, index) => (
              <img
                key={index}
                src={tipo_mesa.foto}
                alt={tipo_mesa.descripcion}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
            ))}*/}

            <div className="flex justify-between px-2 py-4">
              <p className="font-bold"></p>
              <p>
                <span className="bg-amber-600 text-white p-2 mr-2 rounded-full">
                  Mesa N°{item.id_mesa}
                </span>
                <span className="bg-amber-600 text-white p-2 mr-2 rounded-full">
                  {item.capacidad} Personas
                </span>
                <span className="bg-amber-600 text-white p-2 mr-2 rounded-full">
                  {item.estado}
                </span>
                {item.estado === "Disponible" ? <button
                  className="bg-green-600 hover:bg-green-900 transition-colors text-white p-1.5 rounded-full"
                >
                  Reservar
                </button> : <button
                  className="bg-gray-500 text-gray-300 p-1.5 rounded-full disabled"
                >
                  Reservar
                </button>}
                
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mesa;
