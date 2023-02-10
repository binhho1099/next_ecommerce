import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Menu from '../../shared/menu/Menu';
import {
  Input,
  Avatar,
  Button,
  Select,
  Badge,
  Drawer,
  Dropdown,
  MenuProps,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
  UserOutlined,
  ShoppingCartOutlined,
  PhoneFilled,
  BarsOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useAppSelector } from 'store/hooks';
import useDebounce from 'hooks/useDebounce';

const { Search } = Input;

interface HeaderType {
  dataCategories: string[];
}

const DefaultHeader = ({ dataCategories }: HeaderType) => {
  const router = useRouter();
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart.listProducts);
  const [search, setSearch] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);

  const [result, setResult] = useState<MenuProps['items']>([]);

  const debounce = useDebounce(search, 300);

  useEffect(() => {
    if (focus) {
      fetchData();
    }
    console.log(focus);
  }, [debounce, focus]);

  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${debounce}`
    );
    const data = await res.json();
    const result = data.products.map((product: any) => {
      return {
        key: product.id,
        label: (
          <Link href={`/products/${product.id}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img
                src={product.thumbnail}
                alt={product.title}
                width={30}
                height={30}
              />
              {product.title}
            </div>
          </Link>
        ),
      };
    });
    setResult(result);
  };

  const onDrawer = (state: boolean) => {
    setIsOpenDrawer(state);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setFocus(false);
    }, 300);
  };

  const handleFocus = () => {
    setFocus(true);
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
              <Link href="/">
                <h1>BinhHo Ecommerce</h1>
              </Link>
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

            <Dropdown
              menu={{ items: result }}
              placement="bottom"
              arrow
              open={!!result?.length && focus}
              overlayClassName="header-search__dropdown"
            >
              <Input
                className="header-search"
                placeholder="Tìm kiếm trên website..."
                onChange={e => setSearch(e.target.value)}
                allowClear
                onBlur={handleBlur}
                onFocus={handleFocus}
                suffix={<SearchOutlined />}
              />
            </Dropdown>

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
