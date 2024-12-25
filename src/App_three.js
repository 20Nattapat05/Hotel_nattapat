import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App_three() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <h1>ติดต่อเรา</h1>
        <p>นี่คือหน้าติดต่อเรา</p>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App_three;
