import React, { useState } from "react";

import {
  Form,
  InputNumber,
  Button,
  Upload,
  Rate,
  Input,
  DatePicker
} from "antd";
import { UploadOutlined} from "@ant-design/icons";
import "../assets/css/AdminTemplate.css";
import { themPhimMoiApiAction } from "../redux/actions/QuanLyPhimActions";
import { useDispatch } from "react-redux";

export default function ThemPhimMoi() {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const dispatch = useDispatch();


  return (
    <>
      <h1 className="title-manage">Thêm Phim</h1>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={(values) => {

          const phim = {  
              hinhAnh : values.hinhAnh[0].originFileObj,
              maPhim: values.maPhim,
              tenPhim: values.tenPhim,
              trailer: values.trailer,
              moTa: values.moTa,
              maNhom: 'GP02'
          };
          
           let form_data = new FormData();
            for (let key in phim){
              form_data.append(key, phim[key]);
            }
            dispatch(themPhimMoiApiAction(form_data));
        }}
        initialValues={{
          ["maNhom"]: "GP02",
          rate: 4.5,
        }}
      >
        {/* <Form.Item label="Mã Phim">
          <Form.Item name="maPhim" noStyle>
            <InputNumber disabled min={1000} max={9999} />
          </Form.Item>
        </Form.Item> */}

        <Form.Item
          label="Tên Phim"
          name="tenPhim"
          validateStatus="success"
          rules={[{ required: true, message: 'Vui lòng nhập Tên Phim!' }]}
        >
          <Input placeholder="Tên Phim" id="success" />
        </Form.Item>

        <Form.Item
          label="Bí Danh"
          name="biDanh"
          validateStatus="success"
          rules={[{ required: true, message: 'Vui lòng nhập Bí Danh!' }]}
        >
          <Input placeholder="Bí Danh" id="success" />
        </Form.Item>

        <Form.Item
          label="Trailer"
          name="trailer"
          validateStatus="success"
          rules={[{ required: true, message: 'Vui lòng nhập Trailer!' }]}
        >
          <Input placeholder="Trailer" id="success" />
        </Form.Item>

        <Form.Item
          name="hinhAnh"
          label="Hình Ảnh"
          valuePropName="file"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Vui lòng thêm Hình Ảnh!' }]}
        >
          <Upload name="hinhAnh" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Mã nhóm"
          name="maNhom"
          validateStatus="success"
          rules={[{ required: true }]}
        >
          <Input id="success" disabled />
        </Form.Item>

        <Form.Item
          label="Ngày khởi chiếu"
          name="ngayKhoiChieu"
          validateStatus="success"
          rules={[{ required: true, message: 'Vui chọn Ngày Khởi Chiếu!' }]}
        >
          <DatePicker showTime placeholder="Ngày khởi chiếu" format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>

        <Form.Item name="danhGia" label="Đánh giá">
          <Rate />
        </Form.Item>

        <Form.Item name={"moTa"} label="Mô tả">
          <Input.TextArea placeholder="Mô tả" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button htmlType="submit">
            Thêm Phim
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
