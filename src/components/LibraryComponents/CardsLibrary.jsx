import { useEffect, useState } from "react";
import { ImageOff } from "lucide-react";
import {
  listarExercicios,
  listarGruposMusculares,
  listarNiveis,
} from "../../services/exercicioService";
import CarrosselCards from "./CarrosselCards";

function montarDicionario(lista) {
  return Object.fromEntries(lista.map((item) => [item.codigo, item.descricao]));
}

function Mensagem({ children, variante }) {
  const estilo =
    variante === "erro"
      ? "rounded-md border border-red-500 p-3 text-red-200"
      : "text-gray-300";

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <p className={`text-center ${estilo}`}>{children}</p>
    </div>
  );
}

function ImagemExercicio({ src, alt }) {
  const [quebrada, setQuebrada] = useState(false);

  if (!src || quebrada) {
    return (
      <div className="flex h-28 w-28 items-center justify-center self-center text-gray-500">
        <ImageOff size={32} />
      </div>
    );
  }

  return (
    <div className="h-28 w-28 self-center">
      <img
        src={src}
        alt={alt}
        onError={() => setQuebrada(true)}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function CardsLibrary() {
  const [exercicios, setExercicios] = useState([]);
  const [gruposMusculares, setGruposMusculares] = useState({});
  const [niveis, setNiveis] = useState({});
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;

    Promise.all([listarExercicios(), listarGruposMusculares(), listarNiveis()])
      .then(([lista, grupos, niveisResposta]) => {
        if (!ativo) return;
        if (
          !Array.isArray(lista) ||
          !Array.isArray(grupos) ||
          !Array.isArray(niveisResposta)
        ) {
          throw new Error("Resposta inesperada do servidor.");
        }
        setExercicios(lista);
        setGruposMusculares(montarDicionario(grupos));
        setNiveis(montarDicionario(niveisResposta));
      })
      .catch((err) => {
        if (!ativo) return;
        setErro(err.mensagem || "Não foi possível carregar os exercícios.");
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
  }, []);

  if (carregando) return <Mensagem>Carregando exercícios...</Mensagem>;

  if (erro) return <Mensagem variante="erro">{erro}</Mensagem>;

  if (!exercicios.length) {
    return <Mensagem>Nenhum exercício cadastrado ainda.</Mensagem>;
  }

  return (
    <CarrosselCards>
      {exercicios.map((item) => {
        const { id, nome, grupoMuscular, nivel, gifUrl, equipamento } = item;

        return (
          <div
            key={id}
            className="box-border flex flex-col relative w-full md:w-[calc((100%_-_1.5rem)/2)] lp:w-[calc((100%_-_3rem)/3)] lg:w-[calc((100%_-_4.5rem)/4)] h-[26rem] rounded-xl
            p-4 snap-start border border-gray-700 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 gap-2 flex-none flex-nowrap overflow-hidden"
          >
            <div
              className=" rounded-md bg-red-500 px-2 py-1
                        text-xs font-medium text-white self-end"
            >
              <span>{gruposMusculares[grupoMuscular] ?? grupoMuscular}</span>
            </div>

            <ImagemExercicio src={gifUrl} alt={nome} />

            <div className="flex flex-col gap-1">
              <span className="font-montserrat text-xl text-red-200 wrap-break-word">
                {nome}{" "}
              </span>
              <span className="font-semibold text-white">{equipamento}</span>
              <span className="font-semibold text-1xl text-red-200">
                Dificuldade
              </span>
              <span className="font-semibold text-white">
                {niveis[nivel] ?? nivel}
              </span>
            </div>
            <div className="mt-auto text-center">
              <button className="bg-red-500 py-1 px-4 font-medium text-white max-w-2/3 hover:bg-red-900 cursor-pointer">
                VER TÉCNICA
              </button>
            </div>
          </div>
        );
      })}
    </CarrosselCards>
  );
}

export default CardsLibrary;
