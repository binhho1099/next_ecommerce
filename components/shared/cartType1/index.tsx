import { Progress } from 'antd';
import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  price: number;
  oldPrice: number;
  sold: number;
  total: number;
  image?: string;
  borderColor?: string;
  shadowColor?: string;
  type?: 'cart-special--0' | 'cart-special--1' | 'cart-special--2';
}

function CartSpecial({
  title,
  price,
  oldPrice,
  sold,
  total,
  image,
  borderColor,
  shadowColor,
  type = 'cart-special--0',
}: Props) {
  return (
    <div className={`${type} cart-wrap`}>
      <div className="cart-special__title">
        <div>{title}</div>
      </div>
      <div className="cart-special__contain">
        <div className="cart-special__image">
          <Image
            src="/images/banner.png"
            alt="image"
            fill
            style={{ objectFit: 'cover', borderRadius: 8 }}
          />
        </div>
        <div className="cart-special__content">
          <div className="cart-special__bagde">
            <div>Độc</div>
            <div>quyền</div>
          </div>
          <div className="cart-special__price">
            <div className="cart-special__old-price">
              <div>{oldPrice > 0 ? `${price}k` : 'FREE'}</div>
              <span>chỉ còn</span>
            </div>
            <div className="cart-special__new-price">
              {price > 0 ? `${price}k` : 'FREE'}
            </div>
          </div>
          <button className="cart-special__btn">Đặt ngay</button>
          <Progress
            className="cart-special__sold"
            percent={sold}
            status="active"
            format={(percent) => `Đã bán ${percent}`}
          />
        </div>
      </div>
    </div>
  );
}

export default CartSpecial;
