

// src/App.jsx
import '../App.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
    
    const irPara = useNavigate();
    
    const [novoUsuario, setNovoUsuario] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNovoUsuario((prevUsuario) => ({
          ...prevUsuario,
          [name]: value,
        }));
      };

    
    const handleCadastro = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8090/api/cadastro', novoUsuario);
            setNovoUsuario({
                username: '',
                password: '',
            });
            alert("Usuário cadastrado")
        } catch (error) {
            console.error('Erro ao criar Usuário:', error);
        }
    };
    const handleClick = () => {
        // Navegar para a página Sobre ao clicar em algum botão
        irPara('/');
    }

    return (
        <div>
            <h1>TrêsáNo Cadastrar SyStem</h1>
            <form>
                <label>
                    Usuário:
                    <input
                        type="text"
                        name="username"
                        value={novoUsuario.username}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        type="password"
                        name="password"
                        value={novoUsuario.password}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type='submit' onClick={handleCadastro}>
                    Cadastrar
                </button>
                <button type="button" onClick={handleClick}>
                    ir para Login
                </button>

            </form>
        </div>
    );
}
export default App;
