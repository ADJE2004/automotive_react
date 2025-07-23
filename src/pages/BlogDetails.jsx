import React from "react";

function BlogDetails() {
    return (
        <>
            <section classNameName="blog-details spad">
                <div classNameName="container">
                    <div classNameName="row">
                        <div classNameName="col-lg-12">
                            <div classNameName="blog__details__title">
                                <div classNameName="blog__details__author">
                                    <img src="/img/blog/details/blog-author.png" alt="" />
                                    <p>Post by Brian Gardner on April 1, 2017</p>
                                </div>
                                <h2>The light and music exposition hits <br />los angeles</h2>
                            </div>
                            <div classNameName="blog__details__pic">
                                <img src="/img/blog/details/blog-details.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div classNameName="row d-flex justify-content-center">
                        <div classNameName="col-lg-9">
                            <div classNameName="blog__details__text">
                                <p>5G NR is a new air interface being developed for 5G...</p>
                                <p>5G NR is a new air interface being developed for 5G...</p>
                                <p>The 3GPP made decisions on some of the technologies...</p>
                                <p>The active base station can change as the user is on the move...</p>
                            </div>
                            <div classNameName="blog__details__item">
                                <div classNameName="row">
                                    <div classNameName="col-lg-6 col-md-6">
                                        <img src="/img/blog/details/blog-item.jpg" alt="" />
                                    </div>
                                    <div classNameName="col-lg-6 col-md-6">
                                        <div classNameName="blog__details__item__text">
                                            <p>5G NR is a new air interface being developed for 5G...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div classNameName="blog__details__desc">
                                <p>5G NR is a new air interface being developed for 5G...</p>
                            </div>
                            <div classNameName="blog__details__social">
                                <p><span classNameName="icon_tag_alt"></span> Tag: Car, Engineers, BMW</p>
                                <div classNameName="blog__details__social__links">
                                    <a href="#"><i classNameName="fa fa-facebook"></i></a>
                                    <a href="#" classNameName="twitter"><i classNameName="fa fa-twitter"></i></a>
                                    <a href="#" classNameName="google"><i classNameName="fa fa-google"></i></a>
                                    <a href="#" classNameName="skype"><i classNameName="fa fa-skype"></i></a>
                                </div>
                            </div>
                           <div class="blog__details__comment">
                        <h4>Leave A Comment</h4>
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <input type="text" placeholder="Email"/>
                                </div>
                                <div class="col-lg-12">
                                    <textarea placeholder="Comment"></textarea>
                                    <button type="submit" class="site-btn">Post Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Feature Post</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="latest__item">
<div className="latest__item__pic"
            style={{
              backgroundImage: "url('/img/blog/latest-4.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px'
            }}
          ></div>
                                      <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div class="latest__item__text">
                            <h4><a href="#">Benjamin Franlin Method</a></h4>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" class="continue-btn">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest__item">
<div className="latest__item__pic"
            style={{
              backgroundImage: "url('/img/blog/latest-1.jpg')",
              backgroundRepeat: 'no-repeat',
              height: '200px'
            }}
          ></div>
                            <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div class="latest__item__text">
                            <h4><a href="#">Benjamin Franlin Method</a></h4>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" class="continue-btn">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest__item">
<div className="latest__item__pic"
            style={{
              backgroundImage: "url('/img/blog/latest-5.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px'
            }}
          ></div>
              <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div class="latest__item__text">
                            <h4><a href="#">Benjamin Franlin Method</a></h4>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" class="continue-btn">Continue Reading</a>
                        </div>
                    </div>

</>
    );
}
export default BlogDetails;
