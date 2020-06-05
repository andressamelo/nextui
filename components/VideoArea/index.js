import React from 'react'
import ReactPlayer from 'react-player'

import {
  Container,
  Row,
  Col
} from 'reactstrap';

let player = null;
let videoProgressFiredEvents = [];

const Video = () => {
  return (
    <Container fluid={true} className="video-area text-center">
      <Row className="text-center">
        <Col xl="8" md="10" xs="12" className="mb-4 mx-auto">
          <div className='player-wrapper'>
            <ReactPlayer
              ref={ (p) => player = p }
              className='react-player'
              url='https://landing-fitplay.s3.amazonaws.com/video/fitplay_video.mp4'
              width='100%'
              height='100%'
              controls
              light='./assets/img_thumbnail_featured.jpg'
              playing
              onPlay={ () => {
                dataLayer.push({ 'event': 'gaEvent', 'eventCategory': 'home-video', 'eventAction': 'play', 'eventLabel': 'video-introducao' })
              } }
              onEnded={ () => {
                dataLayer.push({ 'event': 'gaEvent', 'eventCategory': 'home-video', 'eventAction': 'retenção-100%', 'eventLabel': 'video-introducao' })
              } }
              onProgress={ (e) => {
                let percentage = Math.round(e.playedSeconds * 100 / player.getDuration())

                for ( let i = 25; i < 100; i += 25 ) {
                  if (percentage > i && percentage < (i + 25) && videoProgressFiredEvents.indexOf(i) == -1 ) {
                    videoProgressFiredEvents.push(i)
                    dataLayer.push({ 'event': 'gaEvent', 'eventCategory': 'home-video', 'eventAction': `retenção-${i}%`, 'eventLabel': 'video-introducao' })
                  }
                }
              } }
            />
          </div>
        </Col>
        <Col xs="12" className="pr-5 pl-5">
          <h2>Tá esperando o que pra sair do sofá?</h2>
          <ul className="text-left d-inline-block pt-2 pb-4">
            <li>Aproveite o lançamento do FITPLAY</li>
            <li>Experimente por 15 dias</li>
            <li>Encontre o treino que é a sua cara</li>
          </ul>
        </Col>
        <a className="btn btn-primary btn-lg mx-auto mb-5" href="https://open.fitplay.onttplay.com.br/fitplay/cadastro" onClick={ () => {
          dataLayer.push({ 'event': 'gaEvent','eventCategory': 'home', 'eventAction':'call-to-action-2', 'eventLabel': 'quero-agora'});
        }}>Quero Agora</a>
      </Row>

      <style jsx>{`
        .player-wrapper {
          margin-top: -80px;
        }
        @media (min-width: 575.98px) {
          .player-wrapper {
            margin-top: 0;
          }
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          position: relative;
          padding: 5px 0 5px 42px;
          line-height: 26px;
          background: url('./assets/check.svg') center left no-repeat;
        }
    `}</style>
    </Container>
  );
};

export default Video;