import { Col, Row, Statistic } from 'antd';
import React from 'react';
import CardType1 from '../cartType1';

const { Countdown } = Statistic;

function SectionCart() {
  return (
    <div className="section-cart">
      <div className="section-cart__heading">
        <div className="section-cart__heading--left">
          <h3 className="section-cart__text">
            <span style={{ color: ' #F35801' }}>TOP </span>
            <span style={{ color: '#063B9A' }}>E-VOUCHER</span>
          </h3>
          <h4 className="section-cart__text-sub">
            <span style={{ color: '#063B9A' }}>So Luong </span>
            <span style={{ color: '#fff' }}>co han</span>
          </h4>
        </div>
        <div className="section-cart__heading--right">
          <Countdown value={Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30} />
        </div>
      </div>
      <div className="section-cart__body">
        <Row gutter={[20, 20]}>
          <Col
            xl={{ span: 8 }}
            lg={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <CardType1
              image="/images/cart--iphone11.jpg"
              title="Cảm thấy trong người 'Bồn Chồn' sắm ngay 'AI PHÔN'"
              price={20000}
              oldPrice={24000}
              sold={75}
              total={100}
            />
          </Col>
          <Col
            xl={{ span: 8 }}
            lg={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <CardType1
              image="/images/cart--macbook.jpg"
              title="Dừng lại một lúc, mua con Macbook"
              price={40000}
              oldPrice={44000}
              sold={13}
              total={100}
            />
          </Col>
          <Col
            xl={{ span: 8 }}
            lg={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <CardType1
              image="/images/cart--kinh.jpg"
              title="Bí kíp thả 'THÍNH', mua ngay 'MẮT KÍNH'"
              price={40.0}
              oldPrice={44.0}
              sold={75}
              total={100}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SectionCart;
