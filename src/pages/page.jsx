import '../App.css'
// Importa o módulo React do pacote react
import React from 'react';
// Importa o hook useNavigate do pacote react-router-dom
import { useNavigate } from 'react-router-dom';
// Define a função do componente Home
function home() {
  // Obtém a função de navegação usando o hook useNavigate
  const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/');
  };
  // Retorna a estrutura JSX da página inicial
  return (
    <div>
      {/* Título da página inicial */}
      <h1>Página Inicial</h1>      
      <div>
        <img src="\src\assets\nhoque-de-batata-doce.jpeg" alt="Nhoque de Batata Doce" />
      </div>
      <br />
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleClick}>Ir para Home</button>
    </div>
  );
}
// Exporta o componente Home como padrão
export default home;
