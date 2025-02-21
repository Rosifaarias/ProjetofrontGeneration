// Importa os hooks e componentes necessários
import { useContext } from "react"; // Permite acessar o contexto global da aplicação
import { Link, useNavigate } from "react-router-dom"; // Link para navegação sem recarregar a página e useNavigate para redirecionamento
import { AuthContext } from "../../../contexts/AuthContext"; // Importa o contexto de autenticação

function Navbar() {
  // Hook do React Router para navegar entre páginas
  const navigate = useNavigate();

  // Obtém a função handleLogout do contexto de autenticação
  const { handleLogout } = useContext(AuthContext);

  // Função para fazer logout do usuário
  function logout() {
    handleLogout(); // Chama a função de logout do contexto
    alert("O usuário foi desconectado com sucesso!"); // Exibe uma mensagem de sucesso
    navigate("/"); // Redireciona o usuário para a página inicial
  }

  return (
    <>
      {/* Navbar com fundo azul escuro e texto branco */}
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          {/* Link para a página inicial com estilo de título */}
          <Link to="/" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          {/* Links de navegação para diferentes seções */}
          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar tema
            </Link>
            {/* Botão de logout, chama a função logout ao ser clicado */}
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporta o componente para ser utilizado em outros arquivos
export default Navbar;
