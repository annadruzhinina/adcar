import React, {Component} from 'react';

import {ABOUT_CONTENT} from "../core/constants";

import '../styles/typography/text-center.scss'
import '../styles/section.scss'
import '../styles/components/card/card-about.scss'

import DeleteAlertIcon from "mdi-react/DeleteAlertIcon";
import DeleteCircleIcon from "mdi-react/DeleteCircleIcon";
import FindInPageIcon from "mdi-react/FindInPageIcon";
import DirectionsCarIcon from "mdi-react/DirectionsCarIcon";
import AddLocationIcon from "mdi-react/AddLocationIcon";


class About extends Component {
  constructor() {
    super();

    this.state = {
      data: ABOUT_CONTENT.list,
      title: ABOUT_CONTENT.title,
      description: ABOUT_CONTENT.description
    }
  }

  render() {
    const createDescription = () => {
      return {__html: this.state.description};
    }
    return (
      <section className="ad-section ad-text-center">
        <div className="ad-section_container">
          <h3 className='ad-section_title'>
            {this.state.title}
          </h3>
          <p className="ad-section_subtitle"
             dangerouslySetInnerHTML={createDescription()}>
          </p>
          <div className="ad-card-about_grid">
            {this.state.data.map((card, index) => {
              return (
                <div key={index} className="ad-card-about">
                  <div className="ad-card-about_icon">
                    {card.icon === 'type1' && <DirectionsCarIcon/>}
                    {card.icon === 'type2' && <DeleteAlertIcon/>}
                    {card.icon === 'type3' && <DirectionsCarIcon/>}
                    {card.icon === 'type4' && <AddLocationIcon/>}
                    {card.icon === 'type5' && <DeleteCircleIcon/>}
                    {card.icon === 'type6' && <FindInPageIcon/>}
                  </div>
                  <h3 className="ad-card-about_title">{card.title}</h3>
                  <div>{card.description}</div>
                </div>
              )
            })
            }

          </div>
        </div>
      </section>
    );
  }
}

export default About;
