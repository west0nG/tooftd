import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import BusinessPage from './pages/BusinessPage';
import PreorderPage from './pages/PreorderPage';

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/preorder" element={<PreorderPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
