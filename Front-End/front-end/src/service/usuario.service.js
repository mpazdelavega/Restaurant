import axios from "axios";

const BASE_API_URL="http://localhost:8080/usuario"

class UsuarioService{

    saveUsuario(usuario){
        return axios.post(BASE_API_URL+"/add",usuario);
    }

}

export default new UsuarioService();