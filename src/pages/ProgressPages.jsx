import { useState } from "react";
import HeadProgress from "../components/progress/HeadProgress";
import AvisoLegal from "../components/progress/AvisoLegal";
import VolumeTreino from "../components/progress/VolumeTreino";
import CalculadoraTMB from "../components/progress/CalculadoraTMB";
import CalculadoraHidratacao from "../components/progress/CalculadoraHidratacao";
import RodapeProgress from "../components/progress/RodapeProgress";

function ProgressPages() {
  const [pesoKg, setPesoKg] = useState("");

  return (
    <div className="my-10 flex flex-col">
      <HeadProgress />
      <AvisoLegal />
      <VolumeTreino />
      <CalculadoraTMB pesoKg={pesoKg} aoAlterarPeso={setPesoKg} />
      <CalculadoraHidratacao pesoKg={pesoKg} aoAlterarPeso={setPesoKg} />
      <RodapeProgress />
    </div>
  );
}

export default ProgressPages;
