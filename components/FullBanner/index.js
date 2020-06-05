import React from 'react'

import {
  Jumbotron
} from 'reactstrap';

const FullBanner = () => {
  return (

    <Jumbotron>
      <div className="home">
        <h1>Mude seu corpo e transforme a sua vida</h1>
        <p>Os melhores exercícios para fazer em casa estão no FITPLAY, a sua nova plataforma de treinos online. Vamos começar?</p>
        <a className="btn btn-primary btn-lg" href="https://open.fitplay.onttplay.com.br/fitplay/cadastro" onClick={ () => { 
          dataLayer.push({ 'event': 'gaEvent','eventCategory': 'home', 'eventAction':'call-to-action-1', 'eventLabel': 'ganhe-15-dias-gratis'}); 
        }}>Experimente por 15 dias!</a>
      </div>

      <style jsx>{`
        .home{
          height: 84vh;
          border-radius: 0;
          position: relative;
          padding: 2rem 1rem;
          z-index: 2;
        }
        h1 {
          padding-top: 15%;
        }
        .btn-lg {
          margin: 15px 0 10px;
          padding-left: 30px;
          padding-right: 30px; 
        }
        @media (min-width: 335.98px) {
          h1 {
            padding-top: 25%;
          }
          .btn-lg {
            padding-left: 60px;
            padding-right: 60px; 
          }
        }
        @media (min-width: 575.98px) {
          text-align: center;
          h1 {
            padding: 8% 10% 4% 10%;
          }
          p {
            padding: 0 20%;
          }
        }
    `}</style>
    </Jumbotron>
  );
};

export default FullBanner;