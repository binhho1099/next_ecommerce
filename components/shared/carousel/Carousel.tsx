import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  position: 'relative',
  aspectRatio: '5/2',
  background: '#364d79',
};
const binh = [1, 2, 3, 4];

function MainCarousel() {
  return (
    <Carousel className="carousel" autoplay>
      {binh.map((ho) => {
        return (
          <div key={ho}>
            <div style={contentStyle}>
              <Image
                src="/images/slider.png"
                fill
                alt="banner"
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
