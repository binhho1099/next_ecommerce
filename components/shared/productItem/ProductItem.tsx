import { Card, Badge, Rate } from 'antd';
import React, { useMemo } from 'react';
import { IProduct } from '../../../interfaces/product';
import Image from 'next/image';
interface ProductProps {
  product: IProduct;
}

function ProductItem({ product }: ProductProps) {
  const priceVNDold = useMemo(() => {
    const price =
      Math.round(product.price * ((100 + product.discountPercentage) / 100)) *
      23000;
    const priceFormat = price.toLocaleString('vi', {
      style: 'currency',
      currency: 'VND',
    });
    return priceFormat;
  }, [product.discountPercentage, product.price]);

  const priceVND = useMemo(() => {
    const price = product.price * 23000;
    const priceFormat = price.toLocaleString('vi', {
      style: 'currency',
      currency: 'VND',
    });
    return priceFormat;
  }, [product.price]);

  return (
    <>
      <Card hoverable bodyStyle={{ padding: 0 }} style={{ height: '100%' }}>
        <Badge.Ribbon
          text={`Giảm ${Math.round(product.discountPercentage)}%`}
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
              | {product.rating}
            </div>
          </div>

          <div className="cart-body__bottom">
            <div className="cart-old-price">{priceVNDold}</div>
            <div className="cart-new-price">{priceVND}</div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProductItem;
