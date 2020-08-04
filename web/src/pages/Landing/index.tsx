import React from 'react';

import logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';



export default function Landing(){
  return (
    <div id="page-landing">
      <div id="pagr-landing-content" className="container">
        <div className="logo-container">
          <img src= { logo } alt="logo"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={ landingImg } alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <a href="/" className="study">
            <img src= { studyIcon } alt= "estudar"/>
            Estudar
          </a>

          <a href="/" className = "give-classes">
            <img src={ giveClassesIcon } alt="dar aulas"/>
            Dar aulas
          </a>

          <span className="total-connections">
            Total de 200 conexões já realizadas <img src= { purpleHeart } alt= "coração roxo"/>
          </span>
        </div>
      </div>
    </div>
  );
}