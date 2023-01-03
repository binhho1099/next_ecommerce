import React, { useState } from 'react';
import { MENU } from '../../../mocks/menu';
import { useRouter } from 'next/router';
import Menu from '../../shared/menu/Menu';
import { Input, Avatar, Button, Select, Badge, Drawer } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  PhoneFilled,
  BarsOutlined,
} from '@ant-design/icons';

const { Search } = Input;

const DefaultHeader = () => {
  const router = useRouter();
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const onDrawer = (state: boolean) => {
    setIsOpenDrawer(state);
  };

  return (
    <div className="header">
      <div className="layout">
        <div className="header-top">
          <div className="header-logo">
            <h1>LOGO COMPANY BINH</h1>
            <div className="header-tools__mobile">
              <Badge
                count={3}
                size="small"
                style={{ backgroundColor: '#fff', color: '#000' }}
              >
                <ShoppingCartOutlined className="icon" />
              </Badge>
              <Avatar
                shape="square"
                icon={<UserOutlined />}
                style={{ background: 'red' }}
              />
              <Avatar
                shape="square"
                icon={<BarsOutlined />}
                style={{ background: 'black' }}
                onClick={() => onDrawer(true)}
              />
            </div>
          </div>

          <Search
            className="header-search"
            placeholder="Tìm kiếm trên website..."
            onSearch={(e) => console.log(e)}
            allowClear
          />
          <div className="header-tools">
            <Button type="primary" className="header-btn">
              Lịch sử mua hàng
            </Button>
            <Button type="primary" className="header-btn">
              <PhoneFilled />
              1900 0000
            </Button>
            <Badge
              count={3}
              size="small"
              style={{ backgroundColor: '#fff', color: '#000' }}
            >
              <ShoppingCartOutlined className="icon" />
            </Badge>
            <Avatar
              shape="square"
              icon={<UserOutlined />}
              style={{ background: 'red' }}
            />
            <Select
              options={[
                {
                  value: 'vi',
                  label: 'Việt Nam',
                },
                {
                  value: 'en',
                  label: 'English',
                },
              ]}
            />
          </div>
        </div>
        <div className="header-bottom">
          <Menu items={MENU} />
        </div>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="top"
        closable
        height="100%"
        onClose={() => onDrawer(false)}
        open={isOpenDrawer}
      >
        <Menu items={MENU} />
      </Drawer>
    </div>
  );
};

export { DefaultHeader };
