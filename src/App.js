import React from 'react';
import './App.css';

import  Header from './components/Header'
import  Balance  from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { Transactions } from './components/Transactions'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
      <Balance/>
      <AccountSummary/>
      <Transactions/>
      </div>
    </div>
  );
}

export default App;
