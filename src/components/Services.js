import React, {Component} from 'react';

import '../styles/components/card/card-services.scss';
import '../styles/components/circle.scss';
import '../styles/section.scss'

import {SERVICES_CONTENT} from "../core/constants";

import SearchIcon from "mdi-react/SearchIcon";
import DownloadIcon from "mdi-react/DownloadIcon";
import AlertIcon from "mdi-react/AlertIcon";

import Button from "../shared/components/Button";


class Services extends Component {
  constructor() {
    super();
    this.state = {
      data: SERVICES_CONTENT
    }
  }

  render() {

    return (
      <section className="ad-section ad-section--grey">
        <div className="ad-section_container">
          <div className="ad-card-services_grid">
            {this.state.data.map((item, index) => {
              return (
                <div className="ad-card-services" key={index}>
                  <div className="ad-card-services_head">
                    {item.type === 'notify' && <div className="ad-circle--green"><SearchIcon/></div>}
                    {item.type === 'msq' && <div className="ad-circle--yellow"><DownloadIcon/></div>}
                    {item.type === 'advertise' && <div className="ad-circle--red"><AlertIcon/></div>}
                  </div>
                  <div className="ad-card-services_body">
                    <h4 className="ad-card-services_title">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="ad-card-services_actions">
                    <Button text={item.buttonText} btnType={'round'}/>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    );
  }
}

export default Services;


