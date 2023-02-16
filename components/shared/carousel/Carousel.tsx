import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  position: 'relative',
  aspectRatio: '5/2',
  background: '#364d79',
};
const imagesSlider = [
  {
    name: 'nhà hàng',
    linkLocal: '/images/slider.png',
  },
  {
    name: 'điện thoại',
    linkLocal: '/images/slider-1.jpg',
  },
  {
    name: 'điện thoại 1',
    linkLocal: '/images/slider-2.jpg',
  },
  {
    name: 'lap top',
    linkLocal: '/images/slider-3.png',
  },
];

function MainCarousel() {
  return (
    <Carousel className="carousel" autoplay>
      {imagesSlider.map(slider => {
        return (
          <div key={slider.name}>
            <div style={contentStyle}>
              <Image
                src={slider.linkLocal}
                fill
                alt={slider.name}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default MainCarousel;
