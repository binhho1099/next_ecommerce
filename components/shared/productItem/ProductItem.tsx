import { Card, Badge, Rate } from 'antd';
import React, { useMemo } from 'react';
import { IProduct } from '../../../interfaces/product';
import Image from 'next/image';
import { Product } from 'models/product';
interface ProductProps {
  product: IProduct;
}

function ProductItem({ product }: ProductProps) {
  const modelProduct = new Product(product);

  return (
    <>
      <Card
        hoverable={true}
        bodyStyle={{ padding: 0 }}
        style={{ height: '100%' }}
        className="product-item"
      >
        <Badge.Ribbon
          text={`Giảm ${modelProduct.productdiscountPercentageString}`}
          color="red"
        >
          <div className="product-item-image__contain">
            <Image
              src={product.thumbnail}
              fill
              sizes="100%"
              className="product-item-image"
              alt={product.title}
            />
          </div>
        </Badge.Ribbon>
        <div className="product-item-body">
          <div className="product-item-body__top">
            <div className="product-item-brand">{product.brand}</div>
            <h2 className="product-item-title">{product.title}</h2>
            <div className="product-item-rate">
              <Rate
                disabled
                value={Math.round(product.rating * 2) / 2}
                // allowHalf
                style={{ fontSize: 14 }}
              />{' '}
            </div>
          </div>

          <div className="product-item-body__bottom">
            <div className="product-item-old-price">
              {modelProduct.handlePriceOld()}
            </div>
            <div className="product-item-new-price">
              {modelProduct.handlePrice()}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProductItem;
