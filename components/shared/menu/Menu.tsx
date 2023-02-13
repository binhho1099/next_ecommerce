import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

interface MenuProps {
  items: any;
}

function Menu({ items }: MenuProps) {
  const router = useRouter();

  return (
    <ul className="menu">
      {items.map((item: any) => {
        return (
          <li
            key={item.id}
            className={`menu-item ${
              router.pathname === item.path ? 'active' : ''
            }`}
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
