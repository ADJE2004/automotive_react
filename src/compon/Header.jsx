import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <header style={{
            height: '120px',        // augmente la hauteur
            backgroundColor: '#000', // couleur de fond si besoin
            color: '#fff',           // texte blanc
            display: 'flex',
            alignItems: 'center',    // centrer le texte verticalement
            justifyContent: 'space-between', // optionnel
            padding: '0 20px'        // optionnel
        }}>
    </header>
   {/* <!-- Offcanvas Menu Begin -->*/}
    <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
        <ul className="offcanvas__widget">
            <li><a href="#" className="search-switch"><span className="icon_search"></span></a></li>
            <li><a href="#"><span className="icon_cart_alt"></span></a></li>
        </ul>
        <div className="offcanvas__logo">
            <a href="./index.html"><img src="img/logo.png" alt=""/></a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <ul className="offcanvas__date">
            <li><span className="icon_mobile"></span> (+123) 4567-7890-123</li>
            <li><span className="icon_clock_alt"></span> Mon-Sat: 10:00 - 16:00 / Sunday Close</li>
        </ul>
        <div className="offcanvas__social">
            <a href="#" className="map-btn">Find us on map <span className="arrow_right"></span></a>
            <div className="header__right__social">
                <a href="#"><span className="social_facebook"></span></a>
                <a href="#"><span className="social_twitter"></span></a>
                <a href="#"><span className="social_vimeo"></span></a>
                <a href="#"><span className="social_pinterest"></span></a>
            </div>
        </div>
    </div>
    {/*<!-- Offcanvas Menu End -->*/}

   {/* <!-- Header Section Begin -->*/}
    <header className="header">
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <ul className="header__top__left">
                            <li><span className="icon_mobile"></span> (+123) 4567-7890-123</li>
                            <li><span className="icon_clock_alt"></span> Mon-Sat: 10:00 - 16:00 / Sunday Close</li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="header__top__right">
                            <a href="#" className="map-btn">Find us on map <span className="arrow_right"></span></a>
                            <div className="header__right__social">
                                <a href="#"><span className="social_facebook"></span></a>
                                <a href="#"><span className="social_twitter"></span></a>
                                <a href="#"><span className="social_vimeo"></span></a>
                                <a href="#"><span className="social_pinterest"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
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
                    <ul className="header__right">
                        <li><a href="#" className="search-switch"><span className="icon_search"></span></a></li>
                        <li><a href="#"><span className="icon_cart_alt"></span></a></li>
                    </ul>
                </div>
            </div>
            <div className="canvas__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    {/*<!-- Header Section End -->*/}
    </>
  );
}

export default Header;
