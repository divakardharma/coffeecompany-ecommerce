import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideImage1 from '../../assets/c1.jpg'; 
import SlideImage2 from '../../assets/c22.jpg'; 
import SlideImage3 from '../../assets/c3.jpg'; 

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={2000}
      pause="hover" 
      controls 
      indicators 
      
    >
      <Carousel.Item>
        <img  className="d-block w-100" src={SlideImage1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img  className="d-block w-100" src={SlideImage2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img  className="d-block w-100" src={SlideImage3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
