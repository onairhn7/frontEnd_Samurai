import React, { useState } from 'react';
import SamuraiList from './SamuraiList';
import SamuraiForm from './SamuraiForm';

const App = () => {
  const [samurais, setSamurais] = useState([]);

  const handleAddSamurai = (newSamurai) => {
    setSamurais([...samurais, { id: samurais.length + 1, ...newSamurai }]);
  };

  return (
    <div>
      <h1>Aplicación de Samuráis</h1>
      <SamuraiList samurais={samurais} />
      <SamuraiForm onAddSamurai={handleAddSamurai} />
    </div>
  );
};

export default App;
