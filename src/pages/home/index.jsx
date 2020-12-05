/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import SocialLinks from "../../components/socialLinks";
import BlogPreview from "../../components/blogPreview";
import BannerIntro from "../../components/bannerIntro";
import Gallery from "../../components/gallery";
import Projects from "../../components/projects";
import Volunteers from "../../components/volunteers";
import CallBanner from "../../components/callBanner";
const Home = () => {
  return (
    <>
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <SocialLinks />
          <Header />
          <BannerIntro
            mainTitle="Título Principal"
            subtitle="Título secundário"
            image="images/cover_bg_1.jpg"
            buttonContent="Message Button"
            btnLink="/"
          />
          {/* <!-- end:header-top --> */}
          <CallBanner />

          <div id="fh5co-feature-product" className="fh5co-section-gray">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center heading-section">
                  <h3>Giving is Virtue.</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>

              <div className="row row-bottom-padded-md">
                <div className="col-md-12 text-center animate-box">
                  <p>
                    <img
                      src="images/cover_bg_1.jpg"
                      alt="Free HTML5 Bootstrap Template"
                      className="img-responsive"
                    />
                  </p>
                </div>
                <div className="col-md-6 text-center animate-box">
                  <p>
                    <img
                      src="images/cover_bg_2.jpg"
                      alt="Free HTML5 Bootstrap Template"
                      className="img-responsive"
                    />
                  </p>
                </div>
                <div className="col-md-6 text-center animate-box">
                  <p>
                    <img
                      src="images/cover_bg_3.jpg"
                      alt="Free HTML5 Bootstrap Template"
                      className="img-responsive"
                    />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="feature-text">
                    <h3>Love</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-text">
                    <h3>Compassion</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-text">
                    <h3>Charity</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Gallery />
          <Volunteers />
          <Projects />
          <BlogPreview />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
