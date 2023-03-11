import React, { useState } from 'react';
import Tarefa from './Tarefa';
import './ListaDeTarefas.css';

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') {
      return;
    }

    setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
    setNovaTarefa('');
  }

  function removerTarefa(index) {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  }

  function marcarTarefaComoConcluida(index) {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = true;
    setTarefas(novasTarefas);
  }

  return (
    <div className="lista-de-tarefas">
      <div className="adicionar-tarefa">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              adicionarTarefa();
            }
          }}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Tarefa
            key={index}
            tarefa={tarefa.texto}
            concluida={tarefa.concluida}
            onRemover={() => removerTarefa(index)}
            onMarcarComoConcluida={() => marcarTarefaComoConcluida(index)}
          />
        ))}
      </ul>
      <div className="status">
        <p>
          Concluídas: {tarefas.filter((tarefa) => tarefa.concluida).length}
        </p>
        <p>Não concluídas: {tarefas.filter((tarefa) => !tarefa.concluida).length}</p>
      </div>
    </div>
  );
}

export default ListaDeTarefas;
