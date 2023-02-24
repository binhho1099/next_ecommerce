import ProfileUser from '@/components/shared/profileUser';
import withProtectedRoute from 'HOCs/protectRouter';
import { Col, Row } from 'antd';
import React from 'react';

function Profile() {
  return (
    <div className="layout section">
      <Row gutter={24}>
        <Col span={8}>
          <ProfileUser />
        </Col>
        <Col span={16}>
          <div style={{ width: '100%', background: '#fff', height: '100%' }}>
            phần này chịu
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default withProtectedRoute(Profile);
