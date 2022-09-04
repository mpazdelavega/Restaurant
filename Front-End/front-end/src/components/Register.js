import React, { useState } from 'react'
import usuarioService from '../service/usuario.service';

const Register = () => {
  
    // const [username, setUsername]=useState("");
    // const [password, setPassword]=useState("");

    const [usuario, setUsuario]=useState({
      username:"",
      password:""
    });

    const [errors, setErrors] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
      
    const handleChange = (e) => {
        const value = e.target.value;
        setUsuario({...usuario, [e.target.name]: value});
        //setErrors(validate(usuario));
        //setIsSubmit(true);
        // console.log(usuario)
    };
    

    const submitUsuario =(e) => {
        e.preventDefault();
        setIsSubmit(true);
        setErrors(validate(usuario));
        console.log(usuario)
        if(Object.entries(errors).length === 0 && isSubmit){
          usuarioService.saveUsuario(usuario)
          window.location.href = "login";
          console.log("Usuario registrado")
        } else {
          console.log("No se puede enviar el formulario porque posee errores")
        }
    };
    

    const validate = (values) => {
      const errors = {}
      const regex =  /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/i;
      if(!values.username) {
        errors.username = "Ingrese su email"
      } else if(!regex.test(values.username)){
        errors.username = "Formato de email invalido"
      }
      if(!values.password) {
        errors.password = "Ingrese su contraseña"
      } else if (values.password.length < 4) {
        errors.password = "La contraseña debe tener mas de 4 caracteres"
      }
      return errors;
    }

    
    // function submitUsuario(){
    //   fetch("usuario/add", {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "post",
    //     body: JSON.stringify({username, password}),
    //   })
    //     .then(() => {
    //       window.location.href = "login";
    //     })
    //     .catch((message) => {
    //       alert(message);
    //     });
    // }

    return (
    <div className="register min-h-screen bg-[#F2F4FE] flex items-center justify-center p-4">
    <div className="max-w-lg">
      <div className="flex justify-center mb-8">
      </div>
      <div className="bg-stone-700 w-full rounded-lg p-8 mb-8">
        <div className="flex flex-col items-center gap-1 mb-8">
          <h1 className="text-xl text-white">Crear cuenta</h1>
          <p className="text-gray-300 text-sm">
            Crea tu cuenta dentro de la plataforma y disfruta
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              className="w-full border py-2 px-10 rounded-md outline-none"
              placeholder="Ingresa tu nombre"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-amber-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <p className='text-red-600 text-xs italic mt-[-8]'>{errors.password}</p>
          <div className="relative">
            <input
              type="text"
              name="username"
              value={usuario.username}
              onChange={(e) => handleChange(e)}
              className="w-full border py-2 px-10 rounded-md outline-none"
              placeholder="Ingresa tu usuario"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-amber-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <p className='text-red-600 text-xs italic'>{errors.username}</p>
          <div className="relative mb-[-10]">
            <input
              type="password"
              name="password"
              value={usuario.password}
              onChange={(e) => handleChange(e)}
              className="w-full border py-2 px-10 rounded-md outline-none"
              placeholder="Ingresa tu contraseña"
            />
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute left-2 top-[50%] -translate-y-[50%] text-amber-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <p className='text-red-600 text-xs italic'>{errors.password}</p>
          <div>
            <button
              //type="submit"
              className="w-full bg-amber-900 py-2 px-4 text-white rounded-md hover:bg-amber-600 transition-colors"
              onClick={(e) => submitUsuario(e)}
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
      <span className="text-white flex items-center justify-center gap-2">
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="text-amber-600">
          Inicia sesión
        </a>
      </span>
    </div>
  </div>
  )
}

export default Register