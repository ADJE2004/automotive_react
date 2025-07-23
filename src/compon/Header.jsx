import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import {FaFacebookF,FaTwitter,FaVimeoV,FaPinterestP,FaMobileAlt,FaClock,FaBars,} from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

function Header() {
  return (
    <>
      {/* Top black bar (optional header) */}
      <header style={{
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        {/* Vous pouvez ajouter du contenu ici si nécessaire */}
      </header>

      {/* Offcanvas Menu Begin */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <ul className="offcanvas__widget">
          <li><a href="#"><FiSearch /></a></li>
          <li><a href="#"><FiShoppingCart /></a></li>
        </ul>
        <div className="offcanvas__logo">
          <a href="/"><img src="img/logo.png" alt="Logo" /></a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <ul className="offcanvas__date">
          <li><FaMobileAlt /> (+123) 4567-7890-123</li>
          <li><FaClock /> Mon-Sat: 10:00 - 16:00 / Sunday Close</li>
        </ul>
        <div className="offcanvas__social">
          <a href="#" className="map-btn">Find us on map <BsArrowRight /></a>
          <div className="header__right__social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaVimeoV /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
        </div>
      </div>
      {/* Offcanvas Menu End */}

      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <ul className="header__top__left">
                  <li><FaMobileAlt /> (+123) 4567-7890-123</li>
                  <li><FaClock /> Mon-Sat: 10:00 - 16:00 / Sunday Close</li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="header__top__right">
                  <a href="#" className="map-btn">Find us on map <BsArrowRight /></a>
                  <div className="header__right__social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaVimeoV /></a>
                    <a href="#"><FaPinterestP /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="/"><img src="img/logo.png" alt="Logo" /></a>
              </div>
            </div>
            <div className="col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li><Link to=".">Home</Link></li>
                  <li><Link to="./service">Services</Link></li>
                  <li><Link to="./shop">Shop</Link></li>
                  <li className="active"><a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><Link to="./About">About Us</Link></li>
                      <li><Link to="./ServiceDetails">Services Details</Link></li>
                      <li><Link to="./ShopDetails">Shop Details</Link></li>
                      <li><Link to="./BlogDetails">Blog Details</Link></li>
                      <li><Link to="./Contact">Contact</Link></li>
                    </ul>
                  </li>
                  <li><Link to="./blog">Blog</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2">
              <ul className="header__right d-flex justify-content-end gap-3">
                <li><a href="#"><FiSearch size={22}  style={{ transform: 'scaleX(-1)' }} />
</a></li>
                <li><a href="#"><FiShoppingCart size={22}  /></a></li>
              </ul>
            </div>
          </div>

          <div className="canvas__open">
            <FaBars size={24} />
          </div>
        </div>
      </header>
      {/* Header Section End */}
    </>
  );
}

export default Header;
