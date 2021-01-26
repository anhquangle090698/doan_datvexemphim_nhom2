import React from "react";
import { Form, Button, Upload, Rate, Input, DatePicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../assets/css/AdminTemplate.css";
import { ChinhSuaPhimActionApi } from "../redux/actions/QuanLyPhimAction";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';


export default function ChinhSuaPhim(props) {
  const StatePhimReducer = useSelector((state) => state.QuanLyPhimReducer);

  let {  MaPhimChinhSua } = StatePhimReducer;

  const dispatch = useDispatch();

  const handleDispatchSuaPhim = async (form_data) => {
    props.handleOkEditPhim();
    dispatch( await ChinhSuaPhimActionApi(form_data));
  }

  const [form] = Form.useForm();

  const onReset = () => {
    setTimeout(()=>{
        form.resetFields();
    },3000)
  }

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
      <h1 className="title-manage">Chỉnh Sửa Thông Tin Phim</h1>
      <h2 className="title-manage">Mã Phim: '{MaPhimChinhSua}'</h2>
      <Form
        form={form}
        name="validate_other"
        {...formItemLayout}
        onFinish={(values) => {

          let formatNgayKhoiChieu = moment(values.ngayKhoiChieu).format('DD/MM/YYYY');
          
          const phim = {
            hinhAnh: values.hinhAnh[0].originFileObj,
            biDanh: values.biDanh,
            maPhim: MaPhimChinhSua,
            tenPhim: values.tenPhim,
            trailer: values.trailer,
            moTa: values.moTa,
            maNhom: "GP02",
            danhGia: (values.danhGia * 2),
            ngayKhoiChieu: formatNgayKhoiChieu,
          };

          let form_data = new FormData();
          for (let key in phim) {
            form_data.append(key, phim[key]);
          }

          handleDispatchSuaPhim(form_data);

          onReset();
        }}
        initialValues={{
          ['maNhom']: "GP02",
          ['tenPhim']: null,
          ['biDanh']: null,
          ['trailer']: null,
          ['moTa']: null,
          ['danhGia']: null,
        }}
      >
        <Form.Item
          label="Tên Phim"
          name="tenPhim"
          validateStatus="success"
          rules={[{ required: true, message: "Vui lòng nhập Tên Phim!" }]}
        >
          <Input
            placeholder="Tên Phim"
            id="success"
          />
        </Form.Item>

        <Form.Item
          label="Bí Danh"
          name="biDanh"
          validateStatus="success"
          rules={[{ required: true, message: "Vui lòng nhập Bí Danh!" }]}
        >
          <Input placeholder="Bí Danh" id="success"/>
        </Form.Item>

        <Form.Item
          label="Trailer"
          name="trailer"
          validateStatus="success"
          rules={[{ required: true, message: "Vui lòng nhập Trailer!" }]}
        >
          <Input
            placeholder="Trailer"
            id="success"
              
          />
        </Form.Item>

        <Form.Item
          name="hinhAnh"
          label="Hình Ảnh"
          valuePropName="file"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Vui lòng thêm Hình Ảnh!" }]}
        >
          <Upload name="hinhAnh" listType="picture" >
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
          rules={[{ required: true, message: "Vui chọn Ngày Khởi Chiếu!" }]}
        >
          <DatePicker
            placeholder="Ngày khởi chiếu"
            format={'DD/MM/yyyy'}
          />
        </Form.Item>

        <Form.Item name="danhGia" label="Đánh giá">
          <Rate />
        </Form.Item>

        <Form.Item name={"moTa"} label="Mô tả">
          <Input.TextArea placeholder="Mô tả"/>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 9 }}>
          <Button htmlType="submit">Chỉnh Sửa Phim</Button>
        </Form.Item>
      </Form>
    </>
  );
}
