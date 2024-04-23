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
  const irPara = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await logar(username, password);
      alert(response);
      if (response == true) {
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
    <div >
      <h1 className='title'>TrêsáNo login SyStem</h1>
      <form className='form-container'>
        <div className='form-group'>
          <label>
            Usuário:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <div class="group">
            
              <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
              <input
              class='input'
              placeholder='Password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <br /> <br />
          <button
            type="button"
            onClick={handleLogin}>
            Login
          </button>
          <br /><br />
          <button type='button' onClick={handleClick}>
            Ir para Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
