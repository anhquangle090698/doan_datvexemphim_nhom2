import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space, Input, Popconfirm } from "antd";
import {
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
import "../../assets/css/QuanLyTemplate.css";
import {
  layDanhSachPhimApiAction,
  xoaPhimApiAction,
} from "../../redux/actions/QuanLyPhimActions";

export default function QuanLyPhim() {

  const DanhSachPhimReducer = useSelector(
    (state) => state.QuanLyPhimReducer.danhSachPhim
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimApiAction());
  }, []);

  const handleOk = ()=>{
    console.log('onConfirm');
  };

  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const title = [
    {
      title: "Mã Phim",
      width: 60,
      dataIndex: "maPhim",
      key: "maPhim",
      fixed: "left",
    },
    {
      title: "Tên Phim",
      width: 80,
      dataIndex: "tenPhim",
      key: "tenPhim",
      fixed: "left",
    },
    {
      title: "Hình Ảnh",
      width: 145,
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      fixed: "left",
      render: (hinhAnh) => (
        <img src={hinhAnh} alt={hinhAnh} className="img-style"></img>
      ),
    },
    {
      title: "Mô tả",
      width: 120,
      dataIndex: "moTa",
      key: "moTa",
      fixed: "left",
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: "Ngày Khởi Chiếu",
      width: 110,
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
      fixed: "left",
    },
    {
      title: "Bí Danh",
      width: 80,
      dataIndex: "biDanh",
      key: "biDanh",
      fixed: "left",
    },
    {
      title: "Trailer",
      width: 80,
      dataIndex: "trailer",
      key: "trailer",
      fixed: "left",
      ellipsis: {
        showTitle: true,
      },
      render: (trailer) => <span>{trailer}</span>,
    },
    {
      title: "Mã nhóm",
      width: 65,
      dataIndex: "maNhom",
      key: "maNhom",
      fixed: "left",
    },
    {
      title: "Đánh giá",
      width: 60,
      dataIndex: "danhGia",
      key: "danhGia",
      fixed: "left",
    },
    {
      title: "Phương Thức",
      key: "PhuongThuc",
      fixed: "right",
      width: 195,
      render: () => (
        <Space size="middle">
          <button className="btn-action btn-radius">
            Thông tin lịch chiếu
          </button>

          <Popconfirm title="Are you sure？" icon={<DeleteOutlined />} onConfirm={handleOk}>
            <button className="btn-action-1">
              <span>
                <DeleteOutlined />
              </span>
            </button>
          </Popconfirm>

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
      <h1 className="title-manage">Quản Lý Phim</h1>
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
          dataSource={DanhSachPhimReducer}
          scroll={{ x: 1300 }}
          onRow={(phim, index) => {
            return {
              onClick: (e) => {
                console.log(phim.maPhim);
              },
            };
          }}
          rowKey={(e) => e.maPhim}
        />
      </div>
    </>
  );
}
