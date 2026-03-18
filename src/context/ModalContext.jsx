import React from 'react';

export const ModalContext = React.createContext({ 
  modalOpen: false, 
  openModal: () => {}, 
  closeModal: () => {} 
});

export const useModal = () => React.useContext(ModalContext);

export const ModalProvider = ({ children, SmartFormModal }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{ modalOpen, openModal, closeModal }}>
      {children}
      {/* The actual modal component is passed as a prop to avoid circular imports 
          if the modal itself needs the context, though usually it doesn't. 
          Actually, let's just render the modal here if it's passed. */}
      {SmartFormModal && <SmartFormModal isOpen={modalOpen} onClose={closeModal} />}
    </ModalContext.Provider>
  );
};
