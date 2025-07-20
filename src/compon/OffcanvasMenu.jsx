function OffcanvasMenu(){
    return(
        <>
<div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper "style={{ display: 'block' }}>
        <ul className="offcanvas__widget">
            <li><a href="#" className="search-switch"><span className="icon_search"></span></a></li>
            <li><a href="#"><span className="icon_cart_alt"></span></a></li>
        </ul>
        <div className="offcanvas__logo">
            <a href="./index.html"><img src="/img/logo.png" alt=""/></a>
            
        </div>
        <div id="mobile-menu-wrap"></div>
        <ul className="offcanvas__date">
            <li><span className="icon_mobile"></span> (+123) 4567-7890-123</li>
            <li><span className="icon_clock_alt"></span> Mon-Sat: 10:00 - 16:00 / Sunday Close</li>
        </ul>
        <div className="offcanvas__social">
            {/* <a href="#" className="map-btn">Find us on map <span class="arrow_right"></span></a>
            <div className="header__right__social">
                <a href="#"><span className="social_facebook"></span></a>
                <a href="#"><span className="social_twitter"></span></a>
                <a href="#"><span className="social_vimeo"></span></a>
                <a href="#"><span className="social_pinterest"></span></a>
            </div> */}
        </div>
    </div>

    </>
    );
}

export default OffcanvasMenu;