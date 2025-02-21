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
            src="data:image/jpeg;base64,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"
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
