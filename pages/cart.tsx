import { Button, Col, Empty, Input, InputNumber, Row, Table } from 'antd';
import { IProduct } from 'interfaces/product';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { ColumnsType } from 'antd/es/table';
import { Product } from 'models/product';
import {
  changeQuantityProductToCart,
  removeMultiProductToCart,
  removeProductToCart,
} from 'store/Slices/cartSlice';
import { DeleteOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import CartOrder from '@/components/shared/cartOrder';
import { addCartPayment } from 'store/Slices/paymentSlice';
import Link from 'next/link';

interface DataType {
  key: string;
  product: IProduct;
  price: number;
  quantity: number;
  total: number;
}

function Cart() {
  const listProductCart = useAppSelector(state => state.cart.listProducts);
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [listProductSelect, setListProductSelect] = useState<DataType[]>([]);
  const [isCode, setIsCode] = useState<boolean>(false);
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
    const sum = listProductSelect.reduce((result: any, current: any): any => {
      return result + current.quantity * current.product.price * 23000 + 15000;
    }, 0);
    const total = sum.toLocaleString('vi');
    return total;
  }, [listProductSelect]);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Sản phẩm',
      dataIndex: 'product',
      key: 'product',
      render: (data: IProduct) => {
        return (
          <div className="cart-table__item-product">
            <div
              onClick={() => router.push(`/products/${data.id}`)}
              className="cart-table__item-image"
            >
              <Image
                src={data.thumbnail}
                fill
                alt={data.title}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="cart-table__title-product">
              <h3>
                <Link href={`/products/${data.id}`}>{data.title}</Link>
              </h3>
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
              onClick={() => {
                changeQuantity(record.product.id, data - 1);
                handleChangeQuantitySelect(record.product.id, data - 1);
              }}
              disabled={data === 1}
            >
              -
            </Button>
            <InputNumber
              className="cart-table__quantity--input"
              value={data}
              controls={false}
              max={record.product.stock}
              min={1}
              onChange={value => {
                changeQuantity(record.product.id, value);
                handleChangeQuantitySelect(record.product.id, value);
              }}
            />
            <Button
              type="primary"
              onClick={() => {
                changeQuantity(record.product.id, data + 1);
                handleChangeQuantitySelect(record.product.id, data + 1);
              }}
              disabled={data >= record.product.stock}
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
      // fixed: 'right',
      render: (_, record) => {
        return (
          <div className="cart-table__btn-delete">
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                dispatch(removeProductToCart(Number(record.key)));
                removeProductSelect(record.product.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  const removeProductSelect = (id: number) => {
    const newList = listProductSelect.filter(item => item.product.id !== id);
    setListProductSelect(newList);
  };

  const handleChangeQuantitySelect = (id: number, quantity: number) => {
    const index = listProductSelect.findIndex(item => item.product.id === id);
    if (index !== -1) {
      const copyArr = [...listProductSelect];
      copyArr[index].quantity = quantity;
      setListProductSelect(copyArr);
    }
  };

  if (listProductCart.length === 0) {
    return (
      <div className="section">
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
    const data = listProductSelect.map(item => {
      const { product, quantity } = item;
      return {
        product,
        quantity,
      };
    });
    dispatch(addCartPayment(data));
    router.push('/payment');
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setListProductSelect(selectedRows);
    },
    selectedRowKeys: listProductSelect.map(item => item.product.id),
  };

  const removeMultiProduct = () => {
    const data = listProductSelect.map(product => product.product.id);
    dispatch(removeMultiProductToCart(data));
    setListProductSelect([]);
  };

  return (
    <div className="layout cart page-container section">
      <h2 className="cart-heading page-heading">Giỏ hàng</h2>
      <Row gutter={[10, 24]}>
        <Col xl={16} sm={24} xs={24}>
          <div className="cart-table__top">
            <div>
              Bạn có mã ưu đãi, nhấn vào đây để nhập mã.
              <Button type="link" onClick={() => setIsCode(!isCode)}>
                {isCode ? 'Đóng' : 'Nhập'} mã ưu đãi
              </Button>
              {isCode && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Input />
                  <Button type="primary">Sử dụng mã</Button>
                </div>
              )}
            </div>
            {listProductSelect.length > 0 && (
              <Button type="link" danger onClick={removeMultiProduct}>
                <DeleteOutlined />
                Xóa ({listProductSelect.length}sp) đã chọn
              </Button>
            )}
          </div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            rowSelection={rowSelection}
            scroll={{ x: 500 }}
          />
          <p style={{ color: 'red' }}>
            *Hãy chọn sản phẩm bạn muốn đặt hàng và tiến hành thanh toán
          </p>
        </Col>
        <Col xl={8} sm={24} xs={24}>
          <CartOrder
            listProductCart={listProductSelect}
            total={total}
            onSubmit={handleSubmit}
          />
        </Col>
      </Row>

      <Button
        type="primary"
        style={{ marginTop: 8 }}
        icon={<ArrowLeftOutlined />}
        onClick={() => router.push('/products')}
      >
        Tiếp tục mua hàng
      </Button>
    </div>
  );
}

export default Cart;
