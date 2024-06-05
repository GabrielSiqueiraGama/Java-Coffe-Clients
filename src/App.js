import Footer from './pages/Footer.tsx';
import Franqueado from './pages/home/Franqueado.tsx';
import Header from './pages/Header.tsx';
import Lanche from './pages/home/Lanche.tsx';
import Gota from './pages/home/Gota.tsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Gota/>
      <Lanche/>
      <Franqueado/>
      <Footer/>
    </div>
  );
}

export default App;
