import React, { useEffect, useState } from 'react';

import { Layout as AntdLayout, LayoutProps, Spin } from 'antd';
import { DefaultFooter } from './footer';
import { DefaultHeader } from './header';
import { useAppSelector } from 'store/hooks';

const { Content } = AntdLayout;

const Layout = ({ children }: LayoutProps) => {
  const { loading } = useAppSelector(state => state.app);
  return (
    <React.Fragment>
      <Spin tip="Loading..." spinning={loading}>
        <AntdLayout>
          <DefaultHeader />

          <Content className="app-content">{children}</Content>

          <DefaultFooter />
        </AntdLayout>
      </Spin>
    </React.Fragment>
  );
};

export { Layout };
