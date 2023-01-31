import { GetStaticProps } from 'next';
import { Axios } from '../../utils/axios';
import { PRODUCT_ENDPOINT } from '../../enums/endpoint';
import TitleSection from '@/components/shared/titleSection/TitleSection';
import { Col, Row, Tabs, Pagination } from 'antd';
import SideBarFilter from '@/components/shared/sideBarFilter';
import MainCarousel from '@/components/shared/carousel/Carousel';
import Voucher from '@/components/shared/voucher';
import Flashsale from '@/components/shared/flashsale';
import ProductList from '@/components/shared/productList/Products';

import axios from 'axios';

function Products({ data }: any) {
  console.log('data', data);

  return (
    <>
      <section className="section">
        <MainCarousel />
      </section>
      <section className="section">
        <Flashsale />
      </section>

      <section className="section">
        <div style={{ padding: 20, backgroundColor: '#fff', borderRadius: 8 }}>
          <TitleSection title="FREESHIP KHÔNG GIỚI HẠN" color="#F35801" />
          <Row gutter={[20, 20]}>
            <Col
              xl={{ span: 8 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Voucher />
            </Col>
            <Col
              xl={{ span: 8 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Voucher />
            </Col>
            <Col
              xl={{ span: 8 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              <Voucher />
            </Col>
          </Row>
        </div>
      </section>

      <section className="section">
        <Row gutter={4}>
          <Col xl={{ span: 5 }} sm={{ span: 0 }} xs={{ span: 0 }}>
            <SideBarFilter />
          </Col>
          <Col xl={{ span: 19 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <Tabs
              defaultActiveKey="1"
              // onChange={onChange}
              className="products-tabs"
              items={[
                {
                  label: 'Tất cả',
                  key: '1',
                  children: <ProductList products={data.products} />,
                },
                {
                  label: 'Bán chạy nhất',
                  key: '2',
                  children: <ProductList products={data.products} />,
                },
                {
                  label: 'Giá thấp nhất',
                  key: '3',
                  children: <ProductList products={data.products} />,
                },
                {
                  label: 'Giảm giá',
                  key: '4',
                  children: <ProductList products={data.products} />,
                },
              ]}
            />
            <div style={{ margin: '15px 0', textAlign: 'right' }}>
              <Pagination
                showSizeChanger
                // onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={500}
              />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const result = await fetch('https://dummyjson.com/products');
    const data = await result.json();
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {},
      },
    };
  }
};
