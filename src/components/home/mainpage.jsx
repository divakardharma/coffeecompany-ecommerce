import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideImage1 from '../../assets/image (3).jpg';
import SlideImage2 from '../../assets/image (4).jpg';
import SlideImage3 from '../../assets/image (5).jpg';
import SlideImage4 from '../../assets/image (6).jpg';
import SlideImage5 from '../../assets/image (7).jpg';
import SlideImage6 from '../../assets/image (8).jpg';
import SlideImage7 from '../../assets/image (9).jpg';
import SlideImage8 from '../../assets/image (10).jpg';
import SlideImage9 from '../../assets/image (14).jpg';
import SlideImage10 from '../../assets/image (15).jpg';
import SlideImage11 from '../../assets/image (16).jpg';
import SlideImage12 from '../../assets/image (17).jpg';
import './mainpage.css'; 

const coffeeData = [
  { src: SlideImage1, heading: 'COFFEE OR DIE ROAST', description: 'Medium' },
  { src: SlideImage2, heading: 'ORGANIC COFFEE', description: 'Medium' },
  { src: SlideImage3, heading: 'JUST DECAF COFFEE ROAST', description: 'Medium' },
  { src: SlideImage4, heading: 'FIT FUEL BLEND', description: 'Medium' },
  { src: SlideImage5, heading: 'FREEDOM FUEL ROAST', description: 'Medium' },
  { src: SlideImage6, heading: 'BLACK BREAD DELIGHT ROAST', description: 'Dark' },
  { src: SlideImage7, heading: 'BEYOND BLACK ROAST', description: 'Dark' },
  { src: SlideImage8, heading: 'MURDERED ROAST', description: 'Dark' },
  { src: SlideImage9, heading: 'THE BLUE LINE ROAST', description: 'Dark' },
  { src: SlideImage10, heading: 'JUST BLACK ROAST', description: 'Medium' },
  { src: SlideImage11, heading: 'GUN SHIP ROAST', description: 'Dark' },
  { src: SlideImage12, heading: 'CAFE ROAST', description: 'Dark' },

];

const MainPage = () => {
  return (
    <div className="items-bg" id='mainpage'>
      <h1 className="heading">BLACK RIFLE COFFEE ROASTS</h1>
      <div className="image-container">
        {coffeeData.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt={item.heading} className="image-item" />
            <p className="img-heading">{item.heading}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
