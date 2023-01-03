import { Col, Row } from 'antd';
import React from 'react';
import ItemFlashsale from './ItemFlashsale';
import CountDown from '../countDown';

function Flashsale() {
  return (
    <div className="flash-sale">
      <div className="flash-sale__title">
        <div className="flash-sale__ribbon-wrap">
          <div className="flash-sale__ribbon">FLASHSALE HÔM NAY</div>
        </div>
        <CountDown />
      </div>
      <Row gutter={[20, 20]}>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <ItemFlashsale />
        </Col>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <ItemFlashsale />
        </Col>
        <Col
          xl={{ span: 8 }}
          lg={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <ItemFlashsale />
        </Col>
      </Row>
    </div>
  );
}

export default Flashsale;
