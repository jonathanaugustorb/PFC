import { NavLink } from "react-router-dom";

import { UserKey } from "lucide-react";
import ModalLogin from "./ModalLogin";
import { useState } from "react";

const linkClass = ({ isActive }) =>
  isActive ? "text-2xl px-2 underline transition-all" : "transition-all";

function NavBar() {
  const [openModal, setOpenModaL] = useState(false);
  return (
    <nav className="font-montserrat text-rose-200 w-full">
      <div className="flex items-center px-6 py-4">
        <h1 className="text-3xl p-4">FORÇAMENTE</h1>
        <div className="w-px h-8 bg-gray-300 mx-6"></div>
        <div className="flex font-bold flex-1 justify-center gap-10">
          <NavLink to="/" end className={linkClass}>
            HOME
          </NavLink>
          <NavLink to="/library" className={linkClass}>
            BIBLIOTECA
          </NavLink>
          <NavLink to="/progress" className={linkClass}>
            PROGRESSO
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            QUEM SOMOS
          </NavLink>
        </div>
        <div className="w-px h-8 bg-gray-300 mx-6"></div>
        <button
          onClick={() => setOpenModaL(true)}
          className="bg-red-500 rounded-md py-2 px-4 font-bold flex items-center gap-2 hover:bg-red-900 cursor-pointer"
        >
          Login
          <UserKey />
        </button>
        <ModalLogin
          isOpen={openModal}
          setCloseModal={() => setOpenModaL(!openModal)}
        >
          <form className="flex flex-col gap-3 items-center">
            <h2 className="text-red-200 font-montserrat text-2xl">LOGIN</h2>
            <input
              type="text"
              placeholder="Digite usuario"
              className="bg-black-75 text-white font-light rounded-xl border-2 border-gray-400 p-1"
            />
            <input
              type="password"
              placeholder="Digite a senha"
              className="bg-black-75 text-white font-light rounded-xl border-2 border-gray-400 p-1"
            />
            <div className="flex text-sm font-medium text-red-200 gap-4">
              <p>Esqueceu a senha?</p>
              <p>Cadastra-se</p>
            </div>
            <button
              type="submit"
              className="w-1/3 bg-red-500 text-red-200 rounded-md cursor-pointer hover:bg-red-900 hover:text-white py-2"
            >
              {" "}
              Entrar
            </button>
          </form>
        </ModalLogin>
      </div>

      <div className="w-full h-px bg-gray-300"></div>
    </nav>
  );
}

export default NavBar;
