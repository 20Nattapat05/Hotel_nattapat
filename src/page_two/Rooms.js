import React from 'react';

function Rooms() {
  return (
    <div className="rooms-page">
      <h1>ห้องพัก</h1>
      <p>ยินดีต้อนรับสู่หน้า "ห้องพัก" ที่นี่คุณจะพบข้อมูลเกี่ยวกับห้องพักของเราทั้งหมด</p>
      
      <div className="room-list">
        <div className="room">
          <h2>ห้องพักแบบ Standard</h2>
          <p>ห้องพักที่สะดวกสบาย พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
        </div>
        <div className="room">
          <h2>ห้องพักแบบ Deluxe</h2>
          <p>ห้องพักขนาดใหญ่ พร้อมวิวสวยและบริการพิเศษ</p>
        </div>
        <div className="room">
          <h2>ห้องพักแบบ Suite</h2>
          <p>ห้องพักหรูหราที่มาพร้อมบริการระดับ 5 ดาว</p>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
