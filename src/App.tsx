import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/Login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadatroUsuario';
import Footer from './components/estaticos/footer/Footer';
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;