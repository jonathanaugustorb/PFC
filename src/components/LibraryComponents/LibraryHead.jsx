import { Search } from "lucide-react";

function LibraryHead() {
  return (
    <div className="py-4 flex justify-center">
      <div className="w-px h-8 bg-red-500 mx-6"></div>
      <div>
        <h1 className="font-bold text-4xl text-white">
          BIBLIOTECA DE EXERCÍCIOS
        </h1>
        <p className="font-bold text-red-200">
          Aprenda a executar cada exercício com técnica, consciência e
          segurança.
        </p>
      </div>

      <div className=" gap-2 py-6 flex  ">
        <input
          type="search"
          placeholder=""
          className="border-2 border-gray-200/50 rounded-md text-white"
        />
        <button className="text-white p-2 bg-red-300 rounded-md">
          <Search />
        </button>
      </div>
    </div>
  );
}

export default LibraryHead;
