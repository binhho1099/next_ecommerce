import {
  ClockCircleOutlined,
  HomeOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

function Contact() {
  return (
    <div className="section">
      <div className="contact">
        <h2 className="contact-heading">Chúng tôi sẵn sàng giúp bạn</h2>
        <p className="contact-subheading">
          Cho chúng tôi biết thông tin về bạn!
        </p>
        <Form>
          <Form.Item name="name">
            <Input placeholder="Họ và tên" size="large" />
          </Form.Item>
          <Form.Item name="phone">
            <Input placeholder="Số điện thoại" size="large" />
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="Địa chỉ email" size="large" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Tên công ty" size="large" />
          </Form.Item>
          <Form.Item>
            <Input.TextArea placeholder="Nội dung liên hệ" rows={5} />
          </Form.Item>
          <div className="contact-form__btn">
            <Button type="primary" htmlType="submit" size="large">
              Gửi yêu cầu
            </Button>
          </div>
        </Form>
      </div>
      <div className="location section">
        <div className="layout">
          <Row>
            <Col span={16}></Col>
            <Col span={8}>
              <div className="location-info">
                <h3>BinhHo Ecommerce</h3>
                <div className="location-info__item">
                  <h4>
                    <HomeOutlined />
                    Văn phòng của chúng tôi
                  </h4>
                  <p>Đường Hoàng Diệu 2, phường Linh Trung, quận Thủ Đức</p>
                </div>
                <div className="location-info__item">
                  <h4>
                    <PhoneOutlined />
                    Số điện thoại
                  </h4>
                  <p>0367 246 189</p>
                </div>
                <div className="location-info__item">
                  <h4>
                    <ClockCircleOutlined />
                    Giờ làm việc
                  </h4>
                  <p>Thứ 2 đến thứ 6: 0AM - 23PM</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Contact;
