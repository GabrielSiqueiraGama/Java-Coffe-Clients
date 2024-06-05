import Footer from './pages/Footer.tsx';
import Franqueado from './pages/home/Franqueado.tsx';
import Header from './pages/Header.tsx';
import Lanche from './pages/home/Lanche.tsx';
import Gota from './pages/home/Gota.tsx';
import '../src/index.css';
function App() {
  return (
    <div className="body">
      <Header/>
      <Gota/>
      <Lanche/>
      <Franqueado/>
      <Footer/>
    </div>
  );
}

export default App;
