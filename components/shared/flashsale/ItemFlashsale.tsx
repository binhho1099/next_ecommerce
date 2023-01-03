import { Progress, Rate } from 'antd';
import Image from 'next/image';
import React from 'react';

function ItemFlashsale() {
  return (
    <div className="item-flashsale">
      <div className="item-flashsale__image">
        <Image src="/images/flashsale.png" alt="flashsale" fill />
      </div>
      <div className="item-flashsale__content">
        <div className="item-flashsale__title">
          <h2>Trà sữa Gongcha hương dâu full topping size</h2>
          <div>
            <Rate disabled value={5} style={{ fontSize: 8 }} />{' '}
            <p>| 25 cơ sở tại TPHCM </p>
          </div>
        </div>
        <div className="item-flashsale__price">
          <div>500.000đ</div>
          <h3>200.000đ</h3>
        </div>

        <div className="cart-special__btn item-flashsale__btn">ĐẶT NGAY</div>

        <Progress
          className="cart-special__sold item-flashsale__sold"
          percent={50}
          status="active"
          format={(percent) => `Đã bán ${percent}`}
        />
      </div>
    </div>
  );
}

export default ItemFlashsale;
