import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [detailModal, setDetailModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const value = {
    state: { detailModal, addModal },
    actions: { setDetailModal, setAddModal },
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const { Consumer: ModalConsumer } = ModalContext;

export { ModalProvider, ModalConsumer };

export default ModalContext;
