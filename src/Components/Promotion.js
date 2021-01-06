import React from "react";
import { NavLink } from "react-router-dom";
import promotion1 from "../assets/images/promotion-300x450_1.jpg";
import promotion2 from "../assets/images/promotion-300x450_2.jpg";
import promotion3 from "../assets/images/promotion-300x450_3.jpg";
import promotion4 from "../assets/images/promotion-300x450_4.jpg";
import promotion5 from "../assets/images/promotion-300x450_5.jpg";

export default function Promotion(props) {
  return (
    <>
      <div className="promotion" id="khuyen-mai">
        <div className="promotion__top">
          <h1 className="promotion__top--title">Tin Khuyến Mãi</h1>
        </div>
        <div className="promotion__content">
          <div className="row">
            <div className="col-md-3">
              <div className="promotion__item">
                <img src={promotion4} alt={promotion4}></img>
                <div className="promotion__overlay">
                  <NavLink to="/">
                    <h3 className="promotion__overlay--title">
                      Ứng Dụng Galaxy: Chọn Lối Đi Riêng, Vào Thẳng Rạp Phim
                    </h3>
                  </NavLink>

                  <NavLink to="/">
                    <p className="promotion__overlay--text">
                       <b>G2 Cinema</b> ra mắt app mới, việc đặt vé online dễ dàng
                      hơn bao giờ hết. Chỉ với một thao tác nhỏ là các Stars có
                      thể đến thẳng phòng chiếu xem phim ngay lập tức.
                    </p>
                  </NavLink>

                  <NavLink to="/" className="promotion__overlay--button">
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="promotion__item">
                <img src={promotion2} alt={promotion2}></img>
                <div className="promotion__overlay">
                  <NavLink to="/">
                    <h3 className="promotion__overlay--title">
                      Bắt Kịp Thời Đại 4.0: Bye Bye Thẻ Thành Viên Nhựa
                    </h3>
                  </NavLink>

                  <NavLink to="/">
                    <p className="promotion__overlay--text">
                      Không cần thẻ nhựa rườm rà nữa! Khi đến Galaxy Cinema mọi
                      thao tác đều được đơn giản hóa chỉ với một chiếc điện
                      thoại di động.
                    </p>
                  </NavLink>

                  <NavLink to="/" className="promotion__overlay--button">
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="promotion__item">
                <img src={promotion3} alt={promotion3}></img>
                <div className="promotion__overlay">
                  <NavLink to="/">
                    <h3 className="promotion__overlay--title">
                        TƯNG BỪNG HÁI "SAO" – NHẬN ƯU ĐÃI KHỦNG
                    </h3>
                  </NavLink>

                  <NavLink to="/">
                    <p className="promotion__overlay--text">
                        Galaxy Cinema ra mắt hệ thống tích điểm thành viên hoàn toàn mới!
                    </p>
                  </NavLink>

                  <NavLink to="/" className="promotion__overlay--button">
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="promotion__item">
                <img src={promotion1} alt={promotion1}></img>
                <div className="promotion__overlay">
                  <NavLink to="/">
                    <h3 className="promotion__overlay--title">
                    X2 Thành Viên - X2 Quyền Lợi
                    </h3>
                  </NavLink>

                  <NavLink to="/">
                    <p className="promotion__overlay--text">
                        Mở rộng quyền lợi thành viên Galaxy Cinema với tính năng đổi điểm mới dành cho các Stars thân yêu. Tự do quy đổi SAO sang điểm VUI của TAPTAP để có thêm nhiều lựa chọn ưu đãi 
                        hấp dẫn với đa dạng lĩnh vực từ ăn uống, mua sắm, giải trí cho đến du lịch.
                    </p>
                  </NavLink>

                  <NavLink to="/" className="promotion__overlay--button">
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="promotion__item">
                <img src={promotion5} alt={promotion5}></img>
                <div className="promotion__overlay">
                  <NavLink to="/">
                    <h3 className="promotion__overlay--title">
                        Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng
                    </h3>
                  </NavLink>

                  <NavLink to="/">
                    <p className="promotion__overlay--text">
                        Từ lâu, chương trình Ngày Tri Ân Nhằm tạo điều kiện thuận lợi hơn cho các khách hàng thả ga 
                        xem phim đã trở nên quen thuộc với các khách hàng thân yêu của Galaxy Cinema.
                    </p>
                  </NavLink>

                  <NavLink to="/" className="promotion__overlay--button">
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="promotion__item">
                <img src={promotion9} alt={promotion9}></img>
                <div className="promotion__overlay">
                  <NavLink to="/">
                    <h3 className="promotion__overlay--title">
                      Ứng Dụng Galaxy: Chọn Lối Đi Riêng, Vào Thẳng Rạp Phim
                    </h3>
                  </NavLink>

                  <NavLink to="/">
                    <p className="promotion__overlay--text">
                      Galaxy Cinema ra mắt app mới, việc đặt vé online dễ dàng
                      hơn bao giờ hết. Chỉ với một thao tác nhỏ là các Stars có
                      thể đến thẳng phòng chiếu xem phim ngay lập tức.
                    </p>
                  </NavLink>

                  <NavLink to="/" className="promotion__overlay--button">
                    Chi Tiết
                  </NavLink>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="promotion__top">
          <h1 className="promotion__top--title">G2 Cinema</h1>
        </div>
        <div className="promotion__about">
            <p className="promotion__about--text">
                <b> G2 Cinema </b> là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem,  <b> G2 Cinema </b> 
                còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.</p>
            <p className="promotion__about--text">Đến website <i> g2cinema.cybersoft </i> , quý khách sẽ được cập nhật nhanh chóng <i> các phim hay nhất phim mới nhất </i> đang chiếu hoặc sắp chiếu. Lịch chiếu tại mọi hệ thống rạp chiếu phim của  <b> G2 Cinema </b> cũng được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ.</p>
            <p className="promotion__about--text">Đặt vé tại  <b> G2 Cinema </b> dễ dàng chỉ sau vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, theo ngày tùy cách nào tiện lợi nhất cho bản thân.Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi <i> Đặt vé thành công </i> của  <b> G2 Cinema </b>. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của  <b> G2 Cinema </b> hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.</p>
            <p className="promotion__about--text">Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box <i> Mua Vé Nhanh </i> ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của  <b> G2 Cinema </b> sẽ gửi ngay vào điện thoại và hộp mail của bạn.</p>
            <p className="promotion__about--text">Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay trong mục <i> Phim Đang Chiếu </i> cũng như <i> Phim Sắp Chiếu </i> tại rạp chiếu phim bằng cách vào mục Bình Luận Phim ở Góc Điện Ảnh để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, quý khách hãy đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất.</p>
            <p className="promotion__about--text"> <b> G2 Cinema </b> luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim…  dành cho quý khách. Trang web galaxycine.vn còn có mục <i> Góc Điện Ảnh </i> - sở hữu lượng dữ liệu về phim, diễn viên và đạo diễn, giúp quý khách dễ dàng chọn được phim mình yêu thích và nâng cao kiến thức về điện ảnh của bản thân. Ngoài ra, vào mỗi tháng,  <b> G2 Cinema </b> cũng giới thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng để quý khách sớm có sự tính toán.</p>
            <p className="promotion__about--text">Hiện nay,  <b> G2 Cinema </b> đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế giới và Việt Nam nhanh chóng và sớm nhất.</p>
        </div>
      </div>
    </>
  );
}
