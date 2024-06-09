import axios from "axios";

// Cria uma instância do axios com a URL base configurada
const api = axios.create({
  baseURL: "http://localhost:8080/api"
});

async function getItens() {
        let response = await api.get('/cardapio');
        console.log(response.data);
    }

getItens();
export default api;
