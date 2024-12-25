import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Rooms from "./page_two/Rooms";

function App_two() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <Rooms />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App_two;
