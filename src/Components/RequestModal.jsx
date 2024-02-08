import React from 'react';
import CreateRequestForm from './CreateRequestForm';

const RequestModal = ({ isOpen, onClose, onAddRequest }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <CreateRequestForm onAddRequest={onAddRequest} />
      </div>
    </div>
  );
};

export default RequestModal;
