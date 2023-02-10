import { Card, Badge, Rate, Button } from 'antd';
import React, { useMemo } from 'react';
import { IProduct } from '../../../interfaces/product';
import Image from 'next/image';
import { Product } from 'models/product';
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addProductToCart } from 'store/Slices/cartSlice';
import { toast } from 'react-toastify';
interface ProductProps {
  product: IProduct;
}

function ProductItem({ product }: ProductProps) {
  const modelProduct = new Product(product);
  const dispatch = useDispatch();

  const handleAddToCart = (product: IProduct, quantity: number) => {
    const data = {
      product,
      quantity,
    };
    dispatch(addProductToCart(data));
    toast.success(
      <p>
        Bạn đã thêm <b>{product.title}</b> vào giỏ hàng
      </p>
    );
  };

  return (
    <>
      <Card
        bodyStyle={{ padding: 0 }}
        style={{ height: '100%' }}
        className="product-item"
      >
        <Badge.Ribbon
          text={`Giảm ${modelProduct.productdiscountPercentageString}`}
          color="red"
        >
          <div className="product-item-image__contain">
            <Link href={`/products/${product.id}`} style={{ height: '100%' }}>
              <Image
                src={product.thumbnail}
                fill
                sizes="100%"
                className="product-item-image"
                alt={product.title}
              />
            </Link>
          </div>
        </Badge.Ribbon>
        <Link href={`/products/${product.id}`} style={{ height: '100%' }}>
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
                {product.rating}
              </div>
            </div>

            <div className="product-item-body__bottom">
              <div>
                <div className="product-item-old-price">
                  {modelProduct.handlePriceOld()}
                </div>
                <div className="product-item-new-price">
                  {modelProduct.handlePrice()}
                </div>
              </div>
              <div className="product-item-body__bottom-heart">
                <HeartOutlined className="heart-outline" />
                <HeartFilled
                  className="heart-fill"
                  onClick={e => e.preventDefault()}
                />
              </div>
            </div>
          </div>
        </Link>

        <div className="product-item__function">
          <Button type="primary" block>
            Mua ngay
          </Button>
          <Button block onClick={() => handleAddToCart(product, 1)}>
            <ShoppingCartOutlined />
          </Button>
        </div>
      </Card>
    </>
  );
}

export default ProductItem;
