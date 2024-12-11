import React from "react";

function Navbar() {
    return (
        <div className="row m-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#"><i class="fa-solid fa-bookmark me-2"></i> Aurora Resort</a>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">หน้าแรก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">ห้องพัก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">ติดต่อเรา</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
