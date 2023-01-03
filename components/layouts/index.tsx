import React from 'react';

import { Layout as AntdLayout, LayoutProps } from 'antd';
import { DefaultFooter } from './footer';
import { DefaultHeader } from './header';

const { Header, Footer, Sider, Content } = AntdLayout;

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <AntdLayout>
        <DefaultHeader />

        <Content className="layout">{children}</Content>

        <DefaultFooter />
      </AntdLayout>
    </React.Fragment>
  );
};

export { Layout };
