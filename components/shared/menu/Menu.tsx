import { Dropdown, Popover } from 'antd';
import Link from 'next/link';
import React from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

interface MenuProps {
  items: any;
}

function Menu({ items }: MenuProps) {
  const router = useRouter();

  return (
    <ul className="menu">
      {items.map((item: any) => {
        const childrenLink: MenuProps['items'] =
          item.childrens &&
          item.childrens.map((children: any) => {
            return {
              key: children.id,
              label: (
                <div key={children.id} className="menu-item__child">
                  <Link href={children.path}>{children.label}</Link>
                </div>
              ),
            };
          });

        return (
          <li
            key={item.id}
            className={`menu-item ${
              router.pathname === item.path ? 'active' : ''
            }`}
          >
            {childrenLink ? (
              <Dropdown
                menu={{ items: childrenLink }}
                placement="bottom"
                overlayClassName="menu-item__dropdown"
              >
                <Link href={item.path}>
                  {item.label} <CaretDownOutlined />
                </Link>
              </Dropdown>
            ) : (
              <Link href={item.path}>{item.label}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
