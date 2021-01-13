import React from "react";
import { Form, Button, Input, Radio } from "antd";
import "../assets/css/AdminTemplate.css";

export default function ThemNguoiDungMoi() {
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

  return (
    <>
      <h1 className="title-manage">Thêm Người Dùng</h1>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={(values) => {
          console.log("Received values of form: ", values);
        }}
        initialValues={{
          ["maPhim"]: 1234,
          ["maNhom"]: "GP02",
          rate: 4.5,
        }}
      >
        <Form.Item
          label="Tài Khoản"
          name="taiKhoan"
          rules={[{ required: true, message: "Vui lòng nhập Tài Khoản!" }]}
        >
          <Input placeholder="Tài Khoản" id="success" />
        </Form.Item>

        <Form.Item
          name="matKhau"
          label="Mật Khẩu"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Mật Khẩu" />
        </Form.Item>

        <Form.Item
          name="xacNhanMatKhau"
          label="Xác Nhận Mật Khẩu"
          dependencies={["matKhau"]}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập Mật Khẩu",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("matKhau") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Vui lòng nhập đúng Mật Khẩu Xác Nhận!");
              },
            }),
          ]}
        >
          <Input.Password placeholder="Xác Nhận Mật Khẩu" />
        </Form.Item>

        <Form.Item
          label="Họ Và Tên"
          name="hoTen"
          rules={[{ required: true, message: "Vui lòng nhập Họ Và Tên!" }]}
        >
          <Input placeholder="Họ Và Tên" id="success" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          validateStatus="success"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            { required: true, message: "Vui lòng nhập Email!" },
          ]}
        >
          <Input placeholder="Email" id="success" />
        </Form.Item>

        <Form.Item
          label="Số Điện Thoại"
          name="soDt"
          rules={[{ required: true, message: "Vui lòng nhập Số Điện Thoại!" }]}
        >
          <Input placeholder="Tài Khoản" id="success" />
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
          label="Loại Người Dùng"
          name="maLoaiNguoiDung"
          rules={[
            { required: true, message: "Vui lòng chọn Loại Người Dùng!" },
          ]}
        >
          <Radio.Group autoFocus={false}>
            <Radio value="QuanTri">Quản Trị</Radio>
            <Radio value="KhachHang">Khách Hàng</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button htmlType="submit">Thêm Người Dùng</Button>
        </Form.Item>
      </Form>
    </>
  );
}
