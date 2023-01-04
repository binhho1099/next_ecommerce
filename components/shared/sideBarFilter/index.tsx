import React from 'react';
import FilterGroup from './FilterGroup';
import { filter } from '../../../mocks/filter';

function SideBarFilter() {
  return (
    <div className="side-bar">
      {filter.map((fil, i) => (
        <div key={fil.title}>
          <FilterGroup filter={fil} />
          {filter.length > i + 1 && <div className="side-bar__separate"></div>}
        </div>
      ))}
    </div>
  );
}

export default SideBarFilter;
