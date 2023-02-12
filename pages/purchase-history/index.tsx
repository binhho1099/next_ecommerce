import { Button, Col, Empty, Row } from 'antd';
import { Paid } from 'interfaces/cart';
import { Product } from 'models/product';
import Image from 'next/image';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';

function PurchaseHistory() {
  const router = useRouter();
  const listPaid = useAppSelector(state => state.payment.listPaid);
  const dispatch = useAppDispatch();

  return (
    <div className="layout history">
      <h1 className="page-heading">Lịch sử mua hàng</h1>
      <Row gutter={20}>
        <Col span={8}>
          <div className="history-overview">
            <h3 className="history-overview__title">Tổng quan tài khoản</h3>
            <div className="history-overview__list">
              <p>Lần mua hàng: {listPaid.length} lần</p>
              <p>Tổng tiền chi trả: {listPaid.length}</p>
              <p>Chưa biết thêm thông tin gì</p>
            </div>
          </div>
        </Col>
        <Col span={16}>
          {listPaid ? (
            listPaid.map((paid: Paid) => {
              const { id, info, cart, paidAt } = paid;

              const sum = cart.reduce((result: any, current: any): any => {
                return (
                  result +
                  current.quantity * current.product.price * 23000 +
                  15000
                );
              }, 0);
              const total = sum.toLocaleString('vi');

              return (
                <div className="history-wrap" key={id}>
                  <div className="history-time">
                    Ngày mua:{' '}
                    {dayjs.unix(paidAt / 1000).format('HH:mm DD/MM/YYYY')}
                  </div>
                  <div className="history-list">
                    {cart.map(productItem => {
                      const { product, quantity } = productItem;
                      const modelProduct = new Product(product);
                      return (
                        <div className="history-item" key={product.id}>
                          <Row gutter={10}>
                            <Col span={3}>
                              <div
                                style={{
                                  position: 'relative',
                                  width: '100%',
                                  aspectRatio: '1/1',
                                  borderRadius: 4,
                                  overflow: 'hidden',
                                  border: '1px solid #f1f1f1',
                                }}
                              >
                                <Image
                                  src={product.thumbnail}
                                  alt={product.title}
                                  fill
                                />
                              </div>
                            </Col>
                            <Col span={21}>
                              <div className="history-item__wrapper">
                                <h3 className="history-item__title">
                                  {product.title}
                                </h3>
                                <div className="history-item__info">
                                  <div className="history-item__info--left">
                                    <p>
                                      Thương hiệu: <span>{product.brand}</span>
                                    </p>
                                    <p>
                                      Số lượng: <span>x{quantity}</span>
                                    </p>
                                  </div>
                                  <div className="history-item__info--right">
                                    <p>{modelProduct.handlePriceOld()}đ</p>
                                    <p>{modelProduct.handlePrice()}đ</p>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      );
                    })}
                  </div>
                  <div className="history-summary">
                    <p>({cart.length} sản phẩm)</p>
                    <p>
                      Tổng Cộng: <span>{total}đ</span>
                    </p>
                  </div>
                  <div className="history-functions">
                    <Button type="primary" disabled>
                      Mua lần nữa
                    </Button>
                    <Button disabled>Xem chi tiết</Button>
                  </div>
                </div>
              );
            })
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ margin: '0 auto' }}
              description={<span>Bạn chưa mua sản phẩm</span>}
              style={{ margin: 'auto' }}
            >
              <Button type="primary" onClick={() => router.push('/products')}>
                Đến trang mua hàng
              </Button>
            </Empty>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default PurchaseHistory;
