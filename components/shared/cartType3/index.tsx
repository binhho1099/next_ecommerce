import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

function CartType3() {
  return (
    <div className="cart-3__container">
      <div className="cart-3__image">
        <Image
          fill
          src="/images/banner-1.png"
          alt="binh"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="cart-3__content">
        <h2>Phòng view hướng biển cho gia đình</h2>
        <div className="cart-3__content-price">
          <h3>150k</h3>
          <h4>75k</h4>
        </div>

        <div className="cart-3__buy">Đặt ngay</div>

        <p>
          <span>112</span> người đã mua
        </p>
      </div>
    </div>
  );
}

export default CartType3;
