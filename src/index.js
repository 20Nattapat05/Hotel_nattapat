import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import App_two from './App_two';
import App_three from './App_three';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* หน้าแรก */}
        <Route path="/rooms" element={<App_two />} /> {/* หน้าห้องพัก */}
        <Route path="/contact" element={<App_three />} /> {/* หน้าติดต่อเรา */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
