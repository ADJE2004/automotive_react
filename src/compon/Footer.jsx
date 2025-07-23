import React from "react";
import { FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP } from 'react-icons/fa';

function Footer() {
  // 👉 Style commun aux icônes
  const socialStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    color: '#fff',           
    fontSize: '16px',
  };

  return (
    <>
      <footer
        className="footer"
        style={{
          backgroundImage: 'url("/img/footer-bg.jpg")',
          backgroundSize: 'cover',
        }}
      >
<div className="container">
            <div className="footer__top">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer__top__item">
                            <div className="footer__top__item__text">
                                <img src="/img/icon/ft-1.png" alt=""/>
                                <p>Booking Repair</p>
                                <h3>Appointment</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer__top__item">
                            <div className="footer__top__item__text">
                                <img src="/img/icon/ft-2.png" alt=""/>
                                <p>Contact Us Now!</p>
                                <h3>123-4567-7890</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer__top__item last__item">
                            <div className="footer__top__item__text">
                                <img src="/img/icon/ft-3.png" alt=""/>
                                <p>Location</p>
                                <h3>Find us on map</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__text">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <img src="/img/footer-logo.png" alt=""/>
                            </div>
                            <p>Class is also likely to be focused on slow and gentle movements so it's a great type of
                            yoga to is also likely to be</p>
                            <a href="#" className="primary-btn"><span className="icon_phone"></span> Contact Us</a>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1 col-md-5 offset-md-1 col-sm-6">
                        <div className="footer__widget">
                            <h5>Quick Link</h5>
                            <ul>
                                <li><a href="#">Purchase <span className="arrow_right"></span></a></li>
                                <li><a href="#">Payment <span className="arrow_right"></span></a></li>
                                <li><a href="#">Shipping <span className="arrow_right"></span></a></li>
                                <li><a href="#">Return <span className="arrow_right"></span></a></li>
                                <li><a href="#">Detailing <span className="arrow_right"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__news">
                            <h5>News</h5>
                            <a href="#" className="footer__news__item">
                                Free Philippine Real Estate Ads...
                                <span>November 11, 2020</span>
                            </a>
                            <a href="#" className="footer__news__item">
                                Free Philippine Real Estate Ads...
                                <span>November 11, 2020</span>
                            </a>
                            <a href="#" className="footer__news__item">
                                Free Philippine Real Estate Ads...
                                <span>November 11, 2020</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__address">
                            <h5>My Office</h5>
                            <p>Address: 7986 Pennsylvania St. Rockville Centre, NY</p>
                            <ul>
                                <li>Fax: (+123) 4567-7890-123</li>
                                <li>Mobile: (+123) 4567-7890-123</li>
                                <li>Email: Hello@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        {/* COPYRIGHT + ICONES */}
        <div className="footer__copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="footer__copyright__text">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4 d-flex justify-content-end">
                <div
                  className="footer__copyright__social"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <a
                    href="#"
                    style={{ ...socialStyle, backgroundColor: "#3b5998" }}
                  >
                    <FaFacebookF style={{ fontSize: '14px' }} />
                  </a>
                  <a
                    href="#"
                    style={{ ...socialStyle, backgroundColor: "#1da1f2" }}
                  >
                    <FaTwitter style={{ fontSize: '14px' }} />
                  </a>
                  <a
                    href="#"
                    style={{ ...socialStyle, backgroundColor: "#1c1e2b" }}
                  >
                    <FaVimeoV style={{ fontSize: '14px' }} />
                  </a>
                  <a
                    href="#"
                    style={{ ...socialStyle, backgroundColor: "#bd081c" }}
                  >
                    <FaPinterestP style={{ fontSize: '14px' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Footer;
