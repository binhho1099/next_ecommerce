import React from 'react';
import { Row, Col } from 'antd';
import { IProduct } from '../../../interfaces/product';
import ProductItem from '../productItem/ProductItem';
import Link from 'next/link';

interface ProductListProps {
  products: IProduct[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div style={{ padding: '0 15px' }}>
      <Row
        gutter={[
          { xs: 4, sm: 8, lg: 16 },
          { xs: 4, sm: 8, lg: 16 },
        ]}
      >
        {products.map((product) => {
          return (
            <Col
              xs={{ span: 12 }}
              xl={{ span: 6 }}
              md={{ span: 8 }}
              key={product.id}
            >
              <Link href={`/products/${product.id}`} style={{ height: '100%' }}>
                <ProductItem product={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ProductList;
