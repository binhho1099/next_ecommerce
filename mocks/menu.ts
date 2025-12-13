export const MENU = [
  {
    id: 0,
    label: 'Bình Hồ',
    key: '/',
    path: '/',
  },
  {
    id: 1,
    label: 'Sản phẩm',
    key: '/products',
    path: '/products',
    childrens: [
      {
        id: 1.1,
        label: 'Danh mục 1',
        path: '/products/category1',
      },
      {
        id: 1.2,
        label: 'Danh mục 2',
        path: '/products/category2',
      },
    ],
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
