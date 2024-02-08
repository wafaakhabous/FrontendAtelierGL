import React from 'react';

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`custom-modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomModal;
