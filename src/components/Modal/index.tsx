import { Component, ReactNode, useState, useEffect } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
}

export function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  const [ modalStatus, setModalStatus ] = useState(false);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={() => setIsOpen(true)}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
  )
}