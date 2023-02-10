import {
  Button,
  Col,
  Empty,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Row,
  Table,
} from 'antd';
import { IProduct } from 'interfaces/product';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { ColumnsType } from 'antd/es/table';
import { Product } from 'models/product';
import {
  changeQuantityProductToCart,
  removeProductToCart,
} from 'store/Slices/cartSlice';
import { DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import CartOrder from '@/components/shared/cartOrder';
import { addCartPayment } from 'store/Slices/paymentSlice';

interface DataType {
  key: string;
  product: IProduct;
  price: number;
  quantity: number;
  total: number;
}

function Cart() {
  const listProductCart = useAppSelector(state => state.cart.listProducts);
  const [dataSource, setDataSource] = useState<any>([]);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (listProductCart.length !== 0) {
      const data = listProductCart.map((productCart: any) => {
        const productModel = new Product(productCart.product);
        return {
          key: productCart.product.id,
          product: productCart.product,
          price: productModel.handlePrice(),
          quantity: productCart.quantity,
          total: productModel.subTotal(productCart.quantity),
        };
      });
      setDataSource(data);
    }
  }, [listProductCart]);

  const changeQuantity = (id: number, quantity: number) => {
    if (quantity < 0 || !quantity) {
      quantity = 1;
    }
    const data = {
      id,
      quantity,
    };
    dispatch(changeQuantityProductToCart(data));
  };

  const total = useMemo(() => {
    const sum = listProductCart.reduce((result: any, current: any): any => {
      return result + current.quantity * current.product.price * 23000 + 15000;
    }, 0);
    const total = sum.toLocaleString('vi');
    return total;
  }, [listProductCart]);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Sản phẩm',
      dataIndex: 'product',
      key: 'product',
      render: (data: IProduct) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            <div
              style={{
                position: 'relative',
                width: 80,
                height: 80,
                backgroundColor: '#f1f1f1',
                borderRadius: 4,
              }}
            >
              <Image
                src={data.thumbnail}
                fill
                alt={data.title}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div>
              <h3>{data.title}</h3>
              <p>{data.brand}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      render: (data, record) => {
        return (
          <div className="cart-table__quantity">
            <Button
              type="primary"
              onClick={() => changeQuantity(record.product.id, data - 1)}
              disabled={data === 1}
            >
              -
            </Button>
            <InputNumber
              className="cart-table__quantity--input"
              value={data}
              controls={false}
              max={99}
              onChange={value => changeQuantity(record.product.id, value)}
            />
            <Button
              type="primary"
              onClick={() => changeQuantity(record.product.id, data + 1)}
            >
              +
            </Button>
          </div>
        );
      },
    },
    {
      title: 'Thành tiền',
      dataIndex: 'total',
      key: 'total',
      align: 'center',
      render: text => {
        return <b>{text}</b>;
      },
    },
    {
      align: 'center',
      width: '10%',
      render: (_, record) => {
        return (
          <div className="cart-table__btn-delete">
            <Popconfirm
              title={
                <p>
                  Bạn muốn xóa <b>{record.product.title}</b> khỏi giỏ hàng?
                </p>
              }
              onConfirm={() =>
                dispatch(removeProductToCart(Number(record.key)))
              }
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  if (listProductCart.length === 0) {
    return (
      <div>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Giỏ hàng trống"
        >
          <Button type="primary" onClick={() => router.push('/products')}>
            Đến trang mua sắm
          </Button>
        </Empty>
      </div>
    );
  }

  const handleSubmit = () => {
    dispatch(addCartPayment(listProductCart));
    router.push('/payment');
  };

  return (
    <div className="layout cart">
      <h2 className="cart-heading">Giỏ hàng</h2>
      <p>
        Bạn có mã ưu đãi, nhấn vào đây để nhập mã.
        <Button type="link">Nhập mã ưu đãi</Button>
      </p>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Button
        type="primary"
        style={{ marginTop: 8 }}
        icon={<ArrowLeftOutlined />}
        onClick={() => router.push('/products')}
      >
        Tiếp tục mua hàng
      </Button>
      <Row gutter={20}>
        <Col span={12}>Chính sách mua hàng</Col>
        <Col span={12}>
          <CartOrder
            listProductCart={listProductCart}
            total={total}
            onSubmit={handleSubmit}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
