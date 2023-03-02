import ProfileUser from '@/components/shared/profileUser';
import RecentProduct from '@/components/shared/recentProducts';
import withProtectedRoute from 'HOCs/protectRouter';
import { Col, Row } from 'antd';
import React from 'react';

function Profile() {
  return (
    <div className="layout section">
      <Row gutter={[24, 24]}>
        <Col md={8} sm={24} xs={24}>
          <ProfileUser />
        </Col>
        <Col md={16} xs={24} sm={24}>
          <RecentProduct />
        </Col>
      </Row>
    </div>
  );
}

export default withProtectedRoute(Profile);
