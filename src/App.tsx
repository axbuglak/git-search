import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import {FavouritesPage} from './pages/FavoritesPage';
import Navigation from './components/Navigation';

function App() {
  const APPLICATION_NAME = '/git-search'
  
  return (
    <>
     <Navigation></Navigation>
      <Routes>
        <Route path={APPLICATION_NAME} element={<HomePage />} />
        <Route path={APPLICATION_NAME + '/favorites'} element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
