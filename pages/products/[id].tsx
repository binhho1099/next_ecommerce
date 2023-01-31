import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { PRODUCT_ENDPOINT } from '../../enums/endpoint';
import { Axios } from '../../utils/axios';
import { IProduct } from '../../interfaces/product';
import Image from 'next/image';
import { Button, Col, InputNumber, Row } from 'antd';
import { ShoppingFilled, HeartFilled } from '@ant-design/icons';
import Slider from 'react-slick';
import ProductItem from '@/components/shared/productItem/ProductItem';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addOrRemoveProductFavorite,
  addProductToCart,
} from 'store/Slices/cartSlice';
import { toast } from 'react-toastify';
import { Product } from 'models/product';

interface Props {
  product: IProduct;
}

function ProductId({ product }: Props) {
  const router = useRouter();
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();
  const listFavorite = useAppSelector(
    state => state.cart.listProductFavorite
  ) as number[];

  const productModel = new Product(product);

  const isFavorite = useMemo(() => {
    return listFavorite.some(idProduct => idProduct === product.id);
  }, [listFavorite, product.id]);

  useEffect(() => {
    fetchRelatedProducts();

    return () => {
      setQuantity(1);
    };
  }, [product]);

  const fetchRelatedProducts = async () => {
    // const allRelatedProducts = (await Axios.get(
    //   `${PRODUCT_ENDPOINT.ALL_PRODUCT_OF_A_CATEGORY}/${product.category}`
    // )) as { products: IProduct[] };
    const result = await fetch(
      `https://dummyjson.com${PRODUCT_ENDPOINT.ALL_PRODUCT_OF_A_CATEGORY}/${product.category}`
    );
    const allRelatedProducts = await result.json();

    const relatedProducts = allRelatedProducts.products.filter(
      (pro: IProduct) => pro.id !== product.id
    );
    setRelatedProducts(relatedProducts);
  };

  const settings = {
    customPaging: function (i: number) {
      return <img src={product.images[i]} />;
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const changeQuantity = (num: number) => {
    if (quantity === 1 && num === -1) {
      return;
    } else {
      setQuantity(prev => prev + num);
    }
  };

  const handleAddProductToCart = () => {
    const data = {
      product: product,
      quantity,
    };
    dispatch(addProductToCart(data));
    toast.success(
      <p>
        Thêm <b>{quantity}</b> <u>{product.title}</u> vào giỏ hàng
      </p>
    );
  };

  const handleProductFavorite = () => {
    dispatch(addOrRemoveProductFavorite(product.id));
  };

  return (
    <>
      <div className="section">
        <div className="layout">
          <div className="detail">
            <Row gutter={[20, 20]}>
              <Col span={24} xl={12}>
                <div>
                  <Slider className="detail__main-image" {...settings}>
                    {product.images.map(image => {
                      return (
                        <div key={image}>
                          <img src={image} />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </Col>
              <Col span={24} xl={12}>
                <div className="detail__content">
                  <h2 className="detail__name">{product.title}</h2>
                  <h3 className="detail__price">
                    <span>{productModel.handlePriceOld()}</span>
                    <p>{productModel.handlePrice()}</p>
                  </h3>
                  <div>
                    <h3 className="detail__info">
                      Thương hiệu: <span>{product.brand}</span>
                    </h3>
                    <h3 className="detail__info">
                      Đánh giá: <span>{product.rating}</span>
                    </h3>
                    <h3 className="detail__info">
                      Tình trạng kho: <span>{product.stock}</span>
                    </h3>
                  </div>
                  <div className="detail__quantity">
                    <Button
                      type="primary"
                      onClick={() => changeQuantity(-1)}
                      disabled={quantity === 1}
                    >
                      -
                    </Button>
                    <InputNumber
                      value={quantity}
                      controls={false}
                      min={1}
                      onChange={value => setQuantity(value!)}
                    />
                    <Button type="primary" onClick={() => changeQuantity(1)}>
                      +
                    </Button>
                  </div>
                  <div className="detail__function">
                    <Button
                      type="primary"
                      className="header-btn btn-primary"
                      onClick={handleAddProductToCart}
                    >
                      <ShoppingFilled />
                      Thêm vào giỏ hàng
                    </Button>
                    <Button
                      className={`btn__heart ${isFavorite && 'favorite'}`}
                      onClick={handleProductFavorite}
                    >
                      <HeartFilled /> Yêu thích
                    </Button>
                  </div>
                  <div className="detail__description">
                    <h2>Mô tả sản phẩm</h2>
                    <p>{product.description}</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <h3 className="detail__related-products">Sản Phẩm Liên Quan</h3>
                <div>
                  <Row gutter={[20, 20]}>
                    {relatedProducts.map(product => {
                      return (
                        <Col span={4} key={product.id}>
                          <Link href={`/products/${product.id}`}>
                            <ProductItem product={product} />
                          </Link>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  // const product = await Axios.get(
  //   `${PRODUCT_ENDPOINT.ALL_PRODUCT}/${params!.id}`
  // );
  const result = await fetch(`https://dummyjson.com/products/${params!.id}`);
  const product = await result.json();

  return {
    props: {
      product,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  // const data = (await Axios.get(PRODUCT_ENDPOINT.ALL_PRODUCT)) as {
  //   products: IProduct[];
  // };
  const result = await fetch(`https://dummyjson.com/products`);
  const data = await result.json();
  const paths = data.products.map((product: any) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default ProductId;
