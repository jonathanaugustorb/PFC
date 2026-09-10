import api from "./api";
import { listarExercicios } from "./exercicioService";
import {
  niveisAtividadeMock,
  sexosMock,
  exerciciosMock,
  gastoEnergeticoMock,
  hidratacaoMock,
  consumoAguaMock,
  volumeTreinoMock,
} from "./mocks/metricasMock";

const usarMock = import.meta.env.VITE_METRICAS_MOCK === "true";

function responderMock(dados) {
  return new Promise((resolve) => setTimeout(() => resolve(dados), 400));
}

export async function listarNiveisAtividade() {
  if (usarMock) return responderMock(niveisAtividadeMock);
  const { data } = await api.get("/metricas/niveis-atividade");
  return data;
}

export async function listarSexos() {
  if (usarMock) return responderMock(sexosMock);
  const { data } = await api.get("/metricas/sexos");
  return data;
}

export async function calcularGastoEnergetico(dados) {
  if (usarMock) return responderMock(gastoEnergeticoMock(dados));
  const { data } = await api.post("/metricas/gasto-energetico", dados);
  return data;
}

export async function calcularHidratacao(dados) {
  if (usarMock) return responderMock(hidratacaoMock(dados));
  const { data } = await api.post("/metricas/hidratacao", dados);
  return data;
}

export async function listarExerciciosParaVolume() {
  if (usarMock) return responderMock(exerciciosMock);
  return listarExercicios();
}

export async function consultarConsumoAgua(dados) {
  if (usarMock) return responderMock(consumoAguaMock(dados));
  const { data } = await api.post("/metricas/hidratacao/consumo/dia", dados);
  return data;
}

export async function registrarConsumoAgua(dados) {
  if (usarMock) return responderMock(consumoAguaMock(dados));
  const { data } = await api.post("/metricas/hidratacao/consumo", dados);
  return data;
}

export async function calcularVolumeTreino(dados) {
  if (usarMock) return responderMock(volumeTreinoMock(dados));
  const { data } = await api.post("/metricas/volume-treino", dados);
  return data;
}
