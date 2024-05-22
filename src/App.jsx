import './App.css';
import NotFound from './pages/NotFound';
import Dashboard from "./pages/Dashboard";
import Analyze from './pages/Analyze';
import Watchlist from "./pages/Watchlist";
import Portfolio from "./pages/Portfolio";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinPage from './pages/Coin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;