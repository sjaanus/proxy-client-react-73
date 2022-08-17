import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useUnleashContext, useUnleashClient } from '@unleash/proxy-client-react'

function App() {
  const updateContext = useUnleashContext;
  console.log(updateContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
