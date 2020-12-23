import React from 'react';

import YoutubeIcon from "mdi-react/YoutubeIcon";
import FacebookIcon from "mdi-react/FacebookIcon";

import {FOOTER_CONTENT, INFO} from "./constants";


import "./styles/components/footer.scss";

function Footer() {
  return (
    <footer className="ad-footer">
      <div className="ad-footer_container">
        <p className="ad-footer_info">
          <strong>
            {FOOTER_CONTENT.copyright}&nbsp;&nbsp;
            <a href={`mailto:${INFO.email}`}>{INFO.email}</a>
          </strong>
        </p>
        <div className="ad-footer_social">
          <a href="https://www.facebook.com/adcar.me"
             target="_blank"><FacebookIcon/></a>
          <a href="https://www.youtube.com/channel/UCINmf7nA-zslXuJ4fpfifDw"
             target="_blank"><YoutubeIcon/></a>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
