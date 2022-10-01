/* eslint-disable react/jsx-no-target-blank */

import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import SocialLinks from "../../components/socialLinks";
import BlogPreview from "../../components/blogPreview";
import BannerIntro from "../../components/bannerIntro";
import GalleryPreview from "../../components/galleryPreview";
import Projects from "../../components/projects";
import Volunteers from "../../components/volunteers";
import ContactInfo from "../../components/contactInfo";
import useTranslation from "../../i18n/translator";

const Home = () => {
  const title = useTranslation("home.banner.title");
  const subTitle = useTranslation("home.banner.subtitle")

  return (
    <>
      <div id="fh5co-wrapper">
        <div id="fh5co-page">
          <SocialLinks />
          <Header page="home" />

          <BannerIntro
            mainTitle={ title }
            subtitle={ subTitle }
            image="images/home-cover.jpg"
            classExtra="fh5co-cover-center h2-100"
          />

          <div id="fh5co-feature-product" className="fh5co-section-gray">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center heading-section">
                  <h3>
                    {useTranslation("home.missionValueVision.title")}
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="feature-text">
                  <h3>
                    {useTranslation("home.missionValueVision.mission")}
                  </h3>
                    <p>
                      { useTranslation("home.missionValueVision.missionDescription") }
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-text">
                  <h3>
                    {useTranslation("home.missionValueVision.vision")}
                  </h3>
                    <p>{ useTranslation("home.missionValueVision.visionDescription")}</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-text">
                  <h3>
                    {useTranslation("home.missionValueVision.values")}
                  </h3>
                    <p>
                      { useTranslation("home.missionValueVision.valuesDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <GalleryPreview />

          <Volunteers />

          <div id="fh5co-services-section">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                  <h3>{ useTranslation("projects.title") }</h3>
                </div>
              </div>

              <Projects />

            </div>
          </div>

          <BlogPreview />

          <ContactInfo />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
