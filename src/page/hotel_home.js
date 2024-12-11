import React from "react";

function Hotel_Home() {
    return (
        <div>
            <div class="row mb-5">
                <div class="col-md-10 my-auto">
                    <h1 class="fs-1 fs-blue text-start">| Packget แนะนำ</h1>
                </div>
                <div class="col-md-2 my-auto">
                    <a href="#" class="btn btn-warning btn-lg fs-blue fs-4 p-3 w-100 rounded-none">Packget อื่นๆ <i class="fa-solid fa-chevron-right"></i></a>
                </div>
            </div>

            <div class="row mb-5 bg-blue">
                <div class="col-md-6 p-0">
                    <img src="/images/room.png" class="img-room" alt="room-img" />
                </div>
                <div class="col-md-6 text-start p-4 px-5">
                    <h1 class="text-white">Packget 1</h1>
                    <div class="text-warning">
                        <i class="fa-solid fa-star fs-2"></i>
                        <i class="fa-solid fa-star fs-2 ms-3"></i>
                        <i class="fa-solid fa-star fs-2 ms-3"></i>
                        <i class="fa-regular fa-star fs-2 ms-3"></i>
                        <i class="fa-regular fa-star fs-2 ms-3"></i>
                    </div>
                    <div class="card bg-blue mt-4 border-0 hotel-scoll">
                        <div class="card-body">

                            <div class="row mb-3 m-0 hover-blue">
                                <div class="col-md-4">
                                    <img src="/images/room.png" class="img-room-detail" alt="room-img" />
                                </div>
                                <div class="col-md-4 my-auto">
                                    <h4 className="text-white">Standard</h4>
                                    <h6 className="text-white">1 เตียง / 2 คน</h6>
                                </div>
                                <div class="col-md-4 my-auto">
                                    <h5 className="text-white">500 บาท / คืน</h5>
                                </div>
                            </div>


                            <div class="row my-3 m-0 hover-blue">
                                <div class="col-md-4">
                                    <img src="/images/room.png" class="img-room-detail" alt="room-img" />
                                </div>
                                <div class="col-md-4 my-auto">
                                    <h4 className="text-white">Deluxe</h4>
                                    <h6 className="text-white">2 เตียง / 2 คน</h6>
                                </div>
                                <div class="col-md-4 my-auto">
                                    <h5 className="text-white">1,000 บาท / คืน</h5>
                                </div>
                            </div>


                            <div class="row my-3 m-0 hover-blue">
                                <div class="col-md-4">
                                    <img src="/images/room.png" class="img-room-detail" alt="room-img" />
                                </div>
                                <div class="col-md-4 my-auto">
                                    <h4 className="text-white">Suite room</h4>
                                    <h6 className="text-white">2 เตียง / 3 คน</h6>
                                </div>
                                <div class="col-md-4 my-auto">
                                    <h5 className="text-white">1,500 บาท / คืน</h5>
                                </div>
                            </div>


                            <div class="row my-3 m-0 hover-blue">
                                <div class="col-md-4">
                                    <img src="/images/room.png" class="img-room-detail" alt="room-img" />
                                </div>
                                <div class="col-md-4 my-auto">
                                    <h4 className="text-white">Luxury</h4>
                                    <h6 className="text-white">2 เตียง / 4 คน</h6>
                                </div>
                                <div class="col-md-4 my-auto">
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

export default Hotel_Home;
