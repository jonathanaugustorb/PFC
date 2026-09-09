import api from "./api";

export async function listarGruposMusculares() {
  const { data } = await api.get("/exercicios/grupos-musculares");
  return data;
}

export async function listarNiveis() {
  const { data } = await api.get("/exercicios/niveis");
  return data;
}

export async function listarExercicios(){
  const { data } = await api.get("/exercicios");
  return data;
}
/**
 * @param {{
 *   nome: string,
 *   grupoMuscular: string,
 *   nivel: string,
 *   descricaoExecucao: string,
 *   errosComuns: string,
 *   aquecimentoRecomendado: string,
 *   equipamento: string,
 *   gifUrl: string
 * }} exercicio
 */
export async function criarExercicio(exercicio) {
  const { data } = await api.post("/exercicios", exercicio);
  return data;
}


