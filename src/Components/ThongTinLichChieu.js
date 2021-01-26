import React, { useState } from "react";
import { Select, DatePicker, Form, Input, Button } from "antd";
import moment from "moment";

export default function ThongTinLichChieu() {
  const { Option, OptGroup } = Select;

  let [formatNgayChieuGioChieu, setFormatNgayChieuGioChieu] = useState("");

  function onChangeDate(value, dateString) {
    let formatNgayGio = moment(dateString).format("DD/MM/YYYY h:mm:ss");
    setFormatNgayChieuGioChieu(formatNgayGio);
  }

  console.log("stateNgayChieu", formatNgayChieuGioChieu);

  function handleChangeSelectCinema(value) {
    console.log(`selected ${value}`);
  }

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <>
      <h1 className="title-manage">Thêm Lịch Chiếu Phim</h1>
      <h2 className="title-manage">Mã Phim: ''</h2>

      <Form
      {...formItemLayout}
      >
        <Form.Item
          label="Rạp Chiếu"
          name="maRap"
          validateStatus="success"
          rules={[{ required: true, message: "Vui lòng chọn Rạp Chiếu!" }]}
        >
          <Select
            style={{ width: 438 }}
            onChange={handleChangeSelectCinema}
            placeholder="Chọn Rạp Chiếu"
          >
            <OptGroup label="BHD Star">
              <Option value="jack">BHD Star Bitexco</Option>
              <Option value="lucy1">BHD Star Lê Văn Việt</Option>
              <Option value="lucy2">BHD Star Vincom Quang Trung</Option>
              <Option value="lucy3">BHD Star Thảo Điền</Option>
            </OptGroup>
            <OptGroup label="CGV">
              <Option value="Yiminghe1">CGV Aeon Bình Tân</Option>
              <Option value="Yiminghe2">CGV Aeon Tân Phú</Option>
              <Option value="Yiminghe3">CGV Crescent Mall</Option>
              <Option value="Yiminghe4">CGV CT Plaza</Option>
              <Option value="Yiminghe5">CGV Hoàng Văn Thụ</Option>
              <Option value="Yiminghe6">CGV Hùng Vương Plaza</Option>
              <Option value="Yiminghe7">CGV Liberty Cytypoint</Option>
              <Option value="Yiminghe8">CGV Pandora City</Option>
              <Option value="Yiminghe9">CGV Parkson Đồng Khởi</Option>
              <Option value="Yiminghe11">CGV Pearl Plaza</Option>
              <Option value="Yiminghe12">CGV Vạn Hạnh</Option>
              <Option value="Yiminghe13">CGV Vincom Đồng Khởi</Option>
              <Option value="Yiminghe14">CGV Vincom Landmark 81</Option>
              <Option value="Yiminghe15">CGV Saigonres Nguyễn Xí</Option>
            </OptGroup>
            <OptGroup label="CineStar">
              <Option value="jack16">CNS Hai Bà Trưnng</Option>
              <Option value="lucy17">CNS Quốc Thanh</Option>
            </OptGroup>
            <OptGroup label="Galaxy Cinema">
              <Option value="jack18">GLX Kinh Dương Vương</Option>
              <Option value="lucy19">GLX Nguyễn Du</Option>
              <Option value="lucy20">GLX Phạm Văn Chí</Option>
              <Option value="lucy21">GLX Quang Trung</Option>
              <Option value="lucy22">GLX Trung Chánh</Option>
            </OptGroup>
            <OptGroup label="Lotte Cinema">
              <Option value="jack23">Lotte Cantavil</Option>
              <Option value="lucy24">Lotte Diamon</Option>
              <Option value="lucy31">Lotte Gò Vấp</Option>
              <Option value="luc32">Lotte Nowzone</Option>
              <Option value="lucy33">Lotte Phú Thọ</Option>
              <Option value="lucy34">Lotte Thủ Đức</Option>
            </OptGroup>
            <OptGroup label="Mega GS">
              <Option value="jack666">MegaGS Cao Thắng</Option>
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item
          label="Giá Vé"
          name="giaVe"
          validateStatus="success"
          rules={[{ required: true, message: "Vui lòng nhập Giá Vé!" }]}
        >
          <Input placeholder="Giá Vé" id="success" type="number" />
        </Form.Item>
        <Form.Item
          label="Ngày Chiếu - Giờ Chiếu"
          name="ngayChieuGioChieu"
          validateStatus="success"
          rules={[{ required: true, message: "Vui lòng chọn Ngày Chiếu Giờ Chiếu!" }]}
        >
           <DatePicker showTime onChange={onChangeDate} placeholder="Thời gian chiếu"/>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 9 }}>
          <Button htmlType="submit">Thêm Lịch Chiếu</Button>
        </Form.Item>
       
      </Form>
    </>
  );
}
