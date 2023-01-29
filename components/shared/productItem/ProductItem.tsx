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
        hoverable
        bodyStyle={{ padding: 0 }}
        style={{ height: '100%' }}
        className="cart"
      >
        <Badge.Ribbon
          text={`Giảm ${modelProduct.productdiscountPercentageString}`}
          color="red"
        >
          <div className="cart-image__contain">
            <Image
              src={product.thumbnail}
              fill
              sizes="100%"
              className="cart-image"
              alt={product.title}
            />
          </div>
        </Badge.Ribbon>
        <div className="cart-body">
          <div className="cart-body__top">
            <div className="cart-brand">{product.brand}</div>
            <h2 className="cart-title">{product.title}</h2>
            <div className="cart-rate">
              <Rate
                disabled
                value={Math.round(product.rating * 2) / 2}
                style={{ fontSize: 14 }}
              />{' '}
            </div>
          </div>

          <div className="cart-body__bottom">
            <div className="cart-old-price">
              {modelProduct.handlePriceOld()}
            </div>
            <div className="cart-new-price">{modelProduct.handlePrice()}</div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProductItem;
