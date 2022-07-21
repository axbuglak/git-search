import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import {FavouritesPage} from './pages/FavoritesPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
     <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
