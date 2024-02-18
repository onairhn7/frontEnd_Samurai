import React, { useState } from 'react';

const SamuraiForm = ({ onAddSamurai }) => {
  const [nombre, setNombre] = useState('');
  const [ataque, setAtaque] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSamurai({ nombre, ataque });
    setNombre('');
    setAtaque('');
  };

  return (
    <div>
      <h2>Agregar Nuevo Samurai</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Ataque:
          <input type="text" value={ataque} onChange={(e) => setAtaque(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Samurai</button>
      </form>
    </div>
  );
};

export default SamuraiForm;
