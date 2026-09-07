import CardsHome from "./components/CardsHome";

function App() {
  return (
    <div className="flex flex-col items-center p-1">
      <div className="">
        <img src="/images/logo_ofcial.png" alt="Logo" />
      </div>
      <div className="text-center font-montserrat text-white text-5xl">
        <h1>
          Mais que músculos, <span className="text-red-500">conhecimento</span>.
        </h1>
        <p className="text-lg mt-4 text-red-200">
          Treine com propósito. Estude com disciplina. Evolua com conhecimento.
        </p>
      </div>

      <div className="w-2/3 p-3">
        <CardsHome />
      </div>
    </div>
  );
}

export default App;
