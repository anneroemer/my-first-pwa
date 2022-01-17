import React from 'react';
import { useEffect } from 'react';
import './App.css';
import OneSignal from "react-onesignal";
import Location from './components/Location';
import PWAPrompt from "react-ios-pwa-prompt";
import TestLocalbase from './components/TestLocalbase';
import Map from './components/Map';
import { Routes, Route, Link } from "react-router-dom";
import NoMatch from './components/NoMatch';

function App() {

  useEffect(() => {
    OneSignal.init({
      //appId: "0cfeb961-114f-4f7e-8d47-4ef657eef92b",
      appId: process.env.REACT_APP_ONESIGNAL,

    });
  }, []);

  return (
    <div className="App">
      <h1>Dette er min app!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/database">Database</Link>
        <Link to="/gahdamn">Something completely different...</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="map" element={<Map />} />
        <Route path="database" element={<TestLocalbase />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
      <footer>
        <p>Don't be suspicious...</p>
      </footer>
      <PWAPrompt />
    </div>
  );
}

export default App;
