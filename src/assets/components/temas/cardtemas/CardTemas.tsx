// Importação do componente Link para navegação entre páginas do React
import { Link } from "react-router-dom";

// Importação do modelo 'Tema' que representa o tipo de dados para o tema
import Tema from "../../../../models/Tema";

// Definindo a interface que descreve as propriedades que o componente 'CardTemas' vai receber
interface CardTemasProps {
  tema: Tema; // 'tema' é um objeto do tipo Tema
}

// Função do componente 'CardTemas' que recebe as propriedades como argumento
function CardTemas({ tema }: CardTemasProps) {
  return (
    // Estrutura principal do card (caixa com borda, flexível e com bordas arredondadas)
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      {/* Cabeçalho do card - Título */}
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        Tema
      </header>

      {/* Descrição do tema que vem do objeto 'tema' passado como propriedade */}
      <p className="p-8 text-3xl bg-slate-200 h-full">
        {tema.descricao} {/* Exibe a descrição do tema */}
      </p>

      {/* Container para os botões de ação (Editar e Deletar) */}
      <div className="flex">
        {/* Link para editar o tema - Estilizado com classes do Tailwind CSS */}
        <Link
          to={`/editartema/${tema.id}`}
          className="w-full text-slate-100 bg-	indigo-400 hover:bg-indigo-800 
    flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        {/* Link para deletar o tema - Estilizado com classes do Tailwind CSS */}
        <Link
          to={`/deletartema/${tema.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center"
        >
          {/* Botão de Deletar */}
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

// Exportando o componente para ser utilizado em outras partes da aplicação
export default CardTemas;
