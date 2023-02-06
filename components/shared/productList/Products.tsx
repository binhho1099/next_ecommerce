import React from 'react';
import { Row, Col, Empty } from 'antd';
import { IProduct } from '../../../interfaces/product';
import ProductItem from '../productItem/ProductItem';
import Link from 'next/link';

interface ProductListProps {
  products: IProduct[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div style={{ padding: '0 8px' }}>
      <Row
        gutter={[
          { xs: 4, sm: 8, lg: 16 },
          { xs: 4, sm: 8, lg: 16 },
        ]}
        style={{
          justifyContent: products && products.length === 0 ? 'center' : '',
        }}
      >
        {products && products.length > 0 ? (
          products.map(product => {
            return (
              <Col
                xs={{ span: 12 }}
                xl={{ span: 6 }}
                md={{ span: 8 }}
                key={product.id}
              >
                <Link
                  href={`/products/${product.id}`}
                  style={{ height: '100%' }}
                >
                  <ProductItem product={product} />
                </Link>
              </Col>
            );
          })
        ) : (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ margin: '0 auto' }}
            description={<span>Không có sản phẩm</span>}
          ></Empty>
        )}
      </Row>
    </div>
  );
}

export default ProductList;
