import Image from 'next/image';
import React from 'react';

interface CartType2Props {
  title: string;
  oldPrice: string;
  newPrice: string;
  stock: string;
  image: string;
}

function CartType2({
  title,
  oldPrice,
  newPrice,
  stock,
  image,
}: CartType2Props) {
  return (
    <div className="cart-2__container">
      <div className="cart-2__price">
        <div className="cart-2__price--old">{oldPrice}K</div>
        <div className="cart-2__price--new">{newPrice}K</div>
      </div>
      <div className="cart-2__image">
        <Image fill src={image} alt="" style={{ objectFit: 'cover' }} />
      </div>
      <div className="cart-2__title">{title}</div>
      <div className="cart-2__buy">
        <span>ĐẶT NGAY</span>
        <span>(còn {stock} voucher)</span>
      </div>
    </div>
  );
}

export default CartType2;
