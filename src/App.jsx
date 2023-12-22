import './App.css';
// MainComponent.js

import React, { useState } from 'react';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        {/* + */}
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
