function CampoNumero({
  id,
  rotulo,
  valor,
  aoAlterar,
  min,
  step,
  placeholder,
  classeRotulo,
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <label
        htmlFor={id}
        className={`text-xs tracking-widest text-gray-300 ${classeRotulo ?? ""}`}
      >
        {rotulo}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        step={step}
        value={valor}
        placeholder={placeholder}
        onChange={(evento) => aoAlterar(evento.target.value)}
        className="w-full min-w-0 bg-transparent border-b border-gray-500 py-2 text-lg text-white outline-none focus:border-red-500"
      />
    </div>
  );
}

export default CampoNumero;
