import axios from "axios";

// Criação da instância do axios, que será usada para fazer as requisições
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL base da API
});

// Tipos para os parâmetros das funções, para garantir que os dados sejam passados corretamente
type Dados = Object; // Representa os dados que serão enviados para a API
type SetDados = (dados: any) => void; // Função que será chamada para atualizar o estado com os dados recebidos da API
type Header = Object; // Representa os cabeçalhos (headers) que podem ser necessários para as requisições

// Função para cadastrar um novo usuário
export const cadastrarUsuario = async (
  url: string, // URL para onde a requisição será enviada
  dados: Dados, // Dados do usuário a ser cadastrado
  setDados: SetDados // Função que atualizará o estado com a resposta da requisição
) => {
  try {
    // Realiza uma requisição POST para o endpoint com os dados do usuário
    const resposta = await api.post(url, dados);

    // Atualiza o estado com os dados retornados pela API
    setDados(resposta.data);
  } catch (error) {
    // Em caso de erro, loga o erro no console
    console.error("Erro ao cadastrar usuário", error);
  }
};

// Função para realizar o login do usuário
export const login = async (
  url: string, // URL do endpoint de login
  dados: Dados, // Dados de login (geralmente email e senha)
  setDados: SetDados // Função para atualizar o estado com a resposta da API
) => {
  try {
    // Realiza uma requisição POST para o login
    const resposta = await api.post(url, dados);

    // Atualiza o estado com os dados retornados pela API (como um token ou informações do usuário)
    setDados(resposta.data);
  } catch (error) {
    // Em caso de erro no login, loga o erro no console
    console.error("Erro no login", error);
  }
};

// Função para buscar dados de um recurso específico
export const buscar = async (
  url: string, // URL do endpoint que retorna os dados
  setDados: SetDados, // Função para atualizar o estado com os dados retornados
  header: Header // Cabeçalhos (headers) que podem ser necessários, como autenticação
) => {
  try {
    // Realiza uma requisição GET para buscar os dados
    const resposta = await api.get(url, header);

    // Atualiza o estado com os dados recebidos da API
    setDados(resposta.data);
  } catch (error) {
    // Em caso de erro ao buscar os dados, loga o erro no console
    console.error("Erro ao buscar dados", error);
  }
};
export const cadastrar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: Object,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};
export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header);
};
