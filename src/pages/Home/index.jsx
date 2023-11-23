import "/src/App.css";
import React, { useState } from "react";

function Home() {
  const [professor, setProfessor] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [turma, setTurma] = useState("");
  const [horarios, setHorarios] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [selectedDisciplina, setSelectedDisciplina] = useState("");
  const [selectedTurma, setSelectedTurma] = useState("");

  const handleCadastroProfessor = () => {
    setHorarios([...horarios, { tipo: "Professor", nome: professor }]);
    setProfessor("");
  };

  const handleCadastroDisciplina = () => {
    setHorarios([...horarios, { tipo: "Disciplina", nome: disciplina }]);
    setDisciplina("");
  };

  const handleCadastroTurma = () => {
    setHorarios([...horarios, { tipo: "Turma", nome: turma }]);
    setTurma("");
  };

  const handleCadastroHorario = () => {
    const novoHorario = {
      professor: selectedProfessor,
      disciplina: selectedDisciplina,
      turma: selectedTurma,
    };

    setHorarios([...horarios, novoHorario]);

    setSelectedProfessor("");
    setSelectedDisciplina("");
    setSelectedTurma("");
  };

  return (
    <div className="cadastro-container">
      <div className="cadastros">
        <div className="cadastro-window">
          <h2>Cadastro Professor</h2>
          <input
            type="text"
            placeholder="Nome do Professor"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          />
          <button onClick={handleCadastroProfessor}>Cadastrar</button>
        </div>

        <div className="cadastro-window">
          <h2>Cadastro Disciplina</h2>
          <input
            type="text"
            placeholder="Nome da Disciplina"
            value={disciplina}
            onChange={(e) => setDisciplina(e.target.value)}
          />
          <button onClick={handleCadastroDisciplina}>Cadastrar</button>
        </div>

        <div className="cadastro-window">
          <h2>Cadastro Turma</h2>
          <input
            type="text"
            placeholder="Nome da Turma"
            value={turma}
            onChange={(e) => setTurma(e.target.value)}
          />
          <button onClick={handleCadastroTurma}>Cadastrar</button>
        </div>
      </div>

      <div className="lista-window">
        <h2>Cadastro de Horário</h2>
        <select onChange={(e) => setSelectedProfessor(e.target.value)}>
          <option value="">Selecione um Professor</option>
          {horarios
            .filter((item) => item.tipo === "Professor")
            .map((item, index) => (
              <option key={index} value={item.nome}>
                {item.nome}
              </option>
            ))}
        </select>

        <select onChange={(e) => setSelectedDisciplina(e.target.value)}>
          <option value="">Selecione uma Disciplina</option>
          {horarios
            .filter((item) => item.tipo === "Disciplina")
            .map((item, index) => (
              <option key={index} value={item.nome}>
                {item.nome}
              </option>
            ))}
        </select>

        <select onChange={(e) => setSelectedTurma(e.target.value)}>
          <option value="">Selecione uma Turma</option>
          {horarios
            .filter((item) => item.tipo === "Turma")
            .map((item, index) => (
              <option key={index} value={item.nome}>
                {item.nome}
              </option>
            ))}
        </select>

        <button onClick={handleCadastroHorario}>Cadastrar Horário</button>
      </div>

      <div className="lista-window">
        <div>
          <h2>Lista de Horários</h2>
          <ul>
            {horarios.map((item, index) => (
              <li key={index}>
                Professor: {item.professor}, Disciplina: {item.disciplina},
                Turma: {item.turma}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
