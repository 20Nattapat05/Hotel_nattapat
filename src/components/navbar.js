import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="row m-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><i className="fa-solid fa-bookmark me-2"></i> Aurora Resort</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">หน้าแรก</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/rooms">ห้องพัก</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">ติดต่อเรา</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
