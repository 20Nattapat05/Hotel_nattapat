import React from "react";
import Navbar from "./components/navbar";
import Banner from "./page/banner";
import Content from "./page/content";
import Review from "./page/review";
import Hotel_Home from "./page/hotel_home";
import Footer from "./components/footer";

function App() {
  return (
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
  );
}

export default App;
