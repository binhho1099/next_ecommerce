import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Banner() {
  return (
    <Row gutter={[16, 16]}>
      {[1, 2, 3].map((banner) => {
        return (
          <Col
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            xl={{ span: 8 }}
            key={banner}
          >
            <Link href={`/products`}>
              <div style={{ position: 'relative', aspectRatio: '5/2' }}>
                <Image src="/images/banner.png" alt="product" fill />
              </div>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}

export default Banner;
