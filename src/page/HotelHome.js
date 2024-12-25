import React from "react";

function HotelHome() {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-md-10 my-auto">
                    <h1 className="fs-1 fs-blue text-start">| Packget แนะนำ</h1>
                </div>
                <div className="col-md-2 my-auto">
                    <a href="#" className="btn btn-warning btn-lg fs-blue fs-4 p-3 w-100 rounded-none">
                        Packget อื่นๆ <i className="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </div>

            <div className="row mb-5 bg-blue">
                <div className="col-md-6 p-0">
                    <img src="/images/room.png" className="img-room" alt="room-img" />
                </div>
                <div className="col-md-6 text-start p-4 px-5">
                    <h1 className="text-white">Packget 1</h1>
                    <div className="text-warning">
                        <i className="fa-solid fa-star fs-2"></i>
                        <i className="fa-solid fa-star fs-2 ms-3"></i>
                        <i className="fa-solid fa-star fs-2 ms-3"></i>
                        <i className="fa-regular fa-star fs-2 ms-3"></i>
                        <i className="fa-regular fa-star fs-2 ms-3"></i>
                    </div>
                    <div className="card bg-blue mt-4 border-0 hotel-scoll">
                        <div className="card-body">

                            <div className="row mb-3 m-0 hover-blue">
                                <div className="col-md-4">
                                    <img src="/images/room.png" className="img-room-detail" alt="room-img" />
                                </div>
                                <div className="col-md-4 my-auto">
                                    <h4 className="text-white">Standard</h4>
                                    <h6 className="text-white">1 เตียง / 2 คน</h6>
                                </div>
                                <div className="col-md-4 my-auto">
                                    <h5 className="text-white">500 บาท / คืน</h5>
                                </div>
                            </div>

                            <div className="row my-3 m-0 hover-blue">
                                <div className="col-md-4">
                                    <img src="/images/room.png" className="img-room-detail" alt="room-img" />
                                </div>
                                <div className="col-md-4 my-auto">
                                    <h4 className="text-white">Deluxe</h4>
                                    <h6 className="text-white">2 เตียง / 2 คน</h6>
                                </div>
                                <div className="col-md-4 my-auto">
                                    <h5 className="text-white">1,000 บาท / คืน</h5>
                                </div>
                            </div>

                            <div className="row my-3 m-0 hover-blue">
                                <div className="col-md-4">
                                    <img src="/images/room.png" className="img-room-detail" alt="room-img" />
                                </div>
                                <div className="col-md-4 my-auto">
                                    <h4 className="text-white">Suite room</h4>
                                    <h6 className="text-white">2 เตียง / 3 คน</h6>
                                </div>
                                <div className="col-md-4 my-auto">
                                    <h5 className="text-white">1,500 บาท / คืน</h5>
                                </div>
                            </div>

                            <div className="row my-3 m-0 hover-blue">
                                <div className="col-md-4">
                                    <img src="/images/room.png" className="img-room-detail" alt="room-img" />
                                </div>
                                <div className="col-md-4 my-auto">
                                    <h4 className="text-white">Luxury</h4>
                                    <h6 className="text-white">2 เตียง / 4 คน</h6>
                                </div>
                                <div className="col-md-4 my-auto">
                                    <h5 className="text-white">2,000 บาท / คืน</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelHome;
