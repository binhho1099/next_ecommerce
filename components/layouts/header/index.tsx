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
import { PoweroffOutlined, SearchOutlined } from '@ant-design/icons';
import {
  UserOutlined,
  ShoppingCartOutlined,
  PhoneFilled,
  BarsOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useAppSelector } from 'store/hooks';
import useDebounce from 'hooks/useDebounce';
import { Cookie } from 'utils/cookie';
import { IUser } from 'interfaces';

const DefaultHeader = () => {
  const router = useRouter();
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart.listProducts);
  const user = useAppSelector(state => state.app.user) as IUser;
  const [search, setSearch] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);

  const [result, setResult] = useState<MenuProps['items']>([]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const debounce = useDebounce(search, 300);

  const isLogin = Cookie.Get('token');

  useEffect(() => {
    if (focus) {
      fetchData();
    }
  }, [debounce, focus]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

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
      label: 'Trang chủ',
      key: '/',
      path: '/',
    },
    {
      id: 1,
      label: 'Sản phẩm',
      key: '/products',
      path: '/products',
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

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href="/profile">Thông tin cá nhân</Link>,
    },
    {
      key: '2',
      label: (
        <a
          onClick={() => {
            Cookie.Remove('token');
            router.reload();
          }}
        >
          Đăng xuất
        </a>
      ),
    },
  ];

  useEffect(() => {
    onDrawer(false);
  }, [router.pathname]);

  return (
    <div className={`header ${scrollPosition > 150 && 'fixed'}`}>
      <div className="header-main">
        <div className="layout">
          <div className="header-top">
            <div className="header-logo">
              <Link href="/">
                <h1>BinhHoEcommerce.com</h1>
              </Link>
              <div className="header-tools__mobile">
                <Badge
                  count={cart.length}
                  size="small"
                  style={{ backgroundColor: '#fff', color: '#000' }}
                >
                  <ShoppingCartOutlined
                    className="icon"
                    onClick={() => router.push('/cart')}
                  />
                </Badge>

                <Avatar
                  shape="square"
                  icon={<BarsOutlined />}
                  style={{ background: 'black', color: '#ffcb3e' }}
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
              <Button
                type="primary"
                className="header-btn"
                onClick={() => (window.location.href = `tel:1900 0000`)}
              >
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
              {isLogin ? (
                <Dropdown menu={{ items }} placement="bottomRight">
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    shape="circle"
                    src={
                      user.photoURL && user.displayName ? (
                        <img src={user.photoURL} alt={user.displayName} />
                      ) : (
                        ''
                      )
                    }
                  />
                </Dropdown>
              ) : (
                <Link href="/login">Đăng nhập</Link>
              )}
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
        title="ThapCamWeb"
        placement="top"
        closable
        height="100%"
        onClose={() => onDrawer(false)}
        open={isOpenDrawer}
        className="menu-mobile"
      >
        <Menu items={MENU} mobile />
        <hr />
        <ul className="menu mobile">
          <li className={`menu-item ${router.pathname === '' ? 'active' : ''}`}>
            <Link href="/">Lịch sử mua hàng</Link>
          </li>

          {isLogin ? (
            <>
              <li
                className={`menu-item ${
                  router.pathname === '' ? 'active' : ''
                }`}
              >
                <Link href="/profile">Thông tin cá nhân</Link>
              </li>
              <li
                className={`menu-item ${
                  router.pathname === '' ? 'active' : ''
                }`}
              >
                <Link
                  href=""
                  style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
                  onClick={() => {
                    Cookie.Remove('token');
                    router.reload();
                  }}
                >
                  <PoweroffOutlined />
                  Đăng xuất
                </Link>
              </li>
            </>
          ) : (
            <li
              className={`menu-item ${router.pathname === '' ? 'active' : ''}`}
            >
              <Link
                href="/login"
                style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
              >
                Đăng nhập
              </Link>
            </li>
          )}
        </ul>
      </Drawer>
    </div>
  );
};

export { DefaultHeader };
