import React from "react";

function Content() {
    return (
        <div class="row bg-blue p-3 posit-banner">
            <div class="col-md-4 my-auto">
                <h1 class="text-center fs-1 text-white"> 4 . 5 <i class="fa-solid fa-star text-warning"></i></h1>
            </div>
            <div class="col-md-4 my-auto border-start">
                <h1 class="text-center fs-1 text-white mb-0">150 K</h1>
                <h6 class="text-center text-white mb-0">CHECK IN</h6>
            </div>
            <div class="col-md-4 my-auto border-start">
                <a href="" class="btn btn-warning btn-lg w-75 fs-4 p-3 fs-blue">จองห้องพัก <i class="fa-solid fa-ticket-simple rotag"></i></a>
            </div>
        </div>
    );
}

export default Content;
