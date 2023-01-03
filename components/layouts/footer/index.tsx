import React from 'react';
import { FOOTER } from '../../../mocks/footer';
import Link from 'next/link';
import { Button, Form, Input } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Image from 'next/image';

const DefaultFooter = () => {
  return (
    <div className="footer">
      <div className="layout">
        <div className="footer-top">
          <div className="footer-list">
            <h2 className="footer-logo">LOGO COMPANY</h2>
            <ul>
              <li className="footer-item">
                <MailOutlined /> booking@digitacket.vn
              </li>
              <li className="footer-item">
                <PhoneOutlined /> 0363 355 055 (08:00 - 22:00)
              </li>
              <li className="footer-item">
                <PhoneOutlined /> 1900 252 580 (08:00 - 17:30)
              </li>
            </ul>
          </div>

          {FOOTER.map((footer) => {
            return (
              <div className="footer-list" key={footer.id}>
                <h3 className="footer-item__title">{footer.title}</h3>
                <ul>
                  {footer.children.map((chil) => {
                    return (
                      <li key={chil.id} className="footer-item">
                        <Link href={chil.path}>{chil.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div className="footer-list">
            <h3 className="footer-item__title">Đăng ký nhận khuyến mãi</h3>
            <div className="footer-form">
              <Form className="footer-form__contain">
                <Input className="footer-form__input" />
                <Button type="primary" className="header-btn">
                  Đăng ký
                </Button>
              </Form>
              <p className="footer-form__text">
                *Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình khuyến mãi siêu
                hấp dẫn sẽ được gửi trực tiếp đến email của bạn
              </p>
            </div>
            <div className="footer-social">
              <div className="footer-social__item">
                <Link href="/">
                  <Image src="/images/Facebook.png" fill alt="facebook" />
                </Link>
              </div>
              <div className="footer-social__item">
                <Link href="/">
                  <Image src="/images/Instagram.png" fill alt="instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <div>
              <p>
                2022 - Bản quyền của CÔNG TY TNHH MỘT THÀNH VIÊN COMPANY | Thiết
                kế bởi <span>AMIT GROUP</span>
              </p>
              <p>
                Giấy chứng nhạn Đăng Ký Kinh Doanh só 0109287103, cấp ngày
                30/7/2020 tại Sở kế hoạch đầu tư Hà Nội
              </p>
            </div>
            <div>
              <p>
                <span>Địa chỉ:</span> đường Hoàng Diệu 2, phường Linh Trung,
                quận Thủ Đức
              </p>
              <p></p>
            </div>
          </div>
          <div className="footer-bottom__right">
            <div>
              <img src="/images/footer_2.png" alt="footer" />
            </div>
            <div>
              <img src="/images/footer_1.png" alt="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DefaultFooter };
