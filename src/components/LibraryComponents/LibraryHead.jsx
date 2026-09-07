import { Search } from "lucide-react";

function LibraryHead() {
  return (
    <div className="py-4 flex justify-center gap-3">
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

      <div className="gap-2 flex px-2 py-3">
        <input
          type="search"
          placeholder="Pesquise"
          className=" text-center border-2 border-gray-200/50 rounded-2xl text-white"
        />
        <button className="text-red-200 p-2 bg-red-500 rounded-md hover:bg-red-900 cursor-pointer">
          <Search />
        </button>
      </div>
    </div>
  );
}

export default LibraryHead;
