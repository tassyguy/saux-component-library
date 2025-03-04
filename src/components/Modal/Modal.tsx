import React from "react";
import "./Modal.css";

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback triggered when the modal should be closed */
  onClose: () => void;
  /** Optional title to display in the header */
  title?: string;
  /** The modal body content */
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;

  // Clicking the overlay closes the modal, but clicking inside content does not.
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {title && <h3>{title}</h3>}
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
