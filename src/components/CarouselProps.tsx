/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'react-bootstrap';

interface CarouselProps {
  images: string[];
}

export const MyCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item key={image}>
          <img className="d-block w-100" src={image} alt={image} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};