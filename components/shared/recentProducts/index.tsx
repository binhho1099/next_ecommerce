import { Col, Empty, Row } from 'antd';
import React from 'react';
import ProductItem from '../productItem/ProductItem';
import { IProduct } from 'interfaces/product';
import { useAppSelector } from 'store/hooks';

function RecentProduct() {
  const recentProducts = useAppSelector(state => state.cart.recentProducts);
  return (
    <div className="recent-products">
      <h2 className="recent-products__title page-heading">
        Sản phẩm đã xem gần đây
      </h2>
      <Row
        gutter={[
          { xs: 4, sm: 8, lg: 16 },
          { xs: 4, sm: 8, lg: 16 },
        ]}
      >
        {recentProducts.length > 0 ? (
          recentProducts.map((product: IProduct) => {
            return (
              <Col
                xs={{ span: 12 }}
                xl={{ span: 6 }}
                md={{ span: 8 }}
                key={product.id}
              >
                <ProductItem product={product} />
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
  );
}

export default RecentProduct;
