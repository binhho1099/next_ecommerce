import { Col, Row } from 'antd';
import React from 'react';
import CartType2 from '../cartType2';

function SectionCart2() {
  return (
    <div className="section-cart-2__container">
      <h2 className="section-cart-2__heading">
        E-VOUCHER{' '}
        <span className="section-cart-2__heading--strong">CHỚP NHOÁNG</span>{' '}
      </h2>
      <Row gutter={[32, 64]}>
        <Col span={24} xl={12}>
          <CartType2 />
        </Col>
        <Col span={24} xl={12}>
          <CartType2 />
        </Col>
      </Row>
    </div>
  );
}

export default SectionCart2;
