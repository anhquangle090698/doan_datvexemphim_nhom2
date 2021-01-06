import React from 'react';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import ListMoviesShowing from '../../Components/ListMoviesShowing';
import Popup from '../../Components/Popup';
import ScrollToTop from '../../Components/ScrollToTop';

export default function ShowingFilm(props) {
    return (
        <div className="showingFilm">
            <Header></Header>
            <Carousel></Carousel>
            <ListMoviesShowing></ListMoviesShowing>
            <div className="promotion">
                <div className="promotion__top">
                    <h1 className="promotion__top--title">G2 Cinema</h1>
                </div>
                <div className="promotion__about">
                    <p className="promotion__about--text">
                    Một bữa tiệc đầy màu sắc đảm bảo sẽ đáp ứng đủ mọi trải nghiệm cho dân mê phim, đem tới cảm giác “Phim như sống, sống như phim” tại thánh đường điện ảnh <b> G2 Cinema.</b></p>
                    <p className="promotion__about--text">Bất chấp đại dịch Covid-19, bữa tiệc điện ảnh tại <b> G2 Cinema </b> vẫn sẽ mang đến cho các “mọt phim” hàng loạt tác phẩm hấp dẫn, đa dạng về chủ đề, phong phú trong thể loại. Hãy đến Trạm Dừng Điện Ảnh Thiên Hà để thưởng thức những bộ phim mới nhất hot nhất.</p>
                    <p className="promotion__about--text">Ngành điện ảnh trong năm 2020 chịu ảnh hưởng nặng nề từ đại dịch Covid19. Ngoài những bộ phim hay vẫn đang phục vụ khán giả tại rạp chiếu phim, toàn cầu vẫn cần những cú huých lớn từ các bom tấn.  Hãy cùng điểm qua những tác phẩm được dự đoán phá mốc doanh thu trăm tỷ tại Việt Nam!</p>
                    <p className="promotion__about--text"><b>+ Chị Mười Ba: 3 Ngày Sinh Tử </b></p>
                    <p className="promotion__about--text">Khai thác đề tài giang hồ, Chị Mười Ba và các anh em An Cư Nghĩa Đoàn tiếp tục tái ngộ người xem với Chị Mười Ba: 3 Ngày Sinh Tử.Câu chuyện lần này xoay quanh nhân vật Kẽm Gai sau khi ra tù, tưởng chừng sẽ có một cuộc sống bình yên thì Kẽm Gai xảy ra mâu thuẫn với Đức Mad. Căng thẳng lên đến đỉnh điểm khi Đức Mad bị giết, Kẽm Gai thì bỏ trốn. Sự xuất hiện của nhân vật phản diện do Kiều Minh Tuấn thủ vai sẽ đóng vai trò đối đầu trực tiếp với chị Mười Ba của Thu Trang.</p>
                    <p className="promotion__about--text">Ngoài dàn viễn viên cũ quen thuộc thì phần hai của phim có thêm sự tham gia của Phát La, Châu Bùi… <b> Chị Mười Ba: 3 Ngày Sinh Tử </b> dự kiến phát hành ngày 18.12.2020.</p>
                    <p className="promotion__about--text"><b>+ Lật Mặt 48h</b></p>
                    <p className="promotion__about--text">Dịp Tết Nguyên Đán 2021 còn chào đón một phim Việt đáng chú là Lật Mặt 48h, phần tiếp theo của series Lật Mặt do Lý Hải sản xuất.</p>
                    <p className="promotion__about--text">Bối cảnh phim diễn ra ở khu sông nước miền Tây, nhân vật do Võ Thành Tâm đảm nhận phải chạy trốn khỏi cuộc truy đuổi gắt gao của Huỳnh Đông. Mạc Văn Khoa vẫn tiếp tục đem đến tiếng cười bởi sự duyên dáng của mình. Chỉ với những hình ảnh trong trailer, độ hoành tráng của các phân đoạn hành động, rượt đuổi trên sông đã hoàn toàn thu hút khán giả. Hứa hẹn đem đến nhiều bất ngờ và sẵn sàng công phá phòng vé từ ngay mùng 1 Tết.</p>
                    <p className="promotion__about--text"><b>Lật Mặt 48h </b> khởi chiếu ngày 12.02.2021</p>
                    <p className="promotion__about--text"><b>+ Gái Già Lắm Chiêu V: Những Cuộc Đời Vương Giả</b></p>
                    <p className="promotion__about--text">Tiếp tục khai thác về khía cạnh giàu sang, vị thế vương tôn đi cùng gia tộc trâm anh thế phiệt,  vũ trụ điện ảnh Gái Già Lắm Chiêu tiếp tục mở rộng với Gái Già Lắm Chiêu V: Những Cuộc Đời Vương Giả. Bạch Trà Viên là một biệt phủ to lớn tọa ngay Cố đô Huế, được ví như hoàng cung thu nhỏ ẩn mình dưới hình dạng tòa lâu đài nguy nga tráng lệ. Đây cũng là nơi ở của ba chị em tuyệt sắc giai nhân, họ là chủ của Bạch Trà Viên gồm Lý Lệ Hà (NSND Lê Khanh), Lý Lệ Hồng (NSND Hồng Vân) và Lý Linh Kaity Nguyễn.</p>
                    <p className="promotion__about--text"><b>+ 007: No Time To Die</b></p>
                    <p className="promotion__about--text">Việc đạo diễn Danny Boyle bất ngờ rút lui khỏi dự án 007 từng gây xôn xao một thời gian dài. May mắn thay, cuối cùng tập phim thứ 25 về James Bond vẫn có cơ hội tái ngộ khán giả với tên No Time To Die. Nội dung của phim được dự đoán diễn ra ngay sau sự kiện ở phần phim 007: Spectre. Chủ nhân tượng vàng Oscar Rami Malek sẽ là nhân vật phản diện chính lần này, đối đầu trực tiếp với James Bond. Cary Fukunaga trở thành đạo diễn người Mỹ đầu tiên “cầm lái” một bộ phim về điệp viên 007.</p>
                    <p className="promotion__about--text"><b>007: No Time To Die </b>sẽ ra rạp vào tháng 04.2021.</p>
                    <p className="promotion__about--text"><b>+ Black Widow</b></p>
                    <p className="promotion__about--text">Được đạo diễn bởi Cate Shortland, Scarlett Johansson trở lại với trở lại với vai đặc vụ Natasha, diễn viên của series Stranger Things - David Harbour vào vai Alexi. Florence Pugh hóa thân thành Yelena Belova (một nhân vật được chính phủ Nga đào tạo trở thành Black Widow phiên bản thứ hai). Nữ diễn viên Rachel Weisz thể hiện một nhân vật bí ẩn chưa xác định danh tính.</p>
                    <p className="promotion__about--text">Bối cảnh phim diễn ra ở Budapest, khán giả sẽ có dịp hiểu thêm về quá khứ và xuất thân của nhân vật Natasha. Các sự kiện trong phim sẽ diễn ra trước khi nàng Góa Phụ Đen gia nhập hội Avengers. Đáng chú ý là Iron Man dự kiến cũng sẽ xuất hiện, các fan hâm mộ Người Sắt hẳn sẽ rất vui mừng khi có cơ hội tái ngộ với một trong những siêu anh hùng được yêu mến nhất.</p>
                    <p className="promotion__about--text"><b>Black Widow </b> khởi chiếu vào 07.05.2021</p>
                </div>
            </div>
            <Footer></Footer>

            <ScrollToTop></ScrollToTop>
            <Popup></Popup>
        </div>
    )
}
