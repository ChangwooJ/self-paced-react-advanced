import { createContext, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [detailModal, setDetailModal] = useState({
    isOpen: false,
    restaurant: { name: "", description: "" },
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        detailModal: detailModal,
        setDetailModal: setDetailModal,
        isAddModalOpen,
        setIsAddModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
