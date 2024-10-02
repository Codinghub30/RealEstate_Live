import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './Images/img1.jpg';
import Image2 from './Images/img2.jpg';
import Image3 from './Images/img3.jpg';
import Image4 from './Images/img4.jpg';
import Image5 from './Images/img7.jpg';
import Image6 from './Images/img5.jpg';
import Image7 from './Images/img6.jpg';
import Image8 from './Images/img7.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function About_Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={Image1}
          alt="First slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Image5}
          alt="Second slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Image7}
          alt="Third slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={Image4}
          alt="Fourth slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={Image5}
          alt="Fifth slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={Image6}
          alt="Sixth slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default About_Slider;
