import { GetStaticProps } from 'next';
import TitleSection from '@/components/shared/titleSection/TitleSection';
import { Col, Row, Tabs, Pagination, Spin } from 'antd';
import SideBarFilter from '@/components/shared/sideBarFilter';
import MainCarousel from '@/components/shared/carousel/Carousel';
import Voucher from '@/components/shared/voucher';
import Flashsale from '@/components/shared/flashsale';
import ProductList from '@/components/shared/productList/Products';
import { useEffect, useState } from 'react';
import { IProduct } from 'interfaces/product';
import HeaderProduct from '@/components/shared/headerProduct';

interface Pagination {
  limit: number;
  skip: number;
  total: number;
}

function Products({ data }: any) {
  const [listProd, setListProd] = useState<IProduct[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    limit: 20,
    skip: 1,
    total: 0,
  });

  useEffect(() => {
    fetchData(pagination);
  }, [pagination.limit, pagination.skip]);

  const fetchData = async (pagination: Pagination, search?: string) => {
    const skip = (pagination.skip - 1) * pagination.limit;
    const result = await fetch(
      `https://dummyjson.com/products${
        search ? `/search?q=${search}&` : '?'
      }limit=${pagination.limit}&skip=${skip}`
    );
    const data = await result.json();
    setListProd(data.products);
    setPagination({ ...pagination, total: data.total });
  };

  const onChangePagination = (page: number, pageSize: number) => {
    const newPagination = {
      limit: pageSize,
      skip: page,
    };
    setPagination({ ...pagination, ...newPagination });
  };

  const handleSearch = (search: string) => {
    fetchData(pagination, search);
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
            <HeaderProduct handleSearch={handleSearch} />
            <div className="products-list">
              <Spin tip="Đang tải sản phẩm" spinning={!listProd}>
                <ProductList products={listProd} />
              </Spin>
            </div>
            <div style={{ margin: '15px 0', textAlign: 'right' }}>
              <Pagination
                showSizeChanger
                pageSizeOptions={[20, 30, 50, 100]}
                pageSize={pagination.limit}
                onChange={onChangePagination}
                current={pagination.skip}
                total={100}
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
    const result = await fetch('https://dummyjson.com/products?limit=100');
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
