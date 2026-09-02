import axios from "axios";
 
const api = axios.create({
	baseURL: "https://farmacia-jk1x.onrender.com/",  
});

export const buscar = async (url: string) => {
	const resposta = await api.get(url);
	return resposta.data;
}

export const cadastrar = async (url: string, dados: object) => {
	const resposta = await api.post(url, dados);
	return resposta.data;
}

export const atualizar = async (url: string, dados: object) => {
	const resposta = await api.put(url, dados);
	return resposta.data;
}

export const deletar = async (url: string) => {
	await api.delete(url);
}

export default api;