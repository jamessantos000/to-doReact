import React from 'react';
import './Tarefa.css';

function Tarefa({ tarefa, concluida, onRemover, onMarcarComoConcluida }) {
  return (
    <li className={`tarefa ${concluida ? 'concluida' : ''}`}>
      <span onClick={onMarcarComoConcluida}>{tarefa}</span>
      <button onClick={onRemover}>X</button>
    </li>
  );
}

export default Tarefa;