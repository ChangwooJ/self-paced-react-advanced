import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    isOpen: false,
    restaurant: { name: "", description: "" },
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, setModal, isAddModalOpen, setIsAddModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
