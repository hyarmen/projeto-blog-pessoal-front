import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadatroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/Login/Login';
import Navbar from './components/estaticos/navbar/Navbar';
import ListaTema from './components/temas/listatema/ListaTema';
import Footer from './components/estaticos/footer/Footer';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPost from './components/postagens/deletarPost/DeletarPost';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />

        <div className='vizu'>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/temas" element={<ListaTema />} />

            <Route path="/posts" element={<ListaPostagem />} />

            <Route path="/formularioPostagem" element={<CadastroPost />} />

            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

            <Route path="/formularioTema" element={<CadastroTema />} />

            <Route path="/formularioTema/:id" element={<CadastroTema />} />

            <Route path="/deletarPostagem/:id" element={<DeletarPost />} />

            <Route path="/deletarTema/:id" element={<DeletarTema />} />


          </Routes>
        </div>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;