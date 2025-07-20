import React from "react";

function ShopDetails() {
    return (
        <>
            <section className="shop-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="shop__details__pic">
                                <div className="shop__details__big__img">
                                    <img className="product__big__img" src="/img/products/details/product-big-2.jpg" alt="" />
                                </div>
                                <div className="shop__details__thumb__pic">
                                    <div className="pt active" data-imgbigurl="/img/products/details/product-big-1.jpg">
                                        <img src="/img/products/details/thumb-1.jpg" alt="" />
                                    </div>
                                    <div className="pt" data-imgbigurl="/img/products/details/product-big-2.jpg">
                                        <img src="/img/products/details/thumb-2.jpg" alt="" />
                                    </div>
                                    <div className="pt" data-imgbigurl="/img/products/details/product-big-1.jpg">
                                        <img src="/img/products/details/thumb-3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shop__details__text">
                                <h3>Yellow Hat Summer</h3>
                                <div className="price">$50.00</div>
                                <p>Dodge Widebody Replica offered in multiple sizes and finishes with applications to fit
                                    Chrysler 300c, Dodge Magnum, Chargers and</p>
                                <p className="last-para">Not only does the Widebody offer superior performance for the standard</p>
                                <div className="shop__details__widget">
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <input type="text" defaultValue="1" />
                                        </div>
                                    </div>
                                    <a href="#" className="primary-btn">Add To Cart</a>
                                </div>
                                <ul>
                                    <li><span>Availability:</span> In Stock</li>
                                    <li><span>Category:</span> Wheels, Tool</li>
                                    <li>
                                        <span>Share on:</span>
                                        <div className="share__links">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                            <a href="#"><i className="fa fa-pinterest"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="shop__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Reviews (1)</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div className="tab__content__item">
                                            <h5>Products Information</h5>
                                            <p>Another very popular suit fabric is cotton...</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <div className="tab__content__item">
                                            <h5>Reviews</h5>
                                            <p>Review content here...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Related Product</h2>
                                <p>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic">
                                        <img src={`/img/products/product-${item}.png`} alt="" />
                                        <ul className="hover__item">
                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                            <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Product Name {item}</a></h6>
                                        <div className="price">
                                            <span>$800.00</span>
                                            <a href="#">+Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ShopDetails;
