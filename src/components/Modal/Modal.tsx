import React, { useState } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Production-ready email submission
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        // Clear the form and close modal on success
        setEmail('');
        onClose();
      } else {
        throw new Error('Failed to join waitlist');
      }
    } catch {
      // In production, you'd show an error message to the user
      // For now, we'll close the modal
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-star">✦</div>
        <h2>Join Stableuint waitlist</h2>
        <p>Become one of the first user and be notified about our launch</p>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;