import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Populares from './Components/Populares/Populares';
import Ofertas from './Components/Ofertas/Ofertas';
import Sobre from './Components/Sobre/Sobre';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Populares />
      <Ofertas />
      <Sobre />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
