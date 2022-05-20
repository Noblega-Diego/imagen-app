import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DemoBanner } from './Components/DemoBanner/DemoBanner';
import { TableBanner } from './Components/TableBanners/TableBanner';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { AppRouter } from './routers/AppRouter';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
