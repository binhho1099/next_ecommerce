import FormPayment from '@/components/shared/FormPayment';
import { DeleteOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Input, InputNumber } from 'antd';
import { IProduct } from 'interfaces/product';
import { Product } from 'models/product';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import {
  changeQuantityCartPayment,
  removeCartPayment,
} from 'store/Slices/paymentSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';

function Payment() {
  const router = useRouter();
  const listCartPayment = useAppSelector(
    state => state.payment.paymentInfo.cart
  );
  const dispatch = useAppDispatch();

  if (listCartPayment.length <= 0) {
    router.push('/');
  }

  const total = useMemo(() => {
    const sum = listCartPayment.reduce((result: any, current: any): any => {
      return result + current.quantity * current.product.price * 23000 + 15000;
    }, 0);
    const total = sum.toLocaleString('vi');
    return total;
  }, [listCartPayment]);

  const handleChangeQuantity = (id: number, quantity: number) => {
    const data = {
      id,
      quantity,
    };
    dispatch(changeQuantityCartPayment(data));
  };

  return (
    <div className="layout">
      <div className="payment">
        <div className="payment-cart">
          <div className="payment-heading">
            <h1 className="payment-title">Thanh toán</h1>
            <Button type="link" onClick={() => router.push('/product')}>
              Mua thêm sản phẩm khác
              <RightOutlined />
            </Button>
          </div>
          <div className="payment-list">
            {listCartPayment.map(
              (item: { product: IProduct; quantity: number }) => {
                const { product, quantity } = item;
                const modelProduct = new Product(product);
                return (
                  <div className="payment-item">
                    <div className="payment-item__left">
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                        }}
                      >
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          fill
                        />
                      </div>
                      <Button
                        type="link"
                        danger
                        onClick={() => dispatch(removeCartPayment(product.id))}
                      >
                        <DeleteOutlined />
                        Xóa
                      </Button>
                    </div>
                    <div className="payment-item__center">
                      <div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                      </div>
                      <Button
                        type="link"
                        style={{ width: 'max-content' }}
                        onClick={() => router.push(`/products/${product.id}`)}
                      >
                        (Xem chi tiết)
                      </Button>
                    </div>
                    <div className="payment-item__right">
                      <div>
                        <p className="payment-item__right-old">
                          {modelProduct.handlePriceOld()}đ
                        </p>
                        <p className="payment-item__right-new">
                          {modelProduct.handlePrice()}đ
                        </p>
                      </div>
                      <div className="payment-item__right-quantity">
                        <Button
                          onClick={() => handleChangeQuantity(product.id, -1)}
                        >
                          -
                        </Button>
                        <InputNumber
                          value={quantity}
                          controls={false}
                          min={1}
                          // onChange={value => setQuantity(value!)}
                          max={9}
                          style={{ width: 45 }}
                        />
                        <Button
                          onClick={() => handleChangeQuantity(product.id, 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div className="payment-subtotal">
            <h3>Tạm tính: </h3>
            <span>{total}đ</span>
          </div>
        </div>
        <div className="payment-info">
          <FormPayment />
        </div>
        <div className="payment-total">
          <h3>Tổng cộng: </h3>
          <span>{total}đ</span>
        </div>
        <div>
          <Button
            htmlType="submit"
            block
            size="large"
            type="primary"
            style={{ fontWeight: 700 }}
          >
            Tiến hành đặt hàng và thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
