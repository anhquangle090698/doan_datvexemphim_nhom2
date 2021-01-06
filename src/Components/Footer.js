import React from "react";
import "../assets/scss/main.scss";
import f1 from "../assets/images/footer-cgv.png";
import f2 from "../assets/images/footer-bhd.png";
import f3 from "../assets/images/footer-cinestar.png";
import f4 from "../assets/images/footer-galaxycine.png";
import f5 from "../assets/images/footer-megags.png";
import f6 from "../assets/images/footer-AGRIBANK.png";
import f7 from "../assets/images/footer-payoo.jpg";
import f8 from "../assets/images/footer-VCB.png";
import f9 from "../assets/images/footer-VIETTINBANK.png";
import f10 from "../assets/images/footer-zalopay_icon.png";
import f11 from "../assets/images/footer-informed.png";
import logoB from "../assets/images/logo-600x600_g2_bg_dark.png";

export default function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer__item">
                <div className="footer__top">
                  <h3 className="footer__top--title">Giới Thiệu</h3>
                </div>
                <div className="footer__content">
                  <p className="footer__content--text">
                    <i className="fa fa-angle-double-right"></i> Về Chúng tôi
                  </p>
                  <p className="footer__content--text">
                    <i className="fa fa-angle-double-right"></i> Thỏa Thuận Sử Dụng
                  </p>
                  <p className="footer__content--text">
                    <i className="fa fa-angle-double-right"></i> Quy Chế Hoạt Động
                  </p>
                  <p className="footer__content--text">
                    <i className="fa fa-angle-double-right"></i> Chính sách Bảo Mật
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__item">
                <div className="footer__top">
                  <h3 className="footer__top--title">Hỗ Trợ</h3>
                </div>
                <div className="footer__content">
                  <p className="footer__content--text">
                    <i className="fa fa-angle-double-right"></i> Góp Ý
                  </p>
                  <p className="footer__content--text">
                    <i className="fa fa-angle-double-right"></i> Sales & Services
                  </p>
                  <p className="footer__content--text">
                    <i className="fa fa-angle-double-right"></i> Rạp / Giá vé
                  </p>
                  <p className="footer__content--text">
                    <i className="fa fa-angle-double-right"></i> Tuyển Dụng
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__item">
                <div className="footer__top">
                  <h3 className="footer__top--title">Liên Hệ</h3>
                </div>
                <div className="footer__content">
                  <p className="footer__content--text">
                    <i className="fa fa-desktop"></i> www.g2cinema.com.vn
                  </p>
                  <p className="footer__content--text">
                    <i className="fa fa-phone"></i> Hotline: 1900 6996
                  </p>
                  <p className="footer__content--text">
                    <i className="fa fa-envelope"></i> g2_cinema@gmail.com
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__item">
                <div className="footer__top">
                  <h3 className="footer__top--title">Kết nối g2 cinema</h3>
                </div>
                <div className="footer__social">
                  <i className="fab fa-facebook-square footer__social--item social--1"></i>
                  <i className="fab fa-youtube footer__social--item social--2"></i>
                  <i className="fab fa-instagram footer__social--item social--3"></i>
                  <i className="fab fa-twitter-square footer__social--item social--4"></i>
                </div>
                <div className="footer__top">
                  <h3 className="footer__top--title">Đối Tác</h3>
                </div>
                <div className="footer__partner">
                  <p>
                    <img src={f1} alt={f1} className="footer__partner--image"></img>
                    <img src={f2} alt={f2} className="footer__partner--image"></img>
                    <img src={f3} alt={f3} className="footer__partner--image"></img>
                    <img src={f4} alt={f4} className="footer__partner--image"></img>
                    <img src={f5} alt={f5} className="footer__partner--image"></img>
                  </p>
                  <p>
                    <img src={f6} alt={f6} className="footer__partner--image"></img>
                    <img src={f7} alt={f7} className="footer__partner--image"></img>
                    <img src={f8} alt={f8} className="footer__partner--image"></img>
                    <img src={f9} alt={f9} className="footer__partner--image"></img>
                    <img src={f10} alt={f10} className="footer__partner--image"></img>
                  </p>
                </div>
              </div>
            </div>
          </div>     
        </div>
        <hr></hr>
        <div className="footer__container container--1">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer__bottom">
                        <img src={logoB} alt={logoB} className="footer__bottom--logo"></img>
                        <span className="footer__bottom--address">
                        Công ty cổ phần G2, Tầng 5, 112 Cao Thắng, Phường 4, Quận 3,
                        TPHCM
                        </span>
                        <img src={f11} alt={f11} className="footer__bottom--permit"></img>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}
