import React from "react";

function ServiceDetails() {
    return(
        <>
<div
  className="breadcrumb-option spad"
  style={{
    backgroundImage: "url('/img/breadcrumb-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height:'300px'
  }}
>

</div>
     


        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Services Details</h2>
                        <div className="breadcrumb__links">
                            <a href="#">Home</a>
                            <span>Services</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    <section className="services-details spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 order-lg-2">
                    <div className="services__details__content">
                        <div className="services__details__pic">
                            <img src="img/services/details/service-details.jpg" alt=""/>
                        </div>
                        <div className="services__details__text">
                            <h4>What We Do?</h4>
                            <p>Consultec a professional telecommunication consulting firm providing strategic technology
                                solutions for small and mid-size businesses and enterprise-level companies. We increase
                                operational and financial</p>
                            <p>Having years of diverse experience, we are able to create cutting-edge recommendations
                                that will transform your networks infrastructure. Analyzing your current infrastructure
                                and services, Consultec customizes comprehensive solutions that are designed to fulfill
                                your immediate needs, while considering</p>
                        </div>
                        <div className="services__details__feature">
                            <h4>Our featured</h4>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="services__details__feature__item">
                                        <img src="img/icon/si-3.png" alt=""/>
                                        <h5>Industrial Construction</h5>
                                        <p>Industriel has a brilliant record in responding to complex</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="services__details__feature__item">
                                        <img src="img/icon/si-1.png" alt=""/>
                                        <h5>Industrial Construction</h5>
                                        <p>Industriel has a brilliant record in responding to complex</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <div className="services__details__feature__item">
                                        <img src="img/icon/si-2.png" alt=""/>
                                        <h5>Industrial Construction</h5>
                                        <p>Industriel has a brilliant record in responding to complex</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="services__details__video set-bg"
                                    data-setbg="img/services/details/services-video.jpg">
                                        img/services/details/services-video.jpg
                                    <a href="#" className="play-btn"><i className="fa fa-play"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="services__details__chooseus">
                                    <h4>Why People Choose Us?</h4>
                                    <p>Quis nostrud exercitation ullamco laboris nisi ut</p>
                                    <ul>
                                        <li><i className="fa fa-check-circle"></i> Lorem ipsum dolor sit amet, consectetur.
                                        </li>
                                        <li><i className="fa fa-check-circle"></i> Integer et nisl et massa tempor</li>
                                        <li><i className="fa fa-check-circle"></i> Nunc consectetur ligula placerat tempus.
                                        </li>
                                        <li><i className="fa fa-check-circle"></i> Curabitur quis ante vitae lacus varius
                                            pretium.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 order-lg-1">
                    <div className="services__sidebar">
                        <div className="services__sidebar__item">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Engine Overhaul</a></li>
                                <li><a href="#">Oil change</a></li>
                                <li><a href="#">Power Steering</a></li>
                                <li><a href="#">Upgrades Car</a></li>
                                <li><a href="#">Pating Car</a></li>
                            </ul>
                        </div>
                        <div className="services__sidebar__brochure">
                            <h4>Brochure</h4>
                            <p>Working from home meant we could vary snack and coffee</p>
                            <a href="#" className="primary-btn">Download PDF</a>
                        </div>
                        <div className="services__sidebar__help">
                            <img src="img/services/details/help.jpg" alt=""/>
                            <h4>How can we help you?</h4>
                            <p>Contact us at the Auto-Motive Garages nearest to you or submit a business inquiry</p>
                            <a href="#" className="primary-btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default ServiceDetails;