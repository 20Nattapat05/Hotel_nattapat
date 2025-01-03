import React from "react";

function Banner() {
    return (
        <div id="carouselExampleControls" className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/banner-1.png" className="img-banner" alt="Banner 1" />
                </div>
                <div className="carousel-item">
                    <img src="/images/banner-2.jpg" className="img-banner" alt="Banner 2" />
                </div>
                <div className="carousel-item">
                    <img src="/images/banner-3.jpg" className="img-banner" alt="Banner 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;
