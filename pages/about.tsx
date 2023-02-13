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
              }}
            >
              <Image
                src="/images/aboutus_gioithieu.png"
                alt="gioi thieu"
                fill
              />
            </div>
            <h2 className="about-overview__title">{`“Khách hàng là trọng tâm”`}</h2>
          </Col>
          <Col span={16}>
            <div className="about-overview__text">
              <h3 className="about-title">
                <BookTwoTone twoToneColor="#F6851D" />
                Là thành viên thuộc Tập đoàn công nghệ hàng đầu Việt Nam FPT
              </h3>
              <p>
                Công ty Cổ phần Viễn thông FPT (tên gọi tắt là FPT Telecom) hiện
                là một trong những nhà cung cấp dịch vụ Viễn thông và Internet
                hàng đầu khu vực.
              </p>
              <p>
                Thành lập ngày 31/01/1997, khởi nguồn từ Trung tâm Dịch vụ Trực
                tuyến do 4 thành viên sáng lập cùng sản phẩm mạng Intranet đầu
                tiên của Việt Nam mang tên “Trí tuệ Việt Nam - TTVN”, sản phẩm
                được coi là đặt nền móng cho sự phát triển của Internet tại Việt
                Nam.
              </p>
              <ul className="about-overview__list">
                <li className="about-overview__item">
                  <div className="about-overview__item-text">Sau</div>
                  <div className="about-overview__item-number">6</div>
                  <div className="about-overview__item-text">năm hoạt động</div>
                </li>
                <li className="about-overview__item">
                  <div className="about-overview__item-text">
                    FPT Telecom đã có hơn
                  </div>
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
                Với sứ mệnh tiên phong mang Internet, mang kết nối đến với người
                dân Việt Nam cùng mong muốn lớn lao mỗi gia đình Việt Nam đều sử
                dụng ít nhất một dịch vụ của Công ty, FPT Telecom đang nỗ lực
                thực thi Chiến lược “Mang đến trải nghiệm tuyệt vời cho khách
                hàng” trên cơ sở phát huy giá trị văn hóa cốt lõi “Lấy khách
                hàng làm trọng tâm” và nền tảng sức mạnh công nghệ FPT, từ đó
                tiên phong trở thành Nhà cung cấp dịch vụ số có trải nghiệm
                khách hàng vượt trội, tốt nhất tại Việt Nam.
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
              <li>
                Cung cấp hạ tầng mạng viễn thông cho dịch vụ Internet băng rộng
              </li>
              <li>
                Dịch vụ giá trị gia tăng trên mạng Internet, điện thoại di động
              </li>
              <li>Dịch vụ Truyền hình trả tiền</li>
              <li>
                Dịch vụ tin nhắn, dữ liệu, thông tin giải trí trên mạng điện
                thoại di động
              </li>
              <li>
                Thiết lập hạ tầng mạng và cung cấp các dịch vụ Viễn thông,
                Internet
              </li>
              <li>Xuất nhập khẩu thiết bị Viễn thông và Internet.</li>
              <li>Dịch vụ Viễn thông cố định nội hạt</li>
              <li>Dịch vụ Viễn thông giá trị gia tăng</li>
              <li>Dịch vụ Viễn thông cố định đường dài trong nước</li>
              <li>Cung ứng dịch vụ trung gian thanh toán</li>
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
          <li>
            Truyền dẫn số liệu: Trong nước (kết nối nội hạt, kết nối liên tỉnh)
            và quốc tế (IPLC, MPLS, IEPL).
          </li>
          <li>Kênh thuê riêng Internet: NIX, GIA, Asia Transit.</li>
          <li>
            Dịch vụ thoại: Trong nước (Điện thoại cố định, VoIP, đầu số
            1800/1900) và quốc tế.
          </li>
          <li>
            Dữ liệu trực tuyến: Tên miền, lưu trữ dữ liệu và email, thuê máy chủ
            và chỗ đặt máy chủ, thuê tủ Rack.
          </li>
          <li>
            Dịch vụ quản lý: Hội nghị truyền hình, điện toán đám mây, tích hợp
            hệ thống, dịch vụ bảo mật.
          </li>
          <li>
            Ví Doanh nghiệp, Cổng thanh toán điện tử Foxpay; Dịch vụ Hỗ trợ thu
            hộ chi hộ; Và các dịch vụ hỗ trợ thanh toán khác
          </li>
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
              <li>
                Giải Vàng tại Giải thưởng Kinh doanh quốc tế IBA Stevie 2021 -
                Hạng mục Sản phẩm mới{' '}
              </li>
              <li>
                Giải Vàng tại Giải thưởng Kinh doanh quốc tế IBA Stevie 2021 -
                Hạng mục Sản phẩm mới{' '}
              </li>
              <li>
                Giải Vàng tại Giải thưởng Kinh doanh quốc tế IBA Stevie 2021 -
                Hạng mục Sản phẩm mới{' '}
              </li>
              <li>
                Giải Vàng tại Giải thưởng Kinh doanh quốc tế IBA Stevie 2021 -
                Hạng mục Sản phẩm mới{' '}
              </li>
              <li>
                Giải Vàng tại Giải thưởng Kinh doanh quốc tế IBA Stevie 2021 -
                Hạng mục Sản phẩm mới{' '}
              </li>
              <li>
                Giải Vàng tại Giải thưởng Kinh doanh quốc tế IBA Stevie 2021 -
                Hạng mục Sản phẩm mới{' '}
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
