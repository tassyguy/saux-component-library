import React from 'react';
import Button from '../../Button/src/Button';
import './Modal.css';
import { H3 } from '../../Header';

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback triggered when the modal should be closed */
  onClose: () => void;
  /** Optional title to display in the header */
  title?: string;
  /** The modal body content */
  children: React.ReactNode;
  /** Whether clicking the overlay should close the modal */
  closeOnOverlayClick?: boolean;
  /** Optional size of the modal (small, medium, large) */
  size?: 'small' | 'medium' | 'large';
  /** Additional className for custom styling */
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  closeOnOverlayClick = true,
  size = 'medium',
  className = '',
}) => {
  if (!open) return null;

  const sizeClass = `modal-${size}`;

  return (
    <div
      className="modal-overlay"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className={`modal-content ${sizeClass} ${className}`.trim()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          {title && <H3 text={title} />}
          <Button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
            label="×"
          />
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
