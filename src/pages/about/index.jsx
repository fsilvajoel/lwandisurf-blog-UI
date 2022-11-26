import React from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";
import useTranslation from "../../i18n/translator";

function About() {

    const title = useTranslation("aboutUs.title");
    const subtitle = useTranslation("aboutUs.subtitle");

  return (
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <SocialLinks />
            <Header page="about" />

            <BannerIntro
                mainTitle={ title }
                subtitle={ subtitle }
                image="images/about-cover.jpg"
            />
            
            <div id="fh5co-about" className="fh5co-content-section">
                <div className="container">
                    <div className="row m-15">
                        <div className="animate-box">
                            <div className="col-md-12 text-center heading-section">
                                <h3>{ useTranslation("aboutUs.history.title")}</h3>
                            </div>
                            <div className="col-md-10 col-md-offset-1 text-justify">
                                <p>
                                    { useTranslation("aboutUs.history.p1") }
                                </p>
    
                                <p>
                                    { useTranslation("aboutUs.history.p2") }
                                </p>
    
                                <p>
                                    { useTranslation("aboutUs.history.p3") }
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="text-center animate-box">
                            <div className="col-md-12 text-center heading-section mt-5">
                                <h3>{ useTranslation("aboutUs.founders.title") }</h3>
                            </div>
                            <div id="fh5co-features">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="feature-left feature-left-center">
                                                <div className="feature-copy">
                                                    <h3>Gabriel F. Carrião de Freitas</h3>
                                                    <p className="text-justify">
                                                        { useTranslation("aboutUs.founders.f1") }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="feature-left feature-left-center ">
                                                <div className="feature-copy">
                                                    <h3>Gerson Severo da Trindade</h3>
                                                    <p className="text-justify">
                                                        { useTranslation("aboutUs.founders.f2") }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="feature-left feature-left-center">
                                                <div className="feature-copy">
                                                    <h3>Rômulo de Lima de Oliveira</h3>
                                                    <p className="text-justify">
                                                        { useTranslation("aboutUs.founders.f3") }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row m-15">
                        <div className="text-center animate-box">
                            <div className="col-md-12 text-center heading-section mt-5">
                                <h3>{ useTranslation("aboutUs.partners.title") }</h3>
                            </div>
                            <div id="fh5co-features">

                                <div className="col-md-10 col-md-offset-1 text-justify">
                                    <p>
                                        { useTranslation("aboutUs.partners.t1") }
                                    </p>
 
                                    <p>
                                        { useTranslation("aboutUs.partners.t2") }
                                    </p>
                                    
                                    <ol>
                                        <li>{ useTranslation("aboutUs.partners.t3") }</li>
                                        <li>{ useTranslation("aboutUs.partners.t4") }</li>
                                        <li>{ useTranslation("aboutUs.partners.t5") }</li>
                                        <li>{ useTranslation("aboutUs.partners.t6") }</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row div-parcerias">

                        <div className="col-md-12 d-flex flex-wrap justify-content-evenly align-items-center">
                            <a href="https://www.instagram.com/baleia.solidaria/" target="blank">
                                <img src="images/parceiro1.png" alt="Parceiro Baleia Solidaria" title="Baleia Solidaria"/></a>
                            
                            <a href="https://exchangedobem.com/lwandi-surf-mocambique/" target="blank">
                                <img src="images/parceiro2.png" alt="Parceiro exchangedobem" title="exchangedobem"/></a>
                            
                            <a href="http://lumenk.com.br/" target="blank">
                                <img src="images/parceiro3.png" alt="Parceiro Lumenk" title="Lumenk"/></a>
                            
                            <a href="https://intlsurftherapy.org/" target="blank">
                                <img src="images/parceiro4.jpg" alt="Parceiro ISTO" title="International Surf Therapy Organization"/></a>
                            
                            <a href="https://www.waves-for-change.org/" target="blank">
                                <img src="images/parceiro5.png" alt="Parceiro Waves for Change" title="Waves for Change"/></a>
                            
                            <a href="https://www.facebook.com/UnderWaterExplorerPontadoOuro/" target="blank">
                                <img src="images/parceiro6.jpg" alt="Parceiro Under Water Explorer Mozambique" title="Under Water Explorer Mozambique"/></a>

                            <a href="https://querodobra.com.br/blog/lwandi-surf-uma-onda-de-esperanca/" target="blank">
                                <img src="images/parceiro7.png" alt="Parceiro Dobra" title="Dobra"/></a>

                            <a href="http://www.mozambiquescuba.com/" target="blank">
                                <img src="images/parceiro8.jpg" alt="Parceiro Mozambique Scuba" title="Mozambique Scuba"/></a>
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
