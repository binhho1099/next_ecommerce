import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Menu from '../../shared/menu/Menu';
import { Input, Avatar, Button, Select, Badge, Drawer } from 'antd';
import {
  UserOutlined,
  ShoppingCartOutlined,
  PhoneFilled,
  BarsOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useAppSelector } from 'store/hooks';

const { Search } = Input;

interface HeaderType {
  dataCategories: string[];
}

const DefaultHeader = ({ dataCategories }: HeaderType) => {
  const router = useRouter();
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart.listProducts);

  const onDrawer = (state: boolean) => {
    setIsOpenDrawer(state);
  };

  const MENU = [
    {
      id: 0,
      label: 'Sự kiện hot',
      key: '/',
      path: '/',
    },
    {
      id: 1,
      label: 'Sản phẩm',
      key: '/products',
      path: '/products',
      childrens: dataCategories.map((category, index) => {
        return {
          id: `1.${index}`,
          label: category,
          path: `/products/${category}`,
        };
      }),
    },
    {
      id: 2,
      label: 'Về chúng tôi',
      key: '/about',
      path: '/about',
    },
    {
      id: 4,
      label: 'Liên hệ',
      key: '/contact',
      path: '/contact',
    },
  ];

  return (
    <div className="header">
      <div className="header-main">
        <div className="layout">
          <div className="header-top">
            <div className="header-logo">
              <h1>THAPCAM_WEB</h1>
              <div className="header-tools__mobile">
                <Badge
                  count={cart.length}
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
              onSearch={e => console.log(e)}
              allowClear
            />
            <div className="header-tools">
              <Link href="/purchase-history">
                <Button type="primary" className="header-btn">
                  Lịch sử mua hàng
                </Button>
              </Link>
              <Button type="primary" className="header-btn">
                <PhoneFilled />
                1900 0000
              </Button>
              <Link href="/cart">
                <Badge
                  count={cart.length}
                  size="small"
                  style={{ backgroundColor: '#fff', color: '#000' }}
                >
                  <ShoppingCartOutlined className="icon" />
                </Badge>
              </Link>
              {false ? (
                <Avatar
                  shape="square"
                  icon={<UserOutlined />}
                  style={{ background: 'red' }}
                />
              ) : (
                <Link href="/login">Đăng nhập</Link>
              )}

              {/* <Select
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
            /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="header-sub">
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
