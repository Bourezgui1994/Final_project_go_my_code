import React from 'react'
import '../Screens/Home/Home.css'
import { Carousel,Button} from 'react-bootstrap';


const Header = ({carousel}) => {
    return (
        <div>
        <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={carousel[0].img}
            alt="First slide" style={{width:'auto' ,height:'75vh'}}
          />
          <Carousel.Caption className='titleHeader'>
            <h2> {carousel[0].title}</h2>
            <p> {carousel[0].subtitle}</p>
            <Button variant="warning" size="lg" className="btnCarousel"> Visiter Notre Boutique </Button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel[1].img}
            alt="Second slide" style={{width:'auto' ,height:'75vh'}}
          />
      
          <Carousel.Caption className='titleHeader'>
          <h2> {carousel[1].title}</h2>
          <p> {carousel[1].subtitle}</p>
          <Button variant="warning" size="lg" className="btnCarousel"> Visiter Notre Boutique </Button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel[2].img}
            alt="Third slide" style={{width:'auto' ,height:'75vh'}}
          />
      
          <Carousel.Caption className='titleHeader'>
            <h2> {carousel[2].title}</h2>
            <p> {carousel[2].subtitle}</p>
            <Button variant="warning" size="lg" className="btnCarousel"> Visiter Notre Boutique </Button>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default Header;
