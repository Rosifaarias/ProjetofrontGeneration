import { Link } from "react-router-dom";
import Postagem from "../../../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagensProps) {
  // Formatação da data
  const formattedDate = new Intl.DateTimeFormat(undefined, {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date(postagem.data));

  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        {/* Cabeçalho com informações do usuário */}
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img
            //src={postagem.usuario?.foto}
            src="src\assets\components\postagens\cardpostagens\admin_icon.webp"
            className="h-12 rounded-full"
            alt={postagem.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.usuario?.nome}
          </h3>
        </div>

        {/* Conteúdo da postagem */}
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao}</p>
          <p>Data: {formattedDate}</p>
        </div>
      </div>

      {/* Ações de editar e deletar */}
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
