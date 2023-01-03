import { IFilter } from '../interfaces/product';
import { StarTwoTone } from '@ant-design/icons';

export const filter: IFilter[] = [
  {
    title: 'Khoảng giá',
    group: [
      {
        id: 1,
        value: '<20',
        label: 'Dưới 20.000đ',
      },
      {
        id: 2,
        value: '40-100',
        label: 'Từ 40.000đ đến 100.000đ',
      },
      {
        id: 3,
        value: '>100',
        label: 'Trên 100.000đ',
      },
    ],
  },
  {
    title: 'Đánh giá',
    group: [5, 4, 3, 2, 1].map((number) => {
      return {
        id: number,
        label: (
          <div>
            {Array.from(Array(number).keys()).map((num) => (
              <StarTwoTone key={num} twoToneColor="#ffbe0f" />
            ))}
          </div>
        ),
        value: number.toString(),
      };
    }),
  },
  {
    title: 'Thương hiệu',
    group: [
      {
        id: 1,
        value: 'samsung',
        label: 'Samsung',
      },
      {
        id: 2,
        value: 'apple',
        label: 'Apple',
      },
      {
        id: 3,
        value: 'oppo',
        label: 'OPPO',
      },
      {
        id: 4,
        value: 'huawei',
        label: 'Huawei',
      },
      {
        id: 5,
        value: 'microsoft',
        label: 'Microsoft',
      },
    ],
  },
];
