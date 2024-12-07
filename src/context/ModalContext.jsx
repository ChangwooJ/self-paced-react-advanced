import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const value = { detailModal, setDetailModal, addModal, setAddModal };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
