function Footer() {
  return (
    <footer className="bg-slate-950 text-rose-200">
      <div className="w-full  h-px bg-gray-300"></div>
      <div className="font-montserrat flex gap-5 px-5 py-10">
        <h1 className="text-3xl flex">FORÇAMENTE</h1>
        <div className="w-px h-8 bg-gray-300 mx-6"></div>
        <ul className=" flex text-center justify-center gap-5 text-2xl">
          <li>Termos de Uso</li>
          <li>Metodologia</li>
          <li>Contato</li>
          <li className="text-left">&copy; 2026 ForçaMente.</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
