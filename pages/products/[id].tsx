import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { PRODUCT_ENDPOINT } from '../../enums/endpoint';
import { Axios } from '../../utils/axios';
import { IProduct } from '../../interfaces/product';
import Image from 'next/image';
import { Button, Col, InputNumber, Row } from 'antd';
import MainCarousel from '@/components/shared/carousel/Carousel';
import { ShoppingFilled, HeartFilled } from '@ant-design/icons';

interface Props {
  product: IProduct;
}

function ProductId({ product }: Props) {
  const router = useRouter();
  return (
    <>
      <section className="section">
        <MainCarousel />
      </section>
      <div className="section">
        <div className="detail">
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <div className="detail__image">
                <Image src={product.thumbnail} fill alt="image" />
              </div>
            </Col>
            <Col span={12}>
              <div className="detail__content">
                <h2 className="detail__name">{product.title}</h2>
                <h3 className="detail__price">
                  <span>{product.price}</span>
                  <p>{product.price}</p>
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
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    controls={false}
                  />
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
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
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
  // const data = (await Axios.get(PRODUCT_ENDPOINT.ALL_PRODUCT)) as {
  //   products: IProduct[];
  // };
  // const paths = data.products.map((product) => {
  //   return {
  //     params: { id: product.id.toString() },
  //   };
  // });

  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  };
};

export default ProductId;
