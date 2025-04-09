import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RulesPage from './pages/RulesPage';
import TeamPage from './pages/TeamPage';
import WikiPage from './pages/WikiPage';
import AuthCallback from './pages/AuthCallback'; // Nowa strona

function App() {
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [maxPlayers, setMaxPlayers] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleDiscordAuth = () => {
    const clientId = '1359567979700027563';
    const redirectUri = encodeURIComponent('https://project-ud55.vercel.app/');
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
  };

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await axios.get('http://YOUR_SERVER_IP:30120/dynamic.json');
        setPlayerCount(response.data.clients);
        setMaxPlayers(response.data.sv_maxclients);
      } catch (error) {
        console.error('Failed to fetch player count:', error);
      }
    };

    fetchPlayerCount();
    const interval = setInterval(fetchPlayerCount, 60000);
    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'team':
        return <TeamPage handleDiscordAuth={handleDiscordAuth} />;
      case 'rules':
        return <RulesPage handleDiscordAuth={handleDiscordAuth} />;
      case 'wiki':
        return <WikiPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light text-white">
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleDiscordAuth={handleDiscordAuth}
          playerCount={playerCount}
          maxPlayers={maxPlayers}
        />

        <Routes>
          <Route path="/auth/discord/callback" element={<AuthCallback />} />
          <Route path="*" element={renderPage()} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
