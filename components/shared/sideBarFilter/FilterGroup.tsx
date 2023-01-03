import { Checkbox } from 'antd';
import React from 'react';
import { IFilter, IFilterItem } from '../../../interfaces/product';

interface Props {
  filter: IFilter;
}

function FilterGroup({ filter }: Props) {
  return (
    <div className="filter-group">
      <div className="filter-title">
        <h3>{filter.title}</h3>
        <span className="filter-clear">Xóa tất cả</span>
      </div>
      <div className="filter-form">
        <Checkbox.Group className="filter-checkbox-group">
          {filter.group.map((fil: IFilterItem) => (
            <Checkbox
              key={fil.id}
              className="filter-checkbox"
              value={fil.value}
            >
              {fil.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
    </div>
  );
}

export default FilterGroup;
