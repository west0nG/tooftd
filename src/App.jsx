import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BTSPage from './pages/BTSPage';
import CompetitiveAnalysisPage from './pages/CompetitiveAnalysisPage';
import PreorderPage from './pages/PreorderPage';

function Layout() {
  const location = useLocation();
  const isBTS = location.pathname === '/bts';
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bts" element={<BTSPage />} />
          <Route path="/competitive-analysis" element={<CompetitiveAnalysisPage />} />
          <Route path="/preorder" element={<PreorderPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer variant={isBTS ? 'dark' : 'light'} />
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
