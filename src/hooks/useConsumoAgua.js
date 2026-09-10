import { useState } from "react";
import {
  consultarConsumoAgua,
  registrarConsumoAgua,
} from "../services/metricasService";
import {
  dataDeHoje,
  lerCacheConsumo,
  gravarCacheConsumo,
} from "../utils/cacheConsumoAgua";

function useConsumoAgua() {
  const data = dataDeHoje();
  const [resumo, setResumo] = useState(() => lerCacheConsumo(data));
  const [processando, setProcessando] = useState(false);
  const [erro, setErro] = useState(null);

  async function aplicar(requisicao) {
    setProcessando(true);
    setErro(null);

    try {
      const resposta = await requisicao();
      setResumo(resposta);
      gravarCacheConsumo(data, resposta);
      return resposta;
    } catch (falha) {
      setErro(
        falha?.mensagem ??
          "Não foi possível atualizar seu consumo de água. Tente novamente.",
      );
    } finally {
      setProcessando(false);
    }
  }

  function carregar(dados) {
    return aplicar(() => consultarConsumoAgua({ ...dados, data }));
  }

  function registrar(dados) {
    return aplicar(() => registrarConsumoAgua({ ...dados, data }));
  }

  return { resumo, processando, erro, carregar, registrar };
}

export default useConsumoAgua;
