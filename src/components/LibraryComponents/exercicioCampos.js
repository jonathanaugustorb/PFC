export const EXERCICIO_VAZIO = {
  nome: "",
  grupoMuscular: "",
  nivel: "",
  descricaoExecucao: "",
  errosComuns: "",
  aquecimentoRecomendado: "",
  equipamento: "",
  gifUrl: "",
};

// Garante que o corpo enviado ao back tenha exatamente os campos do contrato,
// sem carregar junto id e outros dados que só o servidor controla.
export function exercicioParaFormulario(exercicio) {
  return Object.fromEntries(
    Object.keys(EXERCICIO_VAZIO).map((campo) => [campo, exercicio[campo] ?? ""]),
  );
}

export function validarExercicio(form) {
  if (
    !form.nome.trim() ||
    !form.grupoMuscular ||
    !form.nivel ||
    !form.descricaoExecucao.trim()
  ) {
    return "Preencha nome, grupo muscular, nível e Descrição de Execução do Exercício.";
  }

  return null;
}
