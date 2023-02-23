import React from 'react';
import './Laurels.css';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const AwardCard = ({ award : {imgUrl, title, subtitle} }) => {
  return (
    <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt="award"/>
      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{ color : '#DCCA87'}}>{title}</p>
        <p className='p__cormorant'>{subtitle}</p>
      </div>
    </div>
  )
}

const Laurels = () => {
  const awardsList = data.awards.map((award) => {
    return (
      <AwardCard award={award} key={award.title}/>
    )
  });
  
  
  return (
    <div className='app__bg app__wrapper section__padding' id="awards">
      
      <div className='app__wrapper_info'>
        <SubHeading title="Awards & Recognition"/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels_awards'>
          {awardsList}
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.laurels} alt="laurels"/>
      </div>  

    </div>
  )
}

export default Laurels;
