// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import NavBar from './components/NavBar';
import EquityPage from './pages/Equity/EquityPage';
import AnalyticsPage from './pages/Analytics/AnalyticsPage';
import FixedIncomePage from './pages/FixedIncome/FixedIncomePage';
import MyAccountsPage from './pages/MyAccounts/MyAccountsPage';
import NewsroomPage from './pages/Newsroom/NewsroomPage';
import ResearchPage from './pages/Research/ResearchPage';
import MarketDataPage from './pages/MarketData/MarketDataPage';
import LiquidityPage from './pages/Liquidity/LiquidityPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<EquityPage />} />
          <Route path="/fixedincome" element={<FixedIncomePage />} />
          <Route path="/myaccounts" element={<MyAccountsPage />} />
          <Route path="/newsroom" element={<NewsroomPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/marketdata" element={<MarketDataPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/liquidity" element={<LiquidityPage />} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
