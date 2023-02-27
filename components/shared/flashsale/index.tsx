import { Col, Row } from 'antd';
import React from 'react';
import ItemFlashsale from './ItemFlashsale';
import CountDown from '../countDown';
import dayjs from 'dayjs';

function Flashsale() {
  const time = dayjs().add(3, 'days').valueOf();
  return (
    <div className="flash-sale">
      <div className="flash-sale__title">
        <div className="flash-sale__ribbon-wrap">
          <div className="flash-sale__ribbon">FLASHSALE HÔM NAY</div>
        </div>
        <CountDown futureDate={time} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xl={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <ItemFlashsale />
        </Col>
        <Col xl={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <ItemFlashsale />
        </Col>
        <Col xl={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <ItemFlashsale />
        </Col>
      </Row>
    </div>
  );
}

export default Flashsale;
