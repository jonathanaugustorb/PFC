import { useEffect, useState } from "react";

function CardsLibrary() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/images/exercicios_academia.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <div className="min-h-max flex max-w-3xl mx-auto p-4 h-100 overflow-hidden overflow-x-auto space-x-10">
      {data.map((item) => {
        const { id, title, img, exercicio, auxiliares, dificuldade } = item;

        return (
          <div
            key={id}
            className="box-border flex flex-col relative w-75 h-100 sm:w-1/2 lg:w-1/3 rounded-md  
            p-4 snap-start border border-gray-500 gap-2 flex-none flex-nowrap"
          >
            <div
              className=" rounded-md bg-red-500 px-2 py-1
                        text-xs font-medium text-white self-end"
            >
              <span>{title}</span>
            </div>

            <div className="max-h-screen [50px] max-w-28 self-end">
              <img src={img} alt={title} />
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-montserrat text-xl text-red-200">
                {exercicio}{" "}
              </span>
              <span className="font-semibold text-white">{auxiliares}</span>
              <span className="font-semibold text-1xl text-red-200">
                Dificuldade
              </span>
              <span className="font-semibold text-white">{dificuldade}</span>
            </div>
            <div className="mt-auto text-center">
              <button className="bg-red-500 py-1 px-4 font-medium text-white max-w-2/3">
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
