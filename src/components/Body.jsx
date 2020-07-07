/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from './header'
import Footer from './footer'
const Body = () => {
  return (
    <>
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <div className="header-top">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 text-left fh5co-link">
                  <a href="#">FAQ</a>
                  <a href="#">Forum</a>
                  <a href="#">Contact</a>
                </div>
                <div className="col-md-6 col-sm-6 text-right fh5co-social">
                  <a href="#" className="grow"><i className="icon-facebook2"></i></a>
                  <a href="#" className="grow"><i className="icon-twitter2"></i></a>
                  <a href="#" className="grow"><i className="icon-instagram2"></i></a>
                </div>
              </div>
            </div>
          </div>
          <Header />
          <div className="fh5co-hero">
            <div className="fh5co-overlay"></div>
            <div className="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('images/cover_bg_1.jpg')"}}>
              <div className="desc animate-box">
                <h2><strong>Donate</strong> for the <strong>Poor Children</strong></h2>
                <span>HandCrafted by <a href="http://frehtml5.co/" target="_blank" className="fh5co-site-name">FreeHTML5.co</a></span>
                <span><a className="btn btn-primary btn-lg" href="#">Donate Now</a></span>
              </div>
            </div>
          </div>
          {/* <!-- end:header-top --> */}
          <div id="fh5co-features">
            <div className="container">
              <div className="row">
                <div className="col-md-4">

                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-profile-male"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Become a volunteer</h3>
                      <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>

                </div>

                <div className="col-md-4">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-happy"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Happy Giving</h3>
                      <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-wallet"></i>
                    </span>
                    <div className="feature-copy">
                      <h3>Donation</h3>
                      <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="fh5co-feature-product" className="fh5co-section-gray">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center heading-section">
                  <h3>Giving is Virtue.</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>

              <div className="row row-bottom-padded-md">
                <div className="col-md-12 text-center animate-box">
                  <p><img src="images/cover_bg_1.jpg" alt="Free HTML5 Bootstrap Template" className="img-responsive" /></p>
                </div>
                <div className="col-md-6 text-center animate-box">
                  <p><img src="images/cover_bg_2.jpg" alt="Free HTML5 Bootstrap Template" className="img-responsive" /></p>
                </div>
                <div className="col-md-6 text-center animate-box">
                  <p><img src="images/cover_bg_3.jpg" alt="Free HTML5 Bootstrap Template" className="img-responsive" /></p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="feature-text">
                    <h3>Love</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-text">
                    <h3>Compassion</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-text">
                    <h3>Charity</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="fh5co-portfolio">
            <div className="container">

              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                  <h3>Our Gallery</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                </div>
              </div>


              <div className="row row-bottom-padded-md">
                <div className="col-md-12">
                  <ul id="fh5co-portfolio-list">

                    <li className="two-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: "url('images/cover_bg_1.jpg')"}}>
                      <a href="#" className="color-3">
                        <div className="case-studies-summary">
                          <span>Give Love</span>
                          <h2>Donation is caring</h2>
                        </div>
                      </a>
                    </li>

                    <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: "url('images/cover_bg_3.jpg')"}}>
                      <a href="#" className="color-4">
                        <div className="case-studies-summary">
                          <span>Give Love</span>
                          <h2>Donation is caring</h2>
                        </div>
                      </a>
                    </li>

                    <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: "url('images/cover_bg_1.jpg')"}}>
                      <a href="#" className="color-5">
                        <div className="case-studies-summary">
                          <span>Give Love</span>
                          <h2>Donation is caring</h2>
                        </div>
                      </a>
                    </li>
                    <li className="two-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: "url('images/cover_bg_3.jpg')"}}>
                      <a href="#" className="color-6">
                        <div className="case-studies-summary">
                          <span>Give Love</span>
                          <h2>Donation is caring</h2>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-md-offset-4 text-center animate-box">
                  <a href="#" className="btn btn-primary btn-lg">See Gallery</a>
                </div>
              </div>


            </div>
          </div>

          <div id="fh5co-content-section" className="fh5co-section-gray">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                  <h3>Our Philantrophist</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="fh5co-testimonial text-center animate-box">
                    <figure>
                      <img src="images/person_1.jpg" alt="user" />
                    </figure>
                    <blockquote>
                      <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
                    </blockquote>
                    <span>Jean Doe, XYZ Co.</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="fh5co-testimonial text-center animate-box">
                    <figure>
                      <img src="images/person_2.jpg" alt="user" />
                    </figure>
                    <blockquote>
                      <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
                    </blockquote>
                    <span>John Doe, XYZ Co.</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="fh5co-testimonial text-center animate-box">
                    <figure>
                      <img src="images/person_3.jpg" alt="user" />
                    </figure>
                    <blockquote>
                      <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.&rdquo;</p>
                    </blockquote>
                    <span>John Doe, XYZ Co.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- fh5co-content-section --> */}
          <div id="fh5co-services-section">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                  <h3>Our Projects. Support Us</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row text-center">
                <div className="col-md-4 col-sm-4">
                  <div className="services animate-box">
                    <span><i className="icon-heart"></i></span>
                    <h3>Water Project In Kenya</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="services animate-box">
                    <span><i className="icon-heart"></i></span>
                    <h3>Shelter Giving</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="services animate-box">
                    <span><i className="icon-heart"></i></span>
                    <h3>Shelter Giving</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="services animate-box">
                    <span><i className="icon-heart"></i></span>
                    <h3>Water Project In Kenya</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="services animate-box">
                    <span><i className="icon-heart"></i></span>
                    <h3>Water Project In Kenya</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="services animate-box">
                    <span><i className="icon-heart"></i></span>
                    <h3>Midical Mission</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END What we do --> */}


          <div id="fh5co-blog-section" className="fh5co-section-gray">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                  <h3>Recent From Blog</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row row-bottom-padded-md">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="fh5co-blog animate-box">
                    <a href="#"><img className="img-responsive" src="images/cover_bg_1.jpg" alt="" /></a>
                    <div className="blog-text">
                      <div className="prod-title">
                        <h3><a href="#">Medical Mission in Southern Kenya</a></h3>
                        <span className="posted_by">Sep. 15th</span>
                        <span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p><a href="#">Learn More...</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="fh5co-blog animate-box">
                    <a href="#"><img className="img-responsive" src="images/cover_bg_2.jpg" alt="" /></a>
                    <div className="blog-text">
                      <div className="prod-title">
                        <h3><a href="#">Medical Mission in Southern Kenya</a></h3>
                        <span className="posted_by">Sep. 15th</span>
                        <span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p><a href="#">Learn More...</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix visible-sm-block"></div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="fh5co-blog animate-box">
                    <a href="#"><img className="img-responsive" src="images/cover_bg_3.jpg" alt="" /></a>
                    <div className="blog-text">
                      <div className="prod-title">
                        <h3><a href="#">Medical Mission in Southern Kenya</a></h3>
                        <span className="posted_by">Sep. 15th</span>
                        <span className="comment"><a href="">21<i className="icon-bubble2"></i></a></span>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p><a href="#">Learn More...</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix visible-md-block"></div>
              </div>

              <div className="row">
                <div className="col-md-4 col-md-offset-4 text-center animate-box">
                  <a href="#" className="btn btn-primary btn-lg">Our Blog</a>
                </div>
              </div>

            </div>
          </div>
          {/* <!-- fh5co-blog-section --> */}
          <Footer />
        </div>
        {/* <!-- END fh5co-page --> */}

      </div>
    </>
  )
}
export default Body;