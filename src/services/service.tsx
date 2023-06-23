import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://blogpessoal-4ccg.onrender.com/swagger-ui/index.html'
})

export const login = async(url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url,dados)
  setDado(resposta.data.token)
}