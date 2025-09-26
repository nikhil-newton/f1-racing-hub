import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalContainer } from './styles/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DriversPage from './pages/DriversPage';
import DriverDetailPage from './pages/DriverDetailPage';
import NewsDetailPage from './pages/NewsDetailPage';
import TeamsPage from './pages/TeamsPage';
import CarsPage from './pages/CarsPage';
import CircuitsPage from './pages/CircuitsPage';
import CircuitDetailPage from './pages/CircuitDetailPage';
import RaceCalendarPage from './pages/RaceCalendarPage';
import ShopPage from './pages/ShopPage';
import ForumPage from './pages/ForumPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/drivers/:driverId" element={<DriverDetailPage />} />
            <Route path="/news/:newsId" element={<NewsDetailPage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/cars" element={<CarsPage />} />
            <Route path="/circuits" element={<CircuitsPage />} />
            <Route path="/circuits/:circuitId" element={<CircuitDetailPage />} />
            <Route path="/calendar" element={<RaceCalendarPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/forum" element={<ForumPage />} />
          </Routes>
          <Footer />
        </Router>
      </GlobalContainer>
    </ThemeProvider>
  );
}

export default App;