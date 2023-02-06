import React, { useEffect, useState } from 'react';

import { Layout as AntdLayout, LayoutProps } from 'antd';
import { DefaultFooter } from './footer';
import { DefaultHeader } from './header';

const { Header, Footer, Sider, Content } = AntdLayout;

const Layout = ({ children }: LayoutProps) => {
  const [dataCategories, setDataCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dataCategories);

  const fetchData = async () => {
    try {
      const urls = ['https://dummyjson.com/products/categories'];
      const [dataCategories] = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
      );
      setDataCategories(dataCategories);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <React.Fragment>
      <AntdLayout>
        <DefaultHeader dataCategories={dataCategories} />

        <Content className="app-content layout">{children}</Content>

        <DefaultFooter />
      </AntdLayout>
    </React.Fragment>
  );
};

export { Layout };
