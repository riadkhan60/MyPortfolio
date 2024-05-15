import { createContext, useState } from "react";

export const Context = createContext();

function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(null);

  function handleModal(e) {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  }
  return (
    <Context.Provider
      value={{ openModal, setOpenModal, handleModal }}
    >
      {children}
    </Context.Provider>
  );
}

export default ModalProvider;
