// MainLayout from '../compon/MainLayout';
import React from "react";

function Shop(){
    return(
        <>
       
<div
  className="breadcrumb-option spad"
  style={{ backgroundImage: "url('/img/breadcrumb-bg.jpg')" }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Our Shop</h2>
                        <div className="breadcrumb__links">
                            <a href="#">Home</a>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 order-lg-2">
                    <div className="product__widget">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <p>Showing 1 - 9 of 32 Products</p>
                            </div>
                            <div className="col-lg-8 col-md-8 text-right">
                                <div className="select__item">
                                    <p>Showing Items</p>
                                    <select>
                                        <option value="">12</option>
                                    </select>
                                </div>
                                <div className="select__item">
                                    <p>Sort By</p>
                                    <select>
                                        <option value="">Best Seller</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-2.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Revolution Wheels</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-3.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Tone Interior Kit</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-4.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Matte Gunmetal</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-2.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Revolution Wheels</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-3.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Tone Interior Kit</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-4.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Matte Gunmetal</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-2.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Revolution Wheels</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-3.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Tone Interior Kit</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic">
                                    <img src="/img/products/product-4.jpg" alt=""/>
                                    <ul className="hover__item">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="#"><i className="fa fa-exchange"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Matte Gunmetal</a></h6>
                                    <div className="price">
                                        <span>$800.00</span>
                                        <a href="#">+Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shop__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><span className="arrow_carrot-right"></span></a>
                    </div>
                </div>
                <div className="col-lg-3 order-lg-1">
                    <div className="shop__sidebar">
                        <div className="shop__sidebar__item">
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="#">Alabama <span>(75 Item)</span></a></li>
                                <li><a href="#">Arizona <span>(54 Item)</span></a></li>
                                <li><a href="#">Arkansas <span>(63 Item)</span></a></li>
                                <li><a href="#">California <span>(18 Item)</span></a></li>
                                <li><a href="#">Colorado <span>(36 Item)</span></a></li>
                            </ul>
                        </div>
                        <div className="shop__sidebar__item">
                            <h4>Price</h4>
                            <ul>
                                <li>$0 - $80.00</li>
                                <li>$80.00 - $160.00</li>
                                <li>$160.00 - $320.00</li>
                                <li>$320.00 - $520.00</li>
                                <li>Over $520.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        </>
    );
}

export default Shop;