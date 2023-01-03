import { Popover } from 'antd';
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
        const childrenLink =
          item.childrens &&
          item.childrens.map((children: any) => {
            return (
              <div key={children.id} className="menu-item__child">
                <Link href={children.path}>{children.label}</Link>
              </div>
            );
          });

        return (
          <li
            key={item.id}
            className={`menu-item ${
              router.pathname === item.path ? 'active' : ''
            }`}
          >
            {childrenLink ? (
              <Popover
                content={childrenLink}
                placement="bottomLeft"
                trigger="hover"
              >
                <Link href={item.path}>
                  {item.label} <CaretDownOutlined />
                </Link>
              </Popover>
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
