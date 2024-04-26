

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
            irPara("/")
        } catch (error) {
            console.error('Erro ao criar Usuário:', error);
        }
    };
    const handleClick = () => {
        // Navegar para a página Sobre ao clicar em algum botão
        irPara('/');
    }

    return (
        <div >
            <h1 className='title'>Frango do G Cadastrar</h1>
            <form className='form-container'>
                <div className='form-group'>
                    <div class="group">
                        <svg stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-1">
                            <path d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>

                        <input
                            class='input'
                            placeholder='Username'
                            type="text"
                            name="username"
                            value={novoUsuario.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br />
                    <div class="group">
                        <svg stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
                            <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                        <input
                            
                            class='input'
                            placeholder='Password'
                            type="password"
                            name="password"
                            value={novoUsuario.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <br /><br />
                    <button type='submit' onClick={handleCadastro}>
                        Cadastrar
                    </button>
                    <br /><br />
                    <button type="button" onClick={handleClick}>
                        ir para Login
                    </button>
                </div>
            </form>
        </div>
    );
}
export default App;
