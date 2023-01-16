import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { PRODUCT_ENDPOINT } from '../../enums/endpoint';
import { Axios } from '../../utils/axios';
import { IProduct } from '../../interfaces/product';
import Image from 'next/image';
import { Button, Col, InputNumber, Row } from 'antd';
import MainCarousel from '@/components/shared/carousel/Carousel';
import { ShoppingFilled, HeartFilled } from '@ant-design/icons';
import Slider from 'react-slick';
import ProductItem from '@/components/shared/productItem/ProductItem';
import Link from 'next/link';

interface Props {
  product: IProduct;
}

function ProductId({ product }: Props) {
  const router = useRouter();
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);

  console.log('relatedProducts', relatedProducts);

  useEffect(() => {
    fetchRelatedProducts();
  }, []);

  const fetchRelatedProducts = async () => {
    const allRelatedProducts = (await Axios.get(
      `${PRODUCT_ENDPOINT.ALL_PRODUCT_OF_A_CATEGORY}/${product.category}`
    )) as { products: IProduct[] };
    const relatedProducts = allRelatedProducts.products.filter(
      pro => pro.id !== product.id
    );
    setRelatedProducts(relatedProducts);
  };

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

  const settings1 = {
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="section">
        <div className="detail">
          <Row gutter={[20, 20]}>
            <Col span={24} xl={12}>
              <div>
                <Slider className="detail__main-image" {...settings}>
                  {product.images.map(image => {
                    return (
                      <div>
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
                  <span>{priceVNDold}</span>
                  <p>{priceVND}</p>
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
                  <Button type="primary">-</Button>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    controls={false}
                  />
                  <Button type="primary">+</Button>
                </div>
                <div className="detail__function">
                  <Button type="primary" className="header-btn btn-primary ">
                    <ShoppingFilled />
                    Thêm Vào giỏ hàng
                  </Button>
                  <Button type="primary" className="btn__heart ">
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
                {relatedProducts.length > 5 ? (
                  <Slider className="slide-related-products" {...settings1}>
                    {relatedProducts.map(product => {
                      return (
                        <div>
                          <Link href={`/products/${product.id}`}>
                            <ProductItem product={product} />
                          </Link>
                        </div>
                      );
                    })}
                  </Slider>
                ) : (
                  <Row gutter={[20, 20]}>
                    {relatedProducts.map(product => {
                      return (
                        <Col span={4}>
                          <Link href={`/products/${product.id}`}>
                            <ProductItem product={product} />
                          </Link>
                        </Col>
                      );
                    })}
                  </Row>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const product = await Axios.get(
    `${PRODUCT_ENDPOINT.ALL_PRODUCT}/${params!.id}`
  );

  return {
    props: {
      product,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = (await Axios.get(PRODUCT_ENDPOINT.ALL_PRODUCT)) as {
    products: IProduct[];
  };
  const paths = data.products.map(product => {
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
