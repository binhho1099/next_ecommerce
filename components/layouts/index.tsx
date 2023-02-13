import React, { useEffect, useState } from 'react';

import { Layout as AntdLayout, LayoutProps } from 'antd';
import { DefaultFooter } from './footer';
import { DefaultHeader } from './header';

const { Content } = AntdLayout;

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <AntdLayout>
        <DefaultHeader />

        <Content className="app-content layout">{children}</Content>

        <DefaultFooter />
      </AntdLayout>
    </React.Fragment>
  );
};

export { Layout };
