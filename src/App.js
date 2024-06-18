import Footer from './pages/Footer.tsx';
import NavBar from './pages/NavBar.tsx';
import NotFound from './pages/NotFound.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/index.css';
import Home from './pages/Home.tsx';
import FranqueadoPage from './pages/others/FranqueadoPage.tsx';
import Produto from './pages/others/Produto.tsx';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path ='/' element = {<Home/>}/>
        <Route path='/Home' element = {<Home/>}/>
        <Route path = '/Cardapio' element = {<Produto/>}/>
        <Route path='/Franqueado' element = {<FranqueadoPage />}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
