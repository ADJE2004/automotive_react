import React from "react";
function MainLayout() {
  return (
    <>
<div
  className="breadcrumb-option spad"
  style={{
    backgroundImage: "url('/img/breadcrumb-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>About Us</h2>
                <div className="breadcrumb__links">
                  <a href="#">Home</a>
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<section class="about spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about__text">
                        <div class="section-title">
                            <h2>Welcome to<br /> Auto Motive Garages</h2>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets</p>
                        </div>
                        <span>CEO: John Smith</span>
                        <img src="img/about/signature.png" alt=""/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about__pic">
                        <img src="img/about/about-us.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section className="vision vision-changebg">
        <div className="container-fluid">
          <div className="row">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="col-lg-3 p-0 col-md-6 col-sm-6">
                <div className="vision__item" data-changebg={`img/about/vision-${item}.jpg`}>
                  <div className="vision__item__text">
                    <h4>{["Our Approach", "Our Vision", "Our Mission", "Our Value"][item - 1]}</h4>
                    <p>The modern world is in a continuous movement and people everywhere are looking for quick, safe</p>
                    <a href="#">
                      Continue Reading <span className="arrow_right"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="history spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="section-title">
                <h2>Our History & Awards</h2>
                <p>Cars is an auto repair and car wash service. Our company was founded in 1998 by a group of experts with extensive experience in this field</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              {[
                { year: 2009, title: 'Open Company' },
                { year: 2015, title: 'Ars Fennica Award' },
                { year: 2019, title: 'Best Family Cars of 2019' },
              ].map((item) => (
                <div className="history__item" key={item.year}>
                  <span>{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>Risus commodo viverra maecenas accumsan</p>
                </div>
              ))}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              {[
                { year: 2012, title: 'Ars Fennica Award' },
                { year: 2017, title: 'Open Another Branch' },
                { year: 2020, title: '2020 Best Buy Awards' },
              ].map((item) => (
                <div className="history__item" key={item.year}>
                  <span>{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>Risus commodo viverra maecenas accumsan</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section
  className="call spad"
  style={{
    backgroundImage: "url('/img/call-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="call__text">
                <h2>Request a Call back for Your Next Car Service</h2>
                <p>Get 20% Discount & Unlimited Wash Scheme!</p>
                <a href="#" className="primary-btn">
                  Join Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Meet Our Team</h2>
                <p>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { img: 'team-1.jpg', title: 'CEO, Founder', name: 'John Smith' },
              { img: 'team-2.jpg', title: 'Mechanic, Maintenance', name: 'Dan Wayne' },
              { img: 'team-3.jpg', title: 'Supporter', name: 'Jame Cameron' },
            ].map((member, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-sm-6">
                <div className="team__item">
                  <div className="team__item__pic">
                    <img src={`img/team/${member.img}`} alt="" />
                  </div>
                  <div className="team__item__text">
                    <span>{member.title}</span>
                    <h4>{member.name}</h4>
                    <p>The modern world is in a continuous movement and people everywhere are looking for quick.</p>
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

export default MainLayout;

