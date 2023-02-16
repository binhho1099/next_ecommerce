import {
  BookTwoTone,
  CompassTwoTone,
  GoldTwoTone,
  TrophyTwoTone,
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <div className="about">
      <div
        className="layout about-overview section"
        style={{ background: '#fff', borderRadius: 8, padding: '20px 10px' }}
      >
        <Row gutter={[50, 50]}>
          <Col span={8}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1',
                marginBottom: 30,
              }}
            >
              <Image
                src="/images/aboutus_gioithieu.png"
                alt="gioi thieu"
                fill
              />
            </div>
            <h2 className="about-overview__title">{`“Khách hàng là thượng đế”`}</h2>
          </Col>
          <Col span={16}>
            <div className="about-overview__text">
              <h3 className="about-title">
                <BookTwoTone twoToneColor="#F6851D" />
                Tập đoàn công nghệ hàng đầu Việt Nam BinhHo Group
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                praesentium voluptas animi! Aliquid et, commodi sunt ratione
                debitis illum praesentium ab molestiae voluptates voluptatum. At
                animi ipsa ipsam voluptas accusantium.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                temporibus architecto, quos vitae laboriosam autem expedita,
                veritatis iure, accusamus eligendi at recusandae repudiandae?
                Vitae perferendis cupiditate quod adipisci dolores eos!
              </p>
              <ul className="about-overview__list">
                <li className="about-overview__item">
                  <div className="about-overview__item-text">Sau</div>
                  <div className="about-overview__item-number">6</div>
                  <div className="about-overview__item-text">năm hoạt động</div>
                </li>
                <li className="about-overview__item">
                  <div className="about-overview__item-text">Đã có hơn</div>
                  <div className="about-overview__item-number">6.969</div>
                  <div className="about-overview__item-text">
                    NHÂN VIÊN CHÍNH THỨC
                  </div>
                </li>
                <li className="about-overview__item">
                  <div className="about-overview__item-text">Với gần</div>
                  <div className="about-overview__item-number">69</div>
                  <div className="about-overview__item-text">
                    VĂN PHÒNG ĐIỂM GIAO DỊCH
                  </div>
                </li>
                <li className="about-overview__item">
                  <div className="about-overview__item-text">Thuộc gần</div>
                  <div className="about-overview__item-number">69</div>
                  <div className="about-overview__item-text">CHI NHÁNH</div>
                </li>
                <li className="about-overview__item">
                  <div className="about-overview__item-text">Tại</div>
                  <div className="about-overview__item-number">6</div>
                  <div className="about-overview__item-text">TỈNH THÀNH</div>
                </li>
              </ul>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci sunt neque, ut asperiores delectus quis similique autem
                tempore maiores at, numquam accusantium, excepturi minima minus
                possimus tenetur corrupti quos dicta? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nostrum placeat ducimus
                blanditiis ipsa corrupti esse tempora rem odit modi voluptatibus
                doloremque similique aliquid cupiditate mollitia, sit ullam
                debitis? Tenetur, voluptatum. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Veniam praesentium ex soluta
                labore magni laboriosam possimus voluptatem unde dignissimos
                ratione. Ea a assumenda sint ut aliquam minus ipsam, accusamus
                nam?
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="layout section"
        style={{ background: '#fff', borderRadius: 8, padding: '20px 10px' }}
      >
        <h3 className="about-title">
          <GoldTwoTone twoToneColor="#F6851D" />
          Lĩnh vực kinh doanh
        </h3>
        <Row gutter={[50, 20]}>
          <Col span={14}>
            <ul className="about-list">
              <li>Cung cấp sản phẩm công nghệ</li>
              <li>Cung cấp sản phẩm làm đẹp</li>
              <li>Cung cấp các sản phẩm thuốc men</li>
              <li>Cung cấp các xe cộ di chuyển</li>
              <li>Cung cấp các sản phẩm chức năng</li>
              <li>Cung cấp các sản phẩm quần áo các loại</li>
              <li>Cung cấp các sản phẩm website</li>
              <li>Cung cấp các sản phẩm điện thoại</li>
              <li>Cung cấp các sản phẩm laptop</li>
              <li>Cung cấp các sản phẩm giày dép</li>
            </ul>
          </Col>
          <Col span={10}>
            <div
              style={{
                position: 'relative',
                width: '80%',
                aspectRatio: '1/1',
                margin: '0 auto',
              }}
            >
              <Image
                src="/images/about_gioithieu-hotro.png"
                alt="ho tro"
                fill
              />
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="layout section"
        style={{ background: '#fff', borderRadius: 8, padding: '20px 10px' }}
      >
        <h3 className="about-title">
          <CompassTwoTone twoToneColor="#F6851D" />
          CÁC DỊCH VỤ CHO KHÁCH HÀNG TỔ CHỨC, DOANH NGHIỆP
        </h3>
        <ul className="about-list">
          <li>Cung cấp các dịch vụ cho doanh nghiệp</li>
          <li>Kênh thuê riêng Internet: NIX, GIA, Asia Transit.</li>
          <li>Dịch vụ đặt hàng sỉ & lẻ</li>
          <li>Dịch vụ trực tuyến như livestream</li>
          <li>Dịch vụ quản lý: sản phẩm, kho hàng, kho bãi, ..v.v</li>
          <li>Cung cấp giải pháp bán hàng đỉnh cao</li>
        </ul>
      </div>
      <div
        className="layout section"
        style={{ background: '#fff', borderRadius: 8, padding: '20px 10px' }}
      >
        <Row gutter={[50, 50]}>
          <Col span={12}>
            <div
              style={{
                position: 'relative',
                width: '50%',
                aspectRatio: '1/1',
                margin: 'auto',
              }}
            >
              <Image src="/images/gioithieu-huychuong.png" alt="ho tro" fill />
            </div>
          </Col>
          <Col span={12}>
            <h3 className="about-title">
              <TrophyTwoTone twoToneColor="#F6851D" />
              CÁC GIẢI THƯỞNG TIÊU BIỂU{' '}
            </h3>
            <ul className="about-list">
              <li>Giải Vàng tại Giải thưởng doanh nghiệp hàng đầu</li>
              <li>
                Giải Vàng tại Giải thưởng Kinh doanh quốc tế IBA Stevie 2021 -
                Hạng mục Sản phẩm mới
              </li>
              <li>Hàng việt nam chất lượng cao</li>
              <li>Giải trang thương mại điện tử uy tín nhất VN</li>
              <li>Giải thưởng Kinh doanh quốc tế năm 2022</li>
              <li>Giải Bạc tại Giải thưởng Kinh doanh Việt Nam</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
