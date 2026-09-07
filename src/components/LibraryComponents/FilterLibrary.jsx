function FilterLibrary() {
  const botao_style =
    "text-red-200 border border-gray-500 p-2 rounded-md hover:bg-red-500 hover:text-white cursor-pointer";
  return (
    <div className="flex justify-center gap-4">
      <div>
        <h1 className="font-medium text-2xl text-red-200 space-x-4">
          Grupos Musculares:
        </h1>
      </div>
      <button className={botao_style}>TODOS</button>
      <button className={botao_style}>Peito</button>
      <button className={botao_style}>Costas</button>
      <button className={botao_style}>Pernas</button>
      <button className={botao_style}>Ombros</button>
      <button className={botao_style}>Braços</button>
    </div>
  );
}

export default FilterLibrary;
