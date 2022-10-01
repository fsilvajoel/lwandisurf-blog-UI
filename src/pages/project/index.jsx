import React from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";
import Projects from "../../components/projects";
import useTranslation from "../../i18n/translator"

function Project() {
    const title = useTranslation("projects.banner.title");
    const subtitle = useTranslation("projects.banner.subtitle");
  return (
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <SocialLinks />
            <Header page="project" />

            <BannerIntro
                mainTitle={title}
                subtitle={subtitle}
                image="images/projeto-cover.jpg"
            />

            <div id="fh5co-about" className="fh5co-content-section container">
                <div className="row m-15">
                    <div className="col-md-10 col-md-offset-1 mb-10 text-justify">
                        <p>{ useTranslation("projects.core.p1") }</p>
                        
                        <p>{ useTranslation("projects.core.p2") }</p>
                        
                        <p>{ useTranslation("projects.core.p3") }</p>
                    </div>
                </div>

                <div className="row m-15">
                    <div className="text-center animate-box">
                        <div className="col-md-12 text-center heading-section">
                            <h3>{ useTranslation("projects.title") }</h3>
                        </div>
                    </div>
                </div>

                <div className="row m-15">
                    <Projects />
                </div>
            </div>

            <Footer />
        </div>
    </div>
  );
}

export default Project;
