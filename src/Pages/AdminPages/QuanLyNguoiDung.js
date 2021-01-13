import React, { useEffect } from "react";
import { Table, Space, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "../../assets/css/QuanLyTemplate.css";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachNguoiDungApiAction } from "../../redux/actions/QuanLyNguoiDungActions";

export default function QuanLyNguoiDung() {
  const DanhSachNguoiDung = useSelector(
    (state) => state.QuanLyPhimReducer.danhSachNguoiDung
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungApiAction());
  }, []);

  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  //Table antDesign
  const title = [
    {
      title: "Tài Khoản",
      width: 60,
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      fixed: "left",
    },
    {
      title: "Họ Tên",
      width: 80,
      dataIndex: "hoTen",
      key: "hoTen",
      fixed: "left",
    },
    {
      title: "Email",
      width: 120,
      dataIndex: "email",
      key: "email",
      fixed: "left",
    },
    {
      title: "Số Điện Thoại",
      width: 80,
      dataIndex: "soDt",
      key: "soDt",
      fixed: "left",
    },
    {
      title: "Mật Khẩu",
      width: 70,
      dataIndex: "matKhau",
      key: "matKhau",
      fixed: "left",
    },
    {
      title: "Loại Người Dùng",
      width: 100,
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      fixed: "left",
    },
    {
      title: "Phương Thức",
      key: "PhuongThuc",
      fixed: "right",
      width: 160,
      render: () => (
        <Space size="middle">
          <button className="btn-action btn-radius">
            Thông tin Người Dùng
          </button>
          <button className="btn-action-1">
            <span>
              <DeleteOutlined />
            </span>
          </button>
          <button className="btn-action-1">
            <span>
              <EditOutlined />
            </span>
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1 className="title-manage">Quản Lý Người Dùng</h1>
      <div className="container-search">
        <Search
          placeholder="Tìm Kiếm"
          onSearch={onSearch}
          enterButton
          ghost="false"
        />
      </div>
      <div className="container-table">
        <Table
          bordered
          columns={title}
          dataSource={DanhSachNguoiDung}
          scroll={{ x: 1300 }}
        />
      </div>
    </>
  );
}
