import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, FloatButton, Tooltip } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from 'store/hooks';

function FloatButtonApp() {
  const router = useRouter();
  const listProductCart = useAppSelector((state) => state.cart.listProducts);
  return (
    <FloatButton.Group shape="circle" style={{ right: 30, bottom: 30 }}>
      <Tooltip title="Lên đầu trang" placement="left">
        <FloatButton.BackTop visibilityHeight={200} type="primary" />
      </Tooltip>
      <Tooltip title="Giỏ hàng" placement="left">
        <Badge count={listProductCart.length} offset={[-3, 3]}>
          <FloatButton
            icon={<ShoppingCartOutlined />}
            onClick={() => router.push('/cart')}
            type="primary"
          />
        </Badge>
      </Tooltip>
    </FloatButton.Group>
  );
}

export default FloatButtonApp;
