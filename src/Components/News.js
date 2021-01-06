import React from "react";
import { NavLink } from "react-router-dom";
import news1 from "../assets/images/news-450-subu.jpg";
import news2 from "../assets/images/news-450-crood.jpg";
import news3 from "../assets/images/news-tiectrangmau450x300.jpg";
import news4 from "../assets/images/news-450-trai-tim.jpg";
import news5 from "../assets/images/news-450-ke.jpg";
import news6 from "../assets/images/news-450-kieu-chuan.jpg";
import news7 from "../assets/images/news-450-quai.jpg";
import news8 from "../assets/images/news-450-tron-chay.jpg";
import "../assets/scss/main.scss";

export default function News(props) {
  return (
    <>
      <div className="news" id="tin-tuc">
        <div className="row">
          <div className="col-md-6">
            <div className="news__top">
              <h1 className="news__top--title">Bình Luận Phim</h1>
            </div>
            <div className="news__content">
              <div className="news__item">
                <div className="news__item--blockImg">
                  <NavLink to="/">
                    <img
                      className="news__item--image"
                      src={news1}
                      alt={news1}
                    ></img>
                  </NavLink>
                </div>
                <div className="news__item--blockText">
                  <NavLink to="/">
                    <h3 className="news__item--title">
                      [Review] Demon Slayer: "Diệt Gọn" Khương Tử Nha Trên Bảng
                      Doanh Thu Phòng Vé Toàn Cầu
                    </h3>
                  </NavLink>
                  <p className="news__item--subtitle">
                    Trong năm 2020, khi phòng vé vô cùng ảm đạm vì đại dịch
                    Covid-19, phim điện ảnh
                    <strong>
                      {" "}
                      Demon Slayer: Kimetsu No Yaiba the Movie: Mugen Train{" "}
                    </strong>
                    thắng lớn ở Nhật Bản với hơn 20 triệu lượt người xem, thu về
                    xấp xỉ 265 triệu $.
                  </p>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item--blockImg">
                  <NavLink to="/">
                    <img
                      className="news__item--image"
                      src={news2}
                      alt={news2}
                    ></img>
                  </NavLink>
                </div>
                <div className="news__item--blockText">
                  <NavLink to="/">
                    <h3 className="news__item--title">
                      [Review] Gia Đình Croods: Kỷ Nguyên Mới – Vui Nhộn Nhưng
                      Sâu Sắc Và Nữ Quyền Không Hề “Sượng”
                    </h3>
                  </NavLink>
                  <p className="news__item--subtitle">
                    Tình huống hài hước, thông điệp nhân văn, đề cao nữ quyền…,
                    nội dung của
                    <b>
                      {" "}
                      <i> Gia Đình Croods: Kỷ Nguyên Mới </i>{" "}
                    </b>
                    có thể tóm tắt bằng những yếu tố vừa được liệt kê.
                  </p>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item--blockImg">
                  <NavLink to="/">
                    <img
                      className="news__item--image"
                      src={news3}
                      alt={news3}
                    ></img>
                  </NavLink>
                </div>
                <div className="news__item--blockText">
                  <NavLink to="/">
                    <h3 className="news__item--title">
                      [Review] Tiệc Trăng Máu: Hội Tụ Anh Tài
                    </h3>
                  </NavLink>
                  <p className="news__item--subtitle">
                    Sau bao ngày chờ đợi, cuối cùng thì Tiệc Trăng Máu đã chính
                    thức ra rạp. Cùng xem liệu bộ phim này có xứng đáng với kỳ
                    vọng của khán giả không nhé.
                  </p>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item--blockImg">
                  <NavLink to="/">
                    <img
                      className="news__item--image"
                      src={news4}
                      alt={news4}
                    ></img>
                  </NavLink>
                </div>
                <div className="news__item--blockText">
                  <NavLink to="/">
                    <h3 className="news__item--title">
                      [Review] Trái Tim Quái Vật: Khi Ác Quỷ Là Kẻ Lương Thiện
                      Bị Tổn Thương
                    </h3>
                  </NavLink>
                  <p className="news__item--subtitle">
                    <b>
                      <i> Trái Tim Quái Vật </i>
                    </b>
                    đặt ra câu hỏi: Liệu ác quỷ vốn được sinh ra với bản chất đã
                    định sẵn, hay trước đó bản chất thật sự của nó đã từng là
                    một thiên thần?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="news__top">
              <h1 className="news__top--title">Góc Điện Ảnh</h1>
            </div>
            <div className="news__content">
              <div className="news__item">
                <div className="news__item--blockImg">
                  <NavLink to="/">
                    <img
                      className="news__item--image"
                      src={news5}
                      alt={news5}
                    ></img>
                  </NavLink>
                </div>
                <div className="news__item--blockText">
                  <NavLink to="/">
                    <h3 className="news__item--title">
                      Kẻ Rình Mồi: Cái Ác Luôn Rình Rập
                    </h3>
                  </NavLink>
                  <p className="news__item--subtitle">
                    <b>
                      {" "}
                      <i> Kẻ Rình Mồi </i>
                    </b>
                    là bộ phim tâm lý kinh dị năm 2020 của đạo diễn John Hyams,
                    xoay quanh những ám ảnh và nguy hiểm luôn tiềm ẩn hoặc hiện
                    diện từ những con người xa lạ và tỏ ra vô hại.
                  </p>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item--blockImg">
                  <NavLink to="/">
                    <img
                      className="news__item--image"
                      src={news6}
                      alt={news6}
                    ></img>
                  </NavLink>
                </div>
                <div className="news__item--blockText">
                  <NavLink to="/">
                    <h3 className="news__item--title">
                      Kiều: Hoạn Thư Chính Thức Lộ Diện Với Tạo Hình Đầy Sắc Sảo
                    </h3>
                  </NavLink>
                  <p className="news__item--subtitle">
                    Hoạn Thư – biểu tượng cho sự ghen tuông của người phụ nữ
                    nhiều thế kỉ qua được nhà sản xuất phim điện ảnh “Kiều” tin
                    tưởng giao cho diễn viên Cao Thái Hà.
                  </p>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item--blockImg">
                  <NavLink to="/">
                    <img
                      className="news__item--image"
                      src={news7}
                      alt={news7}
                    ></img>
                  </NavLink>
                </div>
                <div className="news__item--blockText">
                  <NavLink to="/">
                    <h3 className="news__item--title">
                      Quái Đản: Kinh Dị Và Hài Hước Khi Sát Nhân Và Người Đẹp
                      Hoán Đổi Thân Xác
                    </h3>
                  </NavLink>
                  <p className="news__item--subtitle">
                    <b>
                      <i> Quái Đản </i>
                    </b>
                    là bộ phim kinh dị hài do hãng phim nổi tiếng Blumhouse sản
                    xuất. Tác phẩm chứng tỏ sự xuất sắc và thu hút khi đạt số
                    điểm 83% trên Rotten Tomatoes và 6.8/10 ở hệ thống IMDb.
                  </p>
                </div>
              </div>
              <div className="news__item">
                <div className="news__item--blockImg">
                  <NavLink to="/">
                    <img
                      className="news__item--image"
                      src={news8}
                      alt={news8}
                    ></img>
                  </NavLink>
                </div>
                <div className="news__item--blockText">
                  <NavLink to="/">
                    <h3 className="news__item--title">
                      Trốn Chạy: Khi Tình Yêu Thương Mù Quáng Biến Thành Xiềng
                      Xích
                    </h3>
                  </NavLink>
                  <p className="news__item--subtitle">
                    <b>
                      <i> Trốn Chạy </i>
                    </b>
                    là phim mới thuộc thể loại kinh dị, tâm lý giật gân đầy hấp
                    dẫn, được mang đến từ vị đạo diễn tài năng Aneesh Chaganty
                    của Truy Tìm Tung Tích Ảo (Searching).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
