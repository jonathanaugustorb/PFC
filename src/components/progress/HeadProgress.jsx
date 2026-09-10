function HeadProgress() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex gap-6">
      <div className="w-px bg-red-400 shrink-0"></div>

      <div id="div-cabecalho" className="flex flex-col gap-2 max-w-2xl">
        <h1 className="text-xs tracking-widest text-gray-300">
          FERRAMENTAS DE CÁLCULO
        </h1>
        <h2 className="font-montserrat text-white text-3xl lp:text-5xl">
          CALCULE SUAS MÉTRICAS
        </h2>
        <h3 className="text-gray-300 wrap-break-word">
          Digite seus números e receba o resultado na hora — cada métrica vem
          com o conceito explicado, para você entender o que está calculando.
        </h3>
      </div>
    </div>
  );
}

export default HeadProgress;
