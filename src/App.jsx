import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Market from './components/Market';
import Invest from './components/Invest';
import Story from './components/Story';
import ProductTeam from './components/ProductTeam';
import DevTeam from './components/DevTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Market />
        <Invest />
        <Story />
        <ProductTeam />
        <DevTeam />
      </main>
      <Footer />
    </div>
  );
}

export default App;
