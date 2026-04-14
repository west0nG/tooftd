import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlackKeyFilter from './components/BlackKeyFilter';
import HomePage from './pages/HomePage';
import BTSPage from './pages/BTSPage';
import CompetitiveAnalysisPage from './pages/CompetitiveAnalysisPage';
import PreorderPage from './pages/PreorderPage';

function Layout() {
  return (
    <div className="app">
      <BlackKeyFilter />
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
