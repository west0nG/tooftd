import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import BusinessPage from './pages/BusinessPage';
import PreorderPage from './pages/PreorderPage';
import BehindScenesPage from './pages/BehindScenesPage';

function Layout() {
  const behindScenes = useLocation().pathname === '/behind-the-scenes';

  return (
    <div className={`app${behindScenes ? ' app--behind-scenes' : ''}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/preorder" element={<PreorderPage />} />
          <Route path="/behind-the-scenes" element={<BehindScenesPage />} />
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
