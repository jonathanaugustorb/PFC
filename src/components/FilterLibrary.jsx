function FilterLibrary() {
  return (
    <div className="flex justify-center gap-4">
      <div>
        <h1 className="font-medium text-2xl text-red-200 space-x-4">
          Grupos Musculares:
        </h1>
      </div>
      <button className=" font-medium border-red-200 bg-red-500 text-white px-3">
        TODOS
      </button>
      <button className="text-red-200 border border-red-200 p-2 rounded-md">
        Peito
      </button>
      <button className="text-red-200 border border-red-200 p-2 rounded-md">
        Costas
      </button>
      <button className="text-red-200 border border-red-200 p-2 rounded-md">
        Pernas
      </button>
      <button className="text-red-200 border border-red-200 p-2 rounded-md">
        Ombros
      </button>
      <button className="text-red-200 border border-red-200 p-2 rounded-md">
        Braços
      </button>
    </div>
  );
}

export default FilterLibrary;
