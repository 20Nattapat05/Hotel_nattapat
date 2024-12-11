import React from "react";

function Review() {
    return (
        <div className="row mb-3">
            <div className="col-md-4 px-5">
                <div className="card bg-blue mb-5">
                    <div className="card-body">
                        <h4 className="text-start ms-4 ps-3 text-warning">Username 111</h4>
                        <h6 className="text-start ms-4 ps-3 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, at.</h6>
                        <img src="/images/pro-1.jpg" className="image-pro-review user" alt="Review" />
                    </div>
                </div>
            </div>
            <div className="col-md-4 px-5">
                <div className="card bg-blue mb-5">
                    <div className="card-body">
                        <h4 className="text-start ms-4 ps-3 text-warning">Username 222</h4>
                        <h6 className="text-start ms-4 ps-3 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, at.</h6>
                        <img src="/images/pro-2.jpg" className="image-pro-review user" alt="Review" />
                    </div>
                </div>
            </div>
            <div className="col-md-4 px-5">
                <div className="card bg-blue mb-5">
                    <div className="card-body">
                        <h4 className="text-start ms-4 ps-3 text-warning">Username 333</h4>
                        <h6 className="text-start ms-4 ps-3 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, at.</h6>
                        <img src="/images/pro-3.jpg" className="image-pro-review user" alt="Review" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
