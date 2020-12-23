import React, {Component} from 'react';

import '../styles/components/services.scss';
import '../styles/components/icon-circle.scss';
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
      <section className="ad-section ad-services">
        <div className="ad-section_container">
          <div className="ad-services_grid">
            {this.state.data.map((item, index) => {
              return (
                <div className="ad-services_card" key={index}>
                  <div className="ad-services_card-head">
                    {item.type === 'notify' && <div className="ad-circle--green"><SearchIcon/></div>}
                    {item.type === 'msq' && <div className="ad-circle--yellow"><DownloadIcon/></div>}
                    {item.type === 'advertise' && <div className="ad-circle--red"><AlertIcon/></div>}
                  </div>
                  <div className="ad-services_card-body">
                    <h4 className="ad-services_card-title">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="ad-services_card-actions">
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


