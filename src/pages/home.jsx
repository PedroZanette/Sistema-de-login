// src/App.jsx
import '../App.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const logar = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8090/api/usuarios', {
      username: username,
      password: password,
    });
    return response.data;
    
  } catch (error) {
    throw error;
  }
  
};


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const irPara= useNavigate();
  const handleLogin = async () => {
    try {
      const response = await logar(username, password);
      alert(response);
      if(response == true){
        irPara('/page');
      }
    } catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };
  const handleClick = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/cadas');
}
  return (
    <div>
      <h1>TrêsáNo login SyStem</h1>
      <form>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type='button' onClick={handleClick}>
          Ir para Cadastrar
        </button>
      </form>
    </div>
  );
}

export default App;
