import React from "react";

// import { Container } from './styles';

function Volunteers() {
  return (
    <div id="fh5co-content-section" className="fh5co-section-gray">

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Depoimentos de voluntários</h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 mt-5">
            <div className="fh5co-testimonial text-center animate-box">
              <figure>
                <img src="images/foto_andrea.jpg" alt="Voluntária Andrea" title="Andrea" />
              </figure>
              <blockquote>
                <p className="text-center">
                  "Sou grata pelo meu tempo como voluntária na Lwandi Surf. É uma organização que se orgulha de tudo o que faz, 
                  ao mesmo tempo em que realiza uma contribuição significativa para a comunidade da Ponta do Ouro. Adorei fazer 
                  parte dos programas de ensino de inglês e Yoga. A equipe da Lwandi é apaixonada pelo o que faz e é formada por 
                  dedicados líderes comunitários e me sinto muito orgulhosa de ter trabalhado para esta ONG!"
                </p>
              </blockquote>
              <span>Andrea Williams</span>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="fh5co-testimonial text-center animate-box">
              <figure>
                <img src="images/foto_michela.jpg" alt="Voluntário Michela" title="Michela" />
              </figure>
              <blockquote>
                <p className="text-center">
                  "Ser voluntária da Lwandi Surf foi uma experiência incrível, e sou muito grata pelo meu tempo com eles. 
                  Gabriel e Rômulo são apaixonados pelo que fazem, sua energia e ética de trabalho também refletem isso. 
                  Adorei me envolver com as crianças através da yoga, aulas de inglês, atividades em grupos e aulas de natação, 
                  além de aprender mais sobre a cultura e terapia do surfe. Obrigado por esta oportunidade."
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
