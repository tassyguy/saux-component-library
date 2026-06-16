import React, { useEffect, useId, useRef } from 'react';
import './Modal.css';
import { H3 } from '../../Header';

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback triggered when the modal should be closed */
  onClose: () => void;
  /** Optional title to display in the header. Used as the accessible name when present. */
  title?: string;
  /** Accessible name for the dialog when no title is rendered. */
  ariaLabel?: string;
  /** The modal body content */
  children: React.ReactNode;
  /** Whether clicking the overlay should close the modal */
  closeOnOverlayClick?: boolean;
  /** Whether pressing Escape should close the modal */
  closeOnEscape?: boolean;
  /** Optional size of the modal (small, medium, large) */
  size?: 'small' | 'medium' | 'large';
  /** Additional className for custom styling */
  className?: string;
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  ariaLabel,
  children,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  size = 'medium',
  className = '',
}) => {
  const titleId = useId();
  const contentRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    const content = contentRef.current;
    if (content) {
      const first = content.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      (first ?? content).focus();
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocusedRef.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const content = contentRef.current;
      if (!content) return;

      const focusables = Array.from(
        content.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => !el.hasAttribute('aria-hidden'));
      if (focusables.length === 0) {
        e.preventDefault();
        content.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && (active === first || !content.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, closeOnEscape, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        ref={contentRef}
        className={`modal-content modal-${size} ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={!title ? ariaLabel : undefined}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          {title && <H3 text={title} id={titleId} />}
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
