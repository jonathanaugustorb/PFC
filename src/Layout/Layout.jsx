import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
