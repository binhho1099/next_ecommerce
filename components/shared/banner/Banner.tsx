import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const imagesBanner = [
  { name: 'banner 1', url: '/images/banner.png' },
  { name: 'banner 2', url: '/images/banner-1.png' },
  { name: 'banner 3', url: '/images/banner-2.jpg' },
];

function Banner() {
  return (
    <Row gutter={[16, 16]}>
      {imagesBanner.map(banner => {
        return (
          <Col
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            key={banner.name}
          >
            <Link href={`/products`}>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '5/2',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <Image src={banner.url} alt={banner.name} fill />
              </div>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}

export default Banner;
