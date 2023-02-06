import { GetStaticProps } from 'next';
import { Axios } from '../../utils/axios';
import { PRODUCT_ENDPOINT } from '../../enums/endpoint';
import TitleSection from '@/components/shared/titleSection/TitleSection';
import { Col, Row, Tabs, Pagination, Skeleton, Spin } from 'antd';
import SideBarFilter from '@/components/shared/sideBarFilter';
import MainCarousel from '@/components/shared/carousel/Carousel';
import Voucher from '@/components/shared/voucher';
import Flashsale from '@/components/shared/flashsale';
import ProductList from '@/components/shared/productList/Products';
import { useEffect, useState } from 'react';
import { IProduct } from 'interfaces/product';

function Products({ data }: any) {
  const [listProd, setListProd] = useState<IProduct[]>([]);
  const [tab, setTab] = useState<string>('all');

  useEffect(() => {
    switch (tab) {
      case 'all':
        setListProd(data);
        break;
      case 'best-seller':
        break;
      default:
        setListProd(data);
    }
  }, [tab]);

  const onChangeTab = (value: string) => {
    setTab(value);
  };

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
              onChange={onChangeTab}
              className="products-tabs"
              activeKey={tab}
              items={[
                {
                  label: 'Tất cả',
                  key: 'all',
                },
                {
                  label: 'Bán chạy nhất',
                  key: 'best-seller',
                },
                {
                  label: 'Giá thấp nhất',
                  key: 'low-price',
                },
                {
                  label: 'Giảm giá',
                  key: 'discount',
                },
              ]}
            />
            <div className="products-list">
              <Spin tip="Loading..." size="small" spinning={!listProd.length}>
                <ProductList products={listProd} />
              </Spin>
            </div>
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
        data: data?.products,
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
