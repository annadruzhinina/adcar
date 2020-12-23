import React from 'react';

import '../styles/components/info.scss';

import {INFO_CONTENT} from "../core/constants";

function Info() {
  return (
    <section className="ad-info">
      <div className="ad-info_img"></div>
      <div className="ad-info_content">
        <h3 className="ad-info_title">
          {INFO_CONTENT.title}
        </h3>
        <p>
          {INFO_CONTENT.description}
        </p>
      </div>
    </section>
  );
}

export default Info;
