import React, { useEffect, useState } from 'react';
import { Col, Input, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useDebounce from 'hooks/useDebounce';

function HeaderProduct({ handleSearch }: any) {
  const [search, setSearch] = useState<string>('');

  const debouncedValue = useDebounce<string>(search, 500);

  useEffect(() => {
    handleSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="header-product">
      <Row>
        <Col span={12} className="header-product__search">
          <span>Tìm kiếm: </span>
          <Input
            onChange={e => setSearch(e.target.value)}
            value={search}
            suffix={<SearchOutlined />}
          />
        </Col>
      </Row>
    </div>
  );
}

export default HeaderProduct;
