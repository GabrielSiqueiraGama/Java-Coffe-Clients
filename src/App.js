import Footer from './pages/Footer.tsx';
import Franqueado from './pages/home/Franqueado.tsx';
import NavBar from './pages/NavBar.tsx';
import Lanche from './pages/home/Lanche.tsx';
import NotFound from './pages/NotFound.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/index.css';
import Home from './pages/Home.tsx';
import Produto from './pages/produtos/Produto.tsx';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path = '/Cardapio' element = {<Produto/>}/>
        <Route path='/Franqueado' element = {<Produto />}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
