import { useEffect, useState } from "react";
import { listarExercicios } from "../../services/exercicioService";

function CardsLibrary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    listarExercicios().then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <div className="w-full flex mx-auto p-4 overflow-hidden overflow-x-auto space-x-4 md:space-x-6 lp:space-x-8 lg:w-2/3">
      {data.map((item) => {
        const { id, nome, grupoMuscular, nivel, gifUrl, equipamento } = item;

        return (
          <div
            key={id}
            className="box-border flex flex-col relative w-64 h-96 md:w-72 md:h-[26rem] lp:w-80 lp:h-[28rem] lg:w-96 lg:h-[30rem] rounded-md
            p-3 md:p-4 snap-start border border-gray-500 gap-2 flex-none flex-nowrap"
          >
            <div
              className=" rounded-md bg-red-500 px-2 py-1
                        text-xs font-medium text-white self-end"
            >
              <span>{grupoMuscular}</span>
            </div>

            <div className="max-h-screen [50px] max-w-28 self-center">
              <img src={gifUrl} alt={nome} />
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-montserrat text-xl text-red-200">
                {nome}{" "}
              </span>
              <span className="font-semibold text-white">{equipamento}</span>
              <span className="font-semibold text-1xl text-red-200">
                Dificuldade
              </span>
              <span className="font-semibold text-white">{nivel}</span>
            </div>
            <div className="mt-auto text-center">
              <button className="bg-red-500 py-1 px-4 font-medium text-white max-w-2/3 hover:bg-red-900 cursor-pointer">
                VER TÉCNICA
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsLibrary;
