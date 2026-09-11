import { useState } from "react";
import FilterLibrary from "../components/LibraryComponents/FilterLibrary";
import CardsLibrary from "../components/LibraryComponents/CardsLibrary";
import LibraryHead from "../components/LibraryComponents/LibraryHead";

function LibraryPages() {
  const [grupoSelecionado, setGrupoSelecionado] = useState("");

  return (
    <div>
      <LibraryHead />
      <FilterLibrary
        grupoSelecionado={grupoSelecionado}
        aoSelecionar={setGrupoSelecionado}
      />
      <CardsLibrary grupoSelecionado={grupoSelecionado} />
    </div>
  );
}

export default LibraryPages;
