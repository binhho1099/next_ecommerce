import ProductItem from '@/components/shared/productItem/ProductItem';
import { Col, Empty, Row } from 'antd';
import { IProduct } from 'interfaces/product';
import React from 'react';
import { useAppSelector } from 'store/hooks';

function FavoriteProduct() {
  const listProductFavorite = useAppSelector(
    state => state.cart.listProductFavorite
  );
  return (
    <div className="layout favorite page-container section">
      <h1 className="favorite-title page-heading">Sản phẩm yêu thích</h1>
      <div className="favorite-list">
        <Row
          gutter={[
            { xs: 4, sm: 8, lg: 16 },
            { xs: 4, sm: 8, lg: 16 },
          ]}
        >
          {listProductFavorite.length > 0 ? (
            listProductFavorite.map((product: IProduct) => {
              return (
                <Col
                  xs={{ span: 12 }}
                  xl={{ span: 6 }}
                  md={{ span: 8 }}
                  key={product.id}
                >
                  <ProductItem product={product} favorite />
                </Col>
              );
            })
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ margin: '0 auto' }}
              description="Sản phẩm yêu thích trống"
              style={{ margin: 'auto' }}
            ></Empty>
          )}
          <Col></Col>
        </Row>
      </div>
    </div>
  );
}

export default FavoriteProduct;
