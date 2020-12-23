import React from 'react';
import Button from "./components/Button";

import "./styles/components/hero.scss";

import {HERO_CONTENT} from "./constants";

function Hero() {
  const createTitle = () => {
    return {__html: HERO_CONTENT.title};
  }
  const createDescription = () => {
    return {__html: HERO_CONTENT.text};
  }
  return (
    <section className="ad-hero">
      <div className="ad-hero_bg"></div>
      <div className="ad-hero_container">
        <h1 className='ad-hero_title'
            dangerouslySetInnerHTML={createTitle()}></h1>
        <p className="ad-hero_text"
           dangerouslySetInnerHTML={createDescription()}></p>
        <div className="ad-hero_actions">
          <Button text={HERO_CONTENT.btn1}/>
          <Button text={HERO_CONTENT.btn2} btnType={'secondary'}/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
