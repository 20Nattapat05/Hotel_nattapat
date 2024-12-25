import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Banner from './page/banner';
import Content from './page/content';
import Review from './page/review';
import Hotel_Home from './page/hotel_home';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <div className="container">
          <Content />
          <Review />
          <hr className="my-5" />
          <Hotel_Home />
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>หน้าแรก</h1>;
}

function Rooms() {
  return <h1>ห้องพัก</h1>;
}

function Contact() {
  return <h1>ติดต่อเรา</h1>;
}

export default App;
