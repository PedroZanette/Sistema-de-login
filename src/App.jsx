// Importa o módulo React do pacote react
import React from 'react';
// Importa módulos específicos do pacote react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importa o componente Home da pasta 'pages'
import Home from './pages/home';
// Importa o componente Sobre da pasta 'pages'
import Pages from './pages/page';

import Cadas from './pages/cadas';
// Define a função do componente principal App
function App() {
  // Retorna a estrutura de roteamento usando o BrowserRouter
  return (
    <Router>
      {/* Define as rotas usando o componente Routes */}
      <Routes>
        {/* Rota para a página Home com o componente associado */}
        <Route path="/" element={<Home />} />        
       {/* Rota para a página About com o componente associado */}
        <Route path="/page" element={<Pages />} />

        <Route path="/cadas" element={<Cadas />} />
      </Routes>
    </Router>
  );
}
// Exporta o componente App como padrão
export default App;
