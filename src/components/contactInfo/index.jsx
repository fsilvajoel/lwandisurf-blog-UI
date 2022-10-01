import React from "react";
import useTranslation from "../../i18n/translator"

function ContactInfo({ id, title, image }) {
  return (
    <div id="fh5co-contact" className="fh5co-content-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="col-md-12 text-center heading-section">
              <h3>{ useTranslation("home.address.title") }</h3>
            </div>

            <h4>
              <i className="icon-location mr-2"></i>
              { useTranslation("home.address.addressLocation") }
            </h4>

            <h4>
              <i className="icon-instagram mr-2"></i>
              { useTranslation("home.address.instagram") }
              <a href="https://www.instagram.com/lwandisurf/?hl=en">
                {" "}
                Instagram @lwandisurf <i className="icon-link"></i>
              </a>
            </h4>
            <h4>
              <i className="icon-facebook2 mr-2"></i>
              { useTranslation("home.address.facebook") }
              <a href="https://www.instagram.com/lwandisurf/?hl=en">
                {" "}
                Facebook @lwandisurf <i className="icon-link"></i>
              </a>
            </h4>

            <h4>
              <i className="icon-youtube mr-2"></i>
              { useTranslation("home.address.youtube") }
              <a href="https://www.youtube.com/channel/UColVbh23p-lI9Z0HE0ujwiQ">
                {" "}
                Youtube Lwandi TV <i className="icon-link"></i>
              </a>
            </h4>
          </div>

          <div className="col-md-5">
            <div className="col-md-12 text-center heading-section">
              <h3>{ useTranslation("home.howToHelp.title") }</h3>
            </div>

              <h4>
                <i className="icon-coin-dollar mr-2"></i>
                { useTranslation("home.howToHelp.way01") }
                <a href="https://benfeitoria.com/lwandisurf">
                  {" "}
                  Benfeitoria <i className="icon-link"></i>
                </a>
              </h4>
              <h4>
                <i className="icon-tag2 mr-2"></i>
                { useTranslation("home.howToHelp.way02") }
                <a href="https://querodobra.com.br/colab/lwandi-surf/">
                  {" "}
                  Produtos <i className="icon-link"></i>
                </a>
              </h4>
              <h4>
                <i className="icon-tag2 mr-2"></i>
                { useTranslation("home.howToHelp.way03") }
                <a href="https://www.reserva.ink/exchangedobem?sort=Lwandi">
                  {" "}
                  Produtos <i className="icon-link"></i>
                </a>
              </h4>
              <h4>
                <i className="icon-support mr-2"></i>
                { useTranslation("home.howToHelp.way04") }
                <a href="https://exchangedobem.com/lwandi-surf-mocambique/">
                  {" "}
                  Exchange do Bem <i className="icon-link"></i>
                </a>
              </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
