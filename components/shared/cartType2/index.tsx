import Image from 'next/image';
import React from 'react';

function CartType2() {
  return (
    <div className="cart-2__container">
      <div className="cart-2__price">
        <div className="cart-2__price--old">150K</div>
        <div className="cart-2__price--new">49K</div>
      </div>
      <div className="cart-2__image">
        <Image
          fill
          src="/images/cart-2.png"
          alt=""
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="cart-2__title">E-VOUCHER TẶNG PHẦN BEEFSTEAK CỠ VỪA</div>
      <div className="cart-2__buy">
        <span>ĐẶT NGAY</span>
        <span>(còn 1 voucher)</span>
      </div>
    </div>
  );
}

export default CartType2;
