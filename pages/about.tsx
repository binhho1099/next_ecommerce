import {
  BookTwoTone,
  CompassTwoTone,
  GoldTwoTone,
  TrophyTwoTone,
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about">
      <div className="layout about-overview section about-section">
        <Row
          gutter={[
            { md: 50, sm: 20, xs: 20 },
            { md: 50, sm: 20, xs: 20 },
          ]}
        >
          <Col lg={8} sm={24} xs={24}>
            <div className="about-section1__left">
              <div className="about-section1__left-image" data-aos="fade-right">
                <Image
                  src="/images/aboutus_gioithieu.png"
                  alt="gioi thieu"
                  fill
                />
              </div>
              <h2
                className="about-overview__title"
                data-aos="fade"
              >{`“Khách hàng là thượng đế”`}</h2>
            </div>
          </Col>
          <Col lg={16} sm={24} xs={24}>
            <div className="about-overview__text">
              <h3 className="about-title" data-aos="slide-down">
                <BookTwoTone twoToneColor="#F6851D" />
                Tập đoàn công nghệ hàng đầu Việt Nam BinhHo Group
              </h3>
              <p data-aos="slide-down">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                praesentium voluptas animi! Aliquid et, commodi sunt ratione
                debitis illum praesentium ab molestiae voluptates voluptatum. At
                animi ipsa ipsam voluptas accusantium.
              </p>
              <p data-aos="slide-down">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                temporibus architecto, quos vitae laboriosam autem expedita,
                veritatis iure, accusamus eligendi at recusandae repudiandae?
                Vitae perferendis cupiditate quod adipisci dolores eos!
              </p>
              <ul className="about-overview__list" data-aos="slide-down">
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
              <p data-aos="slide-down">
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
      <div className="layout section about-section">
        <h3 className="about-title" data-aos="fade-right">
          <GoldTwoTone twoToneColor="#F6851D" />
          Lĩnh vực kinh doanh
        </h3>
        <Row gutter={[50, 20]}>
          <Col md={14} sm={24} xs={24}>
            <ul className="about-list" data-aos="fade-up">
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
          <Col md={10} sm={24} xs={24}>
            <div className="about-section2__image" data-aos="fade-left">
              <Image
                src="/images/about_gioithieu-hotro.png"
                alt="ho tro"
                fill
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="layout section about-section">
        <h3 className="about-title" data-aos="zoom-in">
          <CompassTwoTone twoToneColor="#F6851D" />
          CÁC DỊCH VỤ CHO KHÁCH HÀNG TỔ CHỨC, DOANH NGHIỆP
        </h3>
        <ul className="about-list" data-aos="fade-up-right">
          <li>Cung cấp các dịch vụ cho doanh nghiệp</li>
          <li>Kênh thuê riêng Internet: NIX, GIA, Asia Transit.</li>
          <li>Dịch vụ đặt hàng sỉ & lẻ</li>
          <li>Dịch vụ trực tuyến như livestream</li>
          <li>Dịch vụ quản lý: sản phẩm, kho hàng, kho bãi, ..v.v</li>
          <li>Cung cấp giải pháp bán hàng đỉnh cao</li>
        </ul>
      </div>
      <div className="layout section about-section">
        <Row gutter={[50, 50]}>
          <Col xl={12} md={10} sm={24} xs={24}>
            <div className="about-section4__image" data-aos="zoom-in">
              <Image src="/images/gioithieu-huychuong.png" alt="ho tro" fill />
            </div>
          </Col>
          <Col xl={12} md={14} sm={24} xs={24}>
            <h3 className="about-title" data-aos="flip-up">
              <TrophyTwoTone twoToneColor="#F6851D" />
              CÁC GIẢI THƯỞNG TIÊU BIỂU{' '}
            </h3>
            <ul className="about-list" data-aos="fade-up-left">
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
