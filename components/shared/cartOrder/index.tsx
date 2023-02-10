import { DollarOutlined, PercentageOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { IProduct } from 'interfaces/product';
import { Product } from 'models/product';
import React from 'react';

interface CartOrder {
  listProductCart: IProduct[];
  total: string;
  onSubmit: () => void;
}

function CartOrder({ listProductCart, total, onSubmit }: any) {
  return (
    <div className="cart-order">
      <h3 className="cart-order__title">Đơn hàng của bạn</h3>
      <ul className="cart-order__list">
        <li className="cart-order__item cart-order__item-title">
          <div>Sản phẩm</div>
          <div>Tổng</div>
        </li>
        {listProductCart.map((prod: any) => {
          const productModel = new Product(prod.product);
          return (
            <li
              key={prod.product.id}
              className="cart-order__item cart-order__item-product"
            >
              <div>
                {prod.product.title} <span>x {prod.quantity}</span>
              </div>
              <div>{productModel.subTotal(prod.quantity)}</div>
            </li>
          );
        })}
        <li className="cart-order__item cart-order__item-subtitle">
          <div>Tạm tính</div>
          <div>{total}đ</div>
        </li>
      </ul>

      <div className="cart-order__payment">
        <Button
          size="large"
          type="primary"
          danger
          block
          icon={<PercentageOutlined />}
          disabled
        >
          Trả góp
        </Button>
        <Button
          type="primary"
          size="large"
          block
          icon={<DollarOutlined />}
          onClick={onSubmit}
        >
          Thanh toán
        </Button>
      </div>
    </div>
  );
}

export default CartOrder;
