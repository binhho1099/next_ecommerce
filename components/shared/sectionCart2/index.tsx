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
          <CartType2
            title="E-VOUCHER TẶNG KEM CHỐNG NẮNG"
            oldPrice="2000"
            newPrice="1550"
            stock="100"
            image="/images/cart2--kem.jpg"
          />
        </Col>
        <Col span={24} xl={12}>
          <CartType2
            title="E-VOUCHER TẶNG PHẤN TRANG ĐIỂM"
            oldPrice="1000"
            newPrice="696"
            stock="50"
            image="/images/cart2-phan.jpg"
          />
        </Col>
      </Row>
    </div>
  );
}

export default SectionCart2;
