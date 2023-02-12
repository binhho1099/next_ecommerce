import { HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, FloatButton, Tooltip } from 'antd';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useAppSelector } from 'store/hooks';

function FloatButtonApp() {
  const router = useRouter();
  const { listProducts, listProductFavorite } = useAppSelector(
    state => state.cart
  );

  const isCart = useMemo(() => {
    const index = router.pathname.search('/cart');
    return index === -1;
  }, [router.pathname]);

  const isFavorite = useMemo(() => {
    const index = router.pathname.search('/favorite');
    return index === -1;
  }, [router.pathname]);

  return (
    <FloatButton.Group shape="circle" style={{ right: 30, bottom: 30 }}>
      <Tooltip title="Lên đầu trang" placement="left">
        <FloatButton.BackTop visibilityHeight={200} type="primary" />
      </Tooltip>
      {isCart && (
        <Tooltip title="Giỏ hàng" placement="left">
          <Badge count={listProducts.length} offset={[-3, 3]}>
            <FloatButton
              icon={<ShoppingCartOutlined />}
              onClick={() => router.push('/cart')}
              type="primary"
            />
          </Badge>
        </Tooltip>
      )}
      {isFavorite && (
        <Tooltip title="Sản phẩm yêu thích" placement="left">
          <Badge count={listProductFavorite.length} offset={[-3, 3]}>
            <FloatButton
              icon={<HeartFilled />}
              onClick={() => router.push('/favorite-products')}
              type="primary"
            />
          </Badge>
        </Tooltip>
      )}
    </FloatButton.Group>
  );
}

export default FloatButtonApp;
