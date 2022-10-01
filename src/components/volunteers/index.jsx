import React from "react";

// import { Container } from './styles';
import useTranslation from "../../i18n/translator"

function Volunteers() {
  return (
    <div id="fh5co-content-section" className="fh5co-section-gray">

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>{ useTranslation("home.testimony.title")}</h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center">
          <div className="col-sm-12 col-md-5 mt-5">
            <div className="fh5co-testimonial text-center animate-box">
              <figure>
                <img src="images/foto_andrea.jpg" alt="Voluntária Andrea" title="Andrea" />
              </figure>
              <blockquote>
                <p className="text-center">
                  { useTranslation("home.testimony.firstTestimony") }
                </p>
              </blockquote>
              <span>Andrea Williams</span>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 mt-5">
            <div className="fh5co-testimonial text-center animate-box">
              <figure>
                <img src="images/foto_michela.jpg" alt="Voluntário Michela" title="Michela" />
              </figure>
              <blockquote>
                <p className="text-center">
                  { useTranslation("home.testimony.secondTestimony") }
                </p>
              </blockquote>
              <span>Michela Gordan</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Volunteers;
