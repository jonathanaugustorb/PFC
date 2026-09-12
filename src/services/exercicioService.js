import api from "./api";

// MOCK TEMPORÁRIO: cobre apenas atualizar e excluir, enquanto o PUT e o DELETE
// não existem no back. Para remover, apague este bloco, os dois desvios
// "if (usarMock)" mais abaixo e a linha VITE_EXERCICIOS_MOCK do .env.
const usarMock = import.meta.env.VITE_EXERCICIOS_MOCK === "true";

function responderMock(dados) {
  return new Promise((resolve) => setTimeout(() => resolve(dados), 400));
}

export async function listarGruposMusculares() {
  const { data } = await api.get("/exercicios/grupos-musculares");
  return data;
}

export async function listarNiveis() {
  const { data } = await api.get("/exercicios/niveis");
  return data;
}

export async function listarExercicios() {
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

/**
 * O grupo muscular não pode ser alterado: vai no corpo com o valor original
 * apenas para o PUT substituir o recurso inteiro. Cabe ao back-end recusar
 * qualquer tentativa de trocá-lo.
 */
export async function atualizarExercicio(id, exercicio) {
  // Devolve o próprio corpo enviado para a tela seguir o caminho de sucesso.
  // Nada é gravado: recarregar a página traz os dados do back de volta.
  if (usarMock) return responderMock({ ...exercicio, id });

  const { data } = await api.put(`/exercicios/${id}`, exercicio);
  return data;
}

export async function excluirExercicio(id) {
  if (usarMock) return responderMock(undefined);

  await api.delete(`/exercicios/${id}`);
}
