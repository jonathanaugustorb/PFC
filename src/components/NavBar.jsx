import { UserKey } from "lucide-react";
import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  isActive ? "text-2xl px-2 underline transition-all" : "transition-all";

function NavBar() {
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
        <NavLink
          to="/login"
          className="bg-red-500 rounded-md py-2 px-4 font-bold flex items-center gap-2"
        >
          Login
          <UserKey />
        </NavLink>
      </div>

      <div className="w-full h-px bg-gray-300"></div>
    </nav>
  );
}

export default NavBar;
