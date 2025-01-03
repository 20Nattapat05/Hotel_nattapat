import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="row m-0 bg-blue p-3">
            <div className="col-md-12">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-start my-auto">
                            <h3 className="text-white mb-3">ที่อยู่</h3>
                            <h4 className="text-white mb-3">
                                2 ถนน สุขเกษม ตำบลช้างเผือก เมือง เชียงใหม่ 50300
                            </h4>
                            <a href="https://www.facebook.com" className="fs-3 text-white" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com" className="fs-3 text-white ms-3" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com" className="fs-3 text-white ms-3" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.6564467843878!2d98.98958537519883!3d18.8134578823378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bcb57f2cda3%3A0x5a42c69f9e85016a!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LmC4Lib4Lil4Li04LmA4LiX4LiE4LiZ4Li04LiE4Lil4Liy4LiZ4LiZ4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1733297231272!5m2!1sth!2sth" 
                                className="map-footer"
                                title="Google Maps Location"
                                aria-label="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
