import { Button, Col, Empty, Row } from 'antd';
import { Paid } from 'interfaces/cart';
import { Product } from 'models/product';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { addCartPayment } from 'store/Slices/paymentSlice';
import withProtectedRoute from 'HOCs/protectRouter';

function PurchaseHistory() {
  const router = useRouter();
  const listPaid = useAppSelector(state => state.payment.listPaid);
  const dispatch = useAppDispatch();

  const TongCong = useMemo(() => {
    const total = listPaid.reduce(
      (item: any, current: any) => current.total + item,
      0
    );
    return total;
  }, [listPaid]);

  const TongSanPham = useMemo(() => {
    const total = listPaid.reduce((item: number, current: any) => {
      const sum = current.cart.reduce((cart: number, cur: any) => {
        return cart + cur.quantity;
      }, 0);
      return item + sum;
    }, 0);
    return total;
  }, [listPaid]);

  const rePurchase = (cart: any) => {
    dispatch(addCartPayment(cart));
    router.push('/payment');
  };

  if (listPaid.length === 0) {
    return (
      <div>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Lịch sử mua hàng trống"
        >
          <Button type="primary" onClick={() => router.push('/products')}>
            Đến trang mua sắm
          </Button>
        </Empty>
      </div>
    );
  }

  return (
    <div className="layout history">
      <h1 className="page-heading">Lịch sử mua hàng</h1>
      <Row gutter={[20, 20]}>
        <Col lg={8} sm={24} xs={24}>
          <div className="history-overview">
            <h3 className="history-overview__title">
              Tổng quan lịch sử mua hàng
            </h3>
            <div className="history-overview__list">
              <p>
                Tổng số lần mua hàng: <span>{listPaid.length}</span> lần
              </p>
              <p>
                Tổng tiền chi trả: <span>{TongCong.toLocaleString('vi')}</span>{' '}
                đ
              </p>
              <p>
                Tổng sản phẩm đã mua: <span>{TongSanPham}</span> sản phẩm
              </p>
            </div>
          </div>
        </Col>
        <Col lg={16} sm={24} xs={24}>
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
                            <Col sm={3} xs={4}>
                              <div className="history-item__image">
                                <Image
                                  src={product.thumbnail}
                                  alt={product.title}
                                  fill
                                />
                              </div>
                            </Col>
                            <Col sm={21} xs={20}>
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
                    <p>{cart.length} sản phẩm</p>
                    <p>
                      Tổng Cộng: <span>{total}đ</span>
                    </p>
                  </div>
                  <div className="history-functions">
                    <Button type="primary" onClick={() => rePurchase(cart)}>
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

export default withProtectedRoute(PurchaseHistory);
