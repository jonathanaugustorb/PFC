function CardsHome() {
  return (
    <div className="grid grid-cols-4 justify-center  border border-gray-400 gap-2 min-h-150 w-auto p-2 rounded-md">
      <div className="text-2xl text-white font-medium text-center border-x p-3">
        <div className=" rounded-md align-middle">
          <img
            className="mx-auto"
            src="https://placehold.co/300x200/6366f1/ffffff?text=Produto"
            alt=""
          />

          <span>
            Aprenda sobre exercícios, execução e princípios do treinamento.
          </span>
        </div>
      </div>
      <div className="text-2xl text-white font-medium text-center border-x p-3">
        <div className="items-center">
          <img
            className="mx-auto"
            src="https://placehold.co/300x200/6366f1/ffffff?text=Produto"
            alt=""
          />
        </div>

        <span>
          Entenda os músculos envolvidos e como eles participam dos movimentos.
        </span>
      </div>
      <div className="text-2xl text-white font-medium text-center border-x p-3">
        <div className="">
          <img
            className="mx-auto"
            src="https://placehold.co/300x200/6366f1/ffffff?text=Produto"
            alt=""
          />
        </div>

        <span>
          Conheça boas práticas para reduzir riscos durante o treinamento.
        </span>
      </div>
      <div className="text-2xl text-white font-medium text-center border-x p-3">
        <div className="items-center">
          <img
            className="mx-auto"
            src="https://placehold.co/300x200/6366f1/ffffff?text=Produto"
            alt=""
          />
        </div>

        <span>
          Informações sobre hábitos que contribuem para uma vida mais ativa e
          saudável.
        </span>
      </div>
    </div>
  );
}

export default CardsHome;
