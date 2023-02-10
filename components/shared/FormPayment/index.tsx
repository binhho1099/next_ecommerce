import { Form, Input } from 'antd';
import React from 'react';
import { toast } from 'react-toastify';

interface FormType {
  name: string;
  address: string;
  phonenumber: string;
  email: string;
}

function FormPayment() {
  const [form] = Form.useForm();

  const initialValues: FormType = {
    name: '',
    address: '',
    phonenumber: '',
    email: '',
  };

  const handlePayment = (value: FormType) => {
    toast.info('Tính năng chưa phát triển');
  };
  return (
    <div className="cart-info">
      <h3 className="cart-info__title">Thông tin khách hàng</h3>
      <Form form={form} onFinish={handlePayment} initialValues={initialValues}>
        <Form.Item
          name="username"
          hasFeedback
          rules={[{ required: true, message: 'Bạn chưa nhập họ và tên!' }]}
        >
          <Input placeholder="Họ và Tên" />
        </Form.Item>
        <Form.Item
          name="address"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Bạn chưa nhập địa chỉ giao hàng',
            },
          ]}
        >
          <Input placeholder="Địa chỉ giao hàng" />
        </Form.Item>
        <Form.Item
          name="phonenumber"
          hasFeedback
          rules={[
            { required: true, message: 'Bạn chưa nhập số điện thoại' },
            {
              pattern: new RegExp(
                /^(\+84|0|3|5|7|9)([0-9]{9}|[1-9][0-9]{7,8})$/
              ),
              message:
                'Số điện thoại không đúng định dạng. VD: 0912345678 hoặc +84091234567',
            },
          ]}
        >
          <Input placeholder="Số điện thoại" />
        </Form.Item>
        <Form.Item
          name="email"
          hasFeedback
          rules={[
            { required: true, message: 'Bạn chưa nhập email' },
            {
              type: 'email',
              message: 'Email chưa hợp lệ! vd: abc@gmail.com',
            },
          ]}
        >
          <Input placeholder="Email của bạn" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormPayment;
