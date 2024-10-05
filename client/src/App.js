import React from 'react';
import './App.css';
import Search from './Components/Search';
import NavMenu from './Components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Time Square.
      </header>
      <NavMenu />
      <Search />
    </div>
  );
}

export default App;