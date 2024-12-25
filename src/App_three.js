import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App_three() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <h1>ติดต่อเรา</h1>
        <section>
          <p>นี่คือหน้าติดต่อเรา</p>
        </section>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">ชื่อของคุณ</label>
            <input type="text" className="form-control" id="name" placeholder="ชื่อเต็ม" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">อีเมล</label>
            <input type="email" className="form-control" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">ข้อความ</label>
            <textarea className="form-control" id="message" rows="3" placeholder="ข้อความของคุณ"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">ส่งข้อความ</button>
        </form>
      </div>
      <footer className="mt-10 text-center">
        <Footer />
      </footer>
    </div>
  );
}

export default App_three;
