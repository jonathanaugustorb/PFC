import { useEffect, useState } from "react";
import ModalLibrary from "./ModalLibrary";
import {
  criarExercicio,
  listarGruposMusculares,
  listarNiveis,
} from "../../services/exercicioService";

const FORM_INICIAL = {
  nome: "",
  caracteristicas: "",
  grupoMuscular: "",
  nivel: "",
  descricaoExecucao: "",
  errosComuns: "",
  aquecimentoRecomendado: "",
  equipamento: "",
  gifUrl: "",
};

function LibraryHead() {
  const [openModal, setOpenModaL] = useState(false);
  const [form, setForm] = useState(FORM_INICIAL);
  const [gruposMusculares, setGruposMusculares] = useState([]);
  const [niveis, setNiveis] = useState([]);
  const [carregandoOpcoes, setCarregandoOpcoes] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!openModal) return;

    let ativo = true;
    setCarregandoOpcoes(true);
    setErro(null);

    Promise.all([listarGruposMusculares(), listarNiveis()])
      .then(([grupos, niveisResp]) => {
        if (!ativo) return;
        if (!Array.isArray(grupos) || !Array.isArray(niveisResp)) {
          throw new Error("Resposta inesperada do servidor.");
        }
        setGruposMusculares(grupos);
        setNiveis(niveisResp);
      })
      .catch((err) => {
        if (!ativo) return;
        setErro(err.mensagem || "Não foi possível carregar as opções do formulário.");
      })
      .finally(() => {
        if (ativo) setCarregandoOpcoes(false);
      });

    return () => {
      ativo = false;
    };
  }, [openModal]);

  function fecharModal() {
    setOpenModaL(false);
    setForm(FORM_INICIAL);
    setErro(null);
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.nome.trim() || !form.grupoMuscular || !form.nivel) {
      setErro("Preencha nome, grupo muscular e nível antes de cadastrar.");
      return;
    }

    setEnviando(true);
    setErro(null);

    try {
      await criarExercicio(form);
      fecharModal();
    } catch (err) {
      setErro(err.mensagem || "Não foi possível cadastrar o exercício.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="py-4 flex justify-center gap-3">
      <div className="w-px h-8 bg-red-500 mx-6"></div>
      <div>
        <h1 className="font-bold text-4xl text-white">
          BIBLIOTECA DE EXERCÍCIOS
        </h1>
        <p className="font-bold text-red-200">
          Aprenda a executar cada exercício com técnica, consciência e
          segurança.
        </p>
      </div>

      <div className="gap-2 flex px-2 py-3 font-bold">
        <button
          onClick={() => setOpenModaL(true)}
          className=" bg-red-500 text-red-200 rounded-md cursor-pointer hover:bg-red-900 hover:text-white p-2"
        >
          {" "}
          Adicionar exercicio
        </button>
        <ModalLibrary isOpen={openModal} setCloseModal={fecharModal}>
          <form
            onSubmit={handleSubmit}
            className="fle p-4 text-2xl space-y-2 "
          >
            <div className="text-red-200 text-center font-montserrat">
              <h1>CRIAR EXERCICIO</h1>
            </div>
            <div className="w-full h-px bg-gray-300 mb-3"></div>

            {erro && (
              <p className="text-red-500 text-sm font-normal text-center">
                {erro}
              </p>
            )}

            <div className="flex flex-col bg text-red-200 gap-2 mb-6">
              <p className="text-red-200">Nome do Exercicio</p>
              <input
                type="text"
                id="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite"
                className="bg-gray-500 rounded-xl p-1 text-white"
              />
              <p>Caracteristicas do exercicio</p>
              <input
                type="text"
                id="caracteristicas"
                value={form.caracteristicas}
                onChange={handleChange}
                placeholder="Digite"
                className="bg-gray-500 rounded-xl p-1 text-white"
              />
            </div>
            <div className="text-red-200">
              <h2>Grupo Muscular</h2>
            </div>

            <div>
              <select
                className=" bg-gray-400 text-gray-300 mb-2 rounded-xl p-1"
                id="grupoMuscular"
                value={form.grupoMuscular}
                onChange={handleChange}
                disabled={carregandoOpcoes}
              >
                <option value="">
                  {carregandoOpcoes ? "Carregando..." : "Selecione"}
                </option>
                {gruposMusculares.map((grupo) => (
                  <option key={grupo.codigo} value={grupo.codigo}>
                    {grupo.descricao}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-red-200">
              <h2>Nivel</h2>
            </div>
            <select
              className=" w-auto bg-gray-400 mb-5  text-gray-300 rounded-xl p-1"
              id="nivel"
              value={form.nivel}
              onChange={handleChange}
              disabled={carregandoOpcoes}
            >
              <option value="">
                {carregandoOpcoes ? "Carregando..." : "Selecione"}
              </option>
              {niveis.map((nivel) => (
                <option key={nivel.codigo} value={nivel.codigo}>
                  {nivel.descricao}
                </option>
              ))}
            </select>
            <div className="w-full h-px bg-gray-300 mb-3"></div>

            <div className="flex flex-col text-red-200 gap-2 mb-6">
              <div>
                <p className="text-red-200">Descrição execução</p>
              </div>

              <input
                type="text"
                id="descricaoExecucao"
                value={form.descricaoExecucao}
                onChange={handleChange}
                placeholder="Digite"
                className="bg-gray-500 rounded-xl p-1 text-white"
              />
              <div>
                <p>Erros comuns</p>
              </div>

              <input
                type="text"
                id="errosComuns"
                value={form.errosComuns}
                onChange={handleChange}
                placeholder="Digite"
                className="bg-gray-500 rounded-xl p-1 text-white"
              />
              <div>
                <p>Aquecimento Recomendado</p>
              </div>

              <input
                type="text"
                id="aquecimentoRecomendado"
                value={form.aquecimentoRecomendado}
                onChange={handleChange}
                placeholder="Digite"
                className="bg-gray-500 rounded-xl p-1 text-white"
              />
              <div className="flex text-red-200 gap-2">
                <p>Equipamento</p>
              </div>
              <div className="flex text-red-200 gap-2">
                <input
                  type="text"
                  id="equipamento"
                  value={form.equipamento}
                  onChange={handleChange}
                  placeholder="Digite"
                  className="bg-gray-500 rounded-xl p-1 text-white"
                />
                <div className="flex text-red-200 gap-2">
                  <p>Gif</p>
                </div>
                <div className="flex text-red-200 gap-2">
                  <input
                    type="text"
                    id="gifUrl"
                    value={form.gifUrl}
                    onChange={handleChange}
                    placeholder="URL do gif"
                    className="bg-gray-500 rounded-xl p-1 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-900 py-2 px-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {" "}
                {enviando ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </form>
        </ModalLibrary>
      </div>
    </div>
  );
}

export default LibraryHead;
