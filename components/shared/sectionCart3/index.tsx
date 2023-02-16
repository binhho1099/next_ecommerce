import { Col, Row } from 'antd';
import React from 'react';
import CartType3 from '../cartType3';

function SectionCart3() {
  return (
    <div className="section-cart-3__container">
      <h2 className="section-cart-3__heading">
        HOT NHẤT <span className="section-cart-3__heading--strong">HÈ NÀY</span>{' '}
      </h2>
      <Row gutter={[32, 32]}>
        <Col span={24} xl={12}>
          <CartType3
          // title="E-VOUCHER TẶNG KEM CHỐNG NẮNG"
          // oldPrice="2000"
          // newPrice="1550"
          // stock="100"
          // image="/images/cart2--kem.jpg"
          />
        </Col>
        <Col span={24} xl={12}>
          <CartType3
          // title="E-VOUCHER TẶNG PHẤN TRANG ĐIỂM"
          // oldPrice="1000"
          // newPrice="696"
          // stock="50"
          // image="/images/cart2-phan.jpg"
          />
        </Col>
        <Col span={24} xl={12}>
          <CartType3
          // title="E-VOUCHER TẶNG PHẤN TRANG ĐIỂM"
          // oldPrice="1000"
          // newPrice="696"
          // stock="50"
          // image="/images/cart2-phan.jpg"
          />
        </Col>
        <Col span={24} xl={12}>
          <CartType3
          // title="E-VOUCHER TẶNG PHẤN TRANG ĐIỂM"
          // oldPrice="1000"
          // newPrice="696"
          // stock="50"
          // image="/images/cart2-phan.jpg"
          />
        </Col>
      </Row>
    </div>
  );
}

export default SectionCart3;
