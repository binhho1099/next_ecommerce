import {
  ClockCircleOutlined,
  HomeOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { toast } from 'react-toastify';

interface FormContact {
  name: string;
  phone: string;
  email: string;
  nameCompany: string;
  content: string;
}

function Contact() {
  const [form] = Form.useForm();

  const onSubmit = (value: FormContact) => {
    toast.success(
      'Yêu cầu của bạn đã được gửi đến bộ phận phụ trách, Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất. Xin cám ơn'
    );
    form.resetFields();
    console.log(value);
  };

  return (
    <div className="section">
      <div className="contact">
        <h2 className="contact-heading">Chúng tôi sẵn sàng giúp bạn</h2>
        <p className="contact-subheading">
          Cho chúng tôi biết thông tin về bạn!
        </p>
        <Form onFinish={onSubmit} form={form}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập họ tên',
              },
            ]}
          >
            <Input placeholder="Họ và tên" size="large" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                pattern: new RegExp(
                  /^(\+84|0|3|5|7|9)([0-9]{9}|[1-9][0-9]{7,8})$/
                ),
                message:
                  'Số điện thoại không đúng định dạng. VD: 0912345678 hoặc +84091234567',
              },
            ]}
          >
            <Input placeholder="Số điện thoại" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập email',
              },
              {
                type: 'email',
                message: 'Email không đúng',
              },
            ]}
          >
            <Input placeholder="Địa chỉ email" size="large" />
          </Form.Item>
          <Form.Item name="nameCompany">
            <Input placeholder="Tên công ty" size="large" />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập nội dung liên hệ',
              },
            ]}
          >
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
          <Row gutter={24} style={{ alignItems: 'center' }}>
            <Col span={16}>
              <div className="location__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.367581542252!2d106.76111344971909!3d10.859621592227134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175279b732e3b1b%3A0x2f28b07182d662eb!2zMzJDIMSQLiBIb8OgbmcgRGnhu4d1IDIsIFBoxrDhu51uZyBMaW5oIFRydW5nLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1676684092319!5m2!1svi!2s"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
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
