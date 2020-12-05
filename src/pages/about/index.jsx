import React from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";

function About() {
  return (
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <SocialLinks />
            <Header />
            <div className="fh5co-content-section">
                <div className="fh5co-section-title text-center">
                    <h1>About us</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                                est facilis maiores, perspiciatis accusamus asperiores sint
                                consequuntur debitis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default About;
