import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <Navbar />
      </header>
      <main className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/"><Homepage /></Route>
              <Route exact path="/exchanges"><Exchanges /></Route>
              <Route exact path="/cryptocurrencies"><Cryptocurrencies /></Route>
              <Route exact path="/crypto/:coinId"><CryptoDetails /></Route>
              <Route exact path="/news"><News /></Route>
            </Switch>
          </div>
        </Layout>
        <footer className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer>
      </main>
    </div>
  );
}

export default App;
