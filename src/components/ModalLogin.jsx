import { X } from "lucide-react";

function ModalLogin({ isOpen, children, setCloseModal }) {
  const BackEstilo = "fixed inset-0 bg-black/75 z-50";
  const modalEstilo =
    "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-400-50 px-5 py-2 bg-white/5 backdrop-blur-xl border-gray-700 rounded-xl shadow-lg shadow-black/20 border";

  if (isOpen) {
    return (
      <div className={BackEstilo}>
        <div className={modalEstilo}>
          {children}
          <div
            onClick={setCloseModal}
            className="absolute top-4 right-4 hover:text-white hover:bg-red-200 cursor-pointer text-4xl"
          >
            <X />
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default ModalLogin;
