import { GetStaticProps } from 'next';
import TitleSection from '@/components/shared/titleSection/TitleSection';
import { Col, Row, Tabs, Pagination, Spin } from 'antd';
import SideBarFilter from '@/components/shared/sideBarFilter';
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
  const [listProd, setListProd] = useState<IProduct[] | null>(null);
  const [listProdFilter, setListProdFilter] = useState<IProduct[] | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    limit: 20,
    skip: 1,
    total: 0,
  });
  const [filterCategory, setFilterCategory] = useState<string | undefined>();

  useEffect(() => {
    fetchData(pagination);
  }, [pagination.limit, pagination.skip, filterCategory]);

  const fetchData = async (pagination: Pagination, search?: string) => {
    try {
      if (filterCategory) {
        const res = await fetch(
          `https://dummyjson.com/products/category/${filterCategory}`
        );
        const data = await res.json();
        setListProd(data.products);
        setPagination({ ...pagination, total: data.total });
      } else {
        const skip = (pagination.skip - 1) * pagination.limit;
        const result = await fetch(
          `https://dummyjson.com/products${
            search ? `/search?q=${search}&` : '?'
          }limit=${pagination.limit}&skip=${skip}`
        );
        const data = await result.json();
        setListProd(data.products);
        setPagination({ ...pagination, total: data.total });
      }
    } catch (err) {
      setListProd([]);
    }
  };

  const onChangePagination = (page: number, pageSize: number) => {
    const newPagination = {
      limit: pageSize,
      skip: page,
    };
    setPagination({ ...pagination, ...newPagination });
    setListProd(null);
  };

  const handleSearch = (search: string) => {
    fetchData(pagination, search);
  };

  const handleFilterCategory = (value: any) => {
    setFilterCategory(value);
    setListProd(null);
  };

  const handleFilter = (evaluate: any, price: any) => {
    if (evaluate.length === 0 && price.length === 0) {
      setListProdFilter(null);
    }
    const newList = listProd && [...listProd];

    const data = newList
      ?.filter(product =>
        evaluate.length > 0
          ? Math.floor(product.rating) === evaluate[0] ||
            evaluate[1] ||
            evaluate[2] ||
            evaluate[3] ||
            evaluate[4]
          : true
      )
      .filter(product => {
        if (price.length !== 0) {
          if (price.find((p: any) => p === 1)) {
            const test = product.price < 1000000 / 23000;
            if (test) return true;
          }
          if (price.find((p: any) => p === 2)) {
            const test =
              product.price >= 1000000 / 23000 &&
              product.price < 10000000 / 23000;
            if (test) return true;
          }
          if (price.find((p: any) => p === 3)) {
            const test =
              product.price >= 10000000 / 23000 &&
              product.price < 50000000 / 23000;
            if (test) return true;
          }
          if (price.find((p: any) => p === 4)) {
            const test = product.price > 50000000 / 23000;
            if (test) return true;
          }
          return false;
        }
        return true;
      });
    setListProdFilter(data!);
  };

  return (
    <>
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
        <div></div>
        <Row gutter={4}>
          <Col xl={{ span: 5 }} sm={{ span: 0 }} xs={{ span: 0 }}>
            <SideBarFilter
              onFilterCategory={handleFilterCategory}
              toFilter={handleFilter}
              filterCategory={filterCategory}
            />
          </Col>
          <Col xl={{ span: 19 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div className="products-list">
              {!filterCategory && !listProdFilter && (
                <HeaderProduct handleSearch={handleSearch} />
              )}
              <div className="products-list__container">
                <div className="products-list__loading">
                  <Spin tip="Đang tải sản phẩm" spinning={!listProd}></Spin>
                </div>
                {listProd && (
                  <ProductList products={listProdFilter! || listProd!} />
                )}
              </div>
              {listProd && !listProdFilter && (
                <div style={{ margin: '15px 0', textAlign: 'center' }}>
                  <Pagination
                    showSizeChanger
                    pageSizeOptions={[20, 30, 50, 100]}
                    pageSize={pagination.limit}
                    onChange={onChangePagination}
                    current={pagination.skip}
                    total={pagination.total}
                  />
                </div>
              )}
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
