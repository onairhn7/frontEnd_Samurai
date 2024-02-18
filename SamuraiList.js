import React from 'react';

const SamuraiList = ({ samurais }) => {
  return (
    <div>
      <h2>Listado de Samuráis</h2>
      <ul>
        {samurais.map((samurai) => (
          <li key={samurai.id}>
            {samurai.nombre} - {samurai.ataque}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SamuraiList;
