import { useEffect } from 'react';
import { Check } from './icons';
import './Toast.css';

export default function Toast({ open, message, onClose, duration = 3500 }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  return (
    <div
      className={`toast${open ? ' toast--open' : ''}`}
      role="status"
      aria-live="polite"
    >
      <span className="toast__icon"><Check size={14} /></span>
      <span className="toast__msg">{message}</span>
    </div>
  );
}
