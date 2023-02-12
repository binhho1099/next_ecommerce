import React, { useEffect, useState } from 'react';
import { Checkbox, Select, SelectProps, Slider } from 'antd';

function SideBarFilter({ onFilterCategory, toFilter, filterCategory }: any) {
  const [listCategory, setListCategory] = useState<
    SelectProps['options'] | null
  >(null);
  const [filter, setFilter] = useState<any>({ evaluate: [], price: [] });

  useEffect(() => {
    fetchListCategory();
  }, []);

  useEffect(() => {
    toFilter(filter.evaluate, filter.price);
  }, [filter.evaluate, filter.price, filterCategory, toFilter]);

  const fetchListCategory = async () => {
    const res = await fetch('https://dummyjson.com/products/categories');
    const data = await res.json();
    const options = data.map((option: string) => ({
      value: option,
      label: option,
    }));

    setListCategory(options);
  };

  const handleClearFilter = (filed: string) => {
    setFilter({ ...filter, [filed]: [] });
  };

  return (
    <div className="side-bar" style={{ position: 'sticky', top: 10 }}>
      <div className="filter-group">
        <div className="filter-title">
          <h3>Danh mục</h3>
          {/* <span className="filter-clear">Xóa tất cả</span> */}
        </div>
        <div className="filter-form">
          <Select
            style={{ width: '100%' }}
            loading={!listCategory}
            allowClear
            placeholder="Chọn danh mục"
            options={listCategory!}
            onChange={value => onFilterCategory(value)}
          />
        </div>
      </div>
      <div className="side-bar__separate"></div>
      <div className="filter-group">
        <div className="filter-title">
          <h3>Đánh giá</h3>
          <span
            className="filter-clear"
            onClick={() => handleClearFilter('evaluate')}
          >
            Xóa
          </span>
        </div>
        <div className="filter-form">
          <Checkbox.Group
            className="filter-checkbox-group"
            onChange={checkedValue =>
              setFilter((prev: any) => ({ ...prev, evaluate: checkedValue }))
            }
            value={filter.evaluate}
          >
            <Checkbox className="filter-checkbox" value={1}>
              1 sao
            </Checkbox>
            <Checkbox className="filter-checkbox" value={2}>
              2 sao
            </Checkbox>
            <Checkbox className="filter-checkbox" value={3}>
              3 sao
            </Checkbox>
            <Checkbox className="filter-checkbox" value={4}>
              4 sao
            </Checkbox>
            <Checkbox className="filter-checkbox" value={5}>
              5 sao
            </Checkbox>
          </Checkbox.Group>
        </div>
      </div>
      <div className="side-bar__separate"></div>
      <div className="filter-group">
        <div className="filter-title">
          <h3>Khoảng giá</h3>
          <span
            className="filter-clear"
            onClick={() => handleClearFilter('price')}
          >
            Xóa
          </span>
        </div>
        <div className="filter-form">
          <Checkbox.Group
            className="filter-checkbox-group"
            onChange={checkedValue =>
              setFilter((prev: any) => ({ ...prev, price: checkedValue }))
            }
            value={filter.price}
          >
            <Checkbox className="filter-checkbox" value={1}>
              {'< 1 triệu'}
            </Checkbox>
            <Checkbox className="filter-checkbox" value={2}>
              1 triệu đến 10 triệu
            </Checkbox>
            <Checkbox className="filter-checkbox" value={3}>
              10 triệu đến 50 triệu
            </Checkbox>
            <Checkbox className="filter-checkbox" value={4}>
              {'> 50 triệu'}
            </Checkbox>
          </Checkbox.Group>
        </div>
      </div>
    </div>
  );
}

export default SideBarFilter;
