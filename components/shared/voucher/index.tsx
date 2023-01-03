import { Progress, Rate } from 'antd';
import Image from 'next/image';
import React from 'react';

function Voucher() {
  return (
    <div className="voucher">
      <div className="voucher-image mask-left">
        <Image
          src="/images/voucher.png"
          fill
          alt="voucher"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="voucher-content mask-right">
        <div className="voucher-title">
          <div>
            <Rate disabled value={5} style={{ fontSize: 8 }} />
            <p>| 25 cơ sở Hà Nội</p>
          </div>
          <h2>Trà sữa Gongcha hương dâu full topping size L</h2>
        </div>
        <div>
          <div className="voucher-price">500.000đ</div>
          <Progress
            className="cart-special__sold voucher-sold"
            percent={50}
            status="active"
            format={(percent) => `Đã bán ${percent}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Voucher;
