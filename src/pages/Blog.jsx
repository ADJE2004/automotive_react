import React from "react";
//import MainLayout from '../compon/MainLayout';
function Blog(){
    return(
        <>
          <div
  className="latest__item__pic"style={{ backgroundImage: "url('/img/breadcrumb-bg.jpg')"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Our Blog</h2>
                        <div className="breadcrumb__links">
                            <a href="#">Home</a>
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <section className="blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                        <div
  className="latest__item__pic"style={{ backgroundImage: "url('/img/blog/blog-1.jpg')" ,width: '100%',      // ajuste selon le besoin
    height: '300px', backgroundSize: 'cover' }}>             
                    <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div className="blog__item__text">
                            <h3><a href="#">Benjamin Franklin S Method Of</a></h3>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" className="continue-btn">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                        <div className="latest__item__pic"style={{ backgroundImage: "url('/img/blog/blog-2.jpg')" ,width: '100%',      // ajuste selon le besoin
    height: '300px', backgroundSize: 'cover'  }}>                         
        <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div className="blog__item__text">
                            <h3><a href="#">Benjamin Franklin S Method Of</a></h3>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" className="continue-btn">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
                        <div
  className="latest__item__pic"style={{ backgroundImage: "url('/img/blog/blog-3.jpg')" ,width: '100%',      // ajuste selon le besoin
    height: '300px', backgroundSize: 'cover'  }}> 
                            <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div className="blog__item__text">
                            <h3><a href="#">Benjamin Franklin S Method Of</a></h3>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" className="continue-btn">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
<div
  className="latest__item__pic"style={{ backgroundImage: "url('/img/blog/blog-4.jpg')" ,width: '100%',      // ajuste selon le besoin
    height: '300px', backgroundSize: 'cover'  }}>                  
              <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div className="blog__item__text">
                            <h3><a href="#">Benjamin Franklin S Method Of</a></h3>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" className="continue-btn">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
<div
  className="latest__item__pic"style={{ backgroundImage: "url('/img/blog/blog-5.jpg')"  ,width: '100%',      // ajuste selon le besoin
    height: '300px', backgroundSize: 'cover' }}>                            
    <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div className="blog__item__text">
                            <h3><a href="#">Benjamin Franklin S Method Of</a></h3>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" className="continue-btn">Continue Reading</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="blog__item">
<div
  className="latest__item__pic"style={{ backgroundImage: "url('/img/blog/blog-6.jpg')" ,width: '100%',      // ajuste selon le besoin
    height: '300px', backgroundSize: 'cover'  }}>                       
         <p>By <span>Brian Gardner on April 1, 2017</span></p>
                        </div>
                        <div className="blog__item__text">
                            <h3><a href="#">Benjamin Franklin S Method Of</a></h3>
                            <p>Electric bike market advisers eCycleElectric have concluded that the U.S. market for</p>
                            <a href="#" className="continue-btn">Continue Reading</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default Blog;