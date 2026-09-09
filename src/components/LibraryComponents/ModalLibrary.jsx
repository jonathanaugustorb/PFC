import { X } from "lucide-react";

function ModalLibrary({ isOpen, children, setCloseModal }) {
  const BackEstilo = "fixed inset-0 bg-black/75 z-50";
  const modalEstilo =
    "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-400-50 px-5 py-2 border border-gray-300";

  if (isOpen) {
    return (
      <div className={BackEstilo}>
        <div className={modalEstilo}>
          {children}
          <div onClick={setCloseModal} className="text-white absolute top-4 right-4 hover:text-red-200 cursor-pointer">
            <X />
            
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default ModalLibrary;
