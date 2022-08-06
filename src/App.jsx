import React from 'react';
import Search from './components/search/Search.jsx';
import Board from './components/board/Board.jsx';
import './app.scss';

const App = () => (
  <main>
    <header className="header">
      <div className="header__logo"></div>
    </header>
    <Search />
    <Board />
  </main>
);

export default App;
