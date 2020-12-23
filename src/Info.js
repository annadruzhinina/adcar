import React from 'react';

import './styles/section.scss';
import './styles/typography/text-uppercase.scss';
import './styles/components/info.scss';

import img from './img/infoBg.jpg';
import img2 from './img/infoBg2.jpg';
import img3 from './img/infoBg3.jpg';

import {INFO_CONTENT} from "./constants";

function Info() {
  return (
    <section className="ad_section">
      <div className="ad-info">
        <div className="ad-info_img">
          <div className="ad-info_img-item ad-img-1">
            <img src={img} alt=""/>
          </div>
          <div className="ad-info_img-item ad-img-2">
            <img src={img2} alt=""/>
          </div>
          <div className="ad-info_img-item ad-img-3">
            <img src={img3} alt=""/>
          </div>
        </div>
        <div className="ad-info_txt">
          <h3 className='ad-section_title ad-text-upper'>
            {INFO_CONTENT.title}
          </h3>
          <p>
            {INFO_CONTENT.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
