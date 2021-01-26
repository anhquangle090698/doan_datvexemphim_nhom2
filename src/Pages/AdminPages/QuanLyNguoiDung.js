import React, { useEffect, useState } from "react";
import { Table, Space, Input, Popconfirm, Modal } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "../../assets/css/QuanLyTemplate.css";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachNguoiDungApiAction, taiKhoan, xoaNguoiDungApiAction } from "../../redux/actions/QuanLyNguoiDungAction";
import ChinhSuaNguoiDung from "../../Components/ChinhSuaNguoiDung";

export default function QuanLyNguoiDung() {

  const DanhSachNguoiDung = useSelector(
    (state) => state.QuanLyNguoiDungReducer.danhSachNguoiDung
  );

  let [stateTaiKhoan, setStateTaiKhoan] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungApiAction());
  }, []);

  //MODAL EDIT
  const [visibleEditNguoiDung, setVisibleEditNguoiDung] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  
  const showEditNguoiDungModal = () => {
    setVisibleEditNguoiDung(true);
  };

  const handleOkEditNguoiDung = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisibleEditNguoiDung(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setVisibleEditNguoiDung(false);
  };

  //dispatch taiKhoan lên Reducer
  const handleChinhSuaPhim = () => {
    dispatch(taiKhoan(stateTaiKhoan))
    showEditNguoiDungModal();
  };

  //BUTTON DELETE
  const handleOkDelete = async () => {
    dispatch(await xoaNguoiDungApiAction(stateTaiKhoan));
  };

  //INPUT SEARCH
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  //Table antDesign
  const title = [
    {
      title: "Tài Khoản",
      width: 100,
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
      width: 60,
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      fixed: "left",
    },
    {
      title: "Phương Thức",
      key: "PhuongThuc",
      fixed: "right",
      width: 75,
      render: () => (
        <Space align="center" size="large">
          <Popconfirm
            title={`XÓA TÀI KHOẢN ${stateTaiKhoan}?`}
            icon={<DeleteOutlined />}
            onConfirm={handleOkDelete}
          >
            <button className="btn-action-1">
              <span>
                <DeleteOutlined />
              </span>
            </button>
          </Popconfirm>
          <Popconfirm
            title={`SỬA TÀI KHOẢN ${stateTaiKhoan}?`}
            icon={<EditOutlined />}
            onConfirm={handleChinhSuaPhim}
          >
            <button className="btn-action-1">
            <span>
              <EditOutlined />
            </span>
          </button>
          </Popconfirm>
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
          ghost= {false}
        />
      </div>
      <div className="container-table">
        <Table
          bordered
          columns={title}
          pagination={{ pageSize: 7 }}
          dataSource={DanhSachNguoiDung}
          scroll={{ x: 1300 }}
          onRow={(user) => {
            return {
              onClick: (e) => {
                setStateTaiKhoan(user.taiKhoan);
              },
            };
          }}
          rowKey={(e) => e.taiKhoan}
        />
      </div>
      <Modal
        visible={visibleEditNguoiDung}
        onOk={handleOkEditNguoiDung}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={800}
      >
        <ChinhSuaNguoiDung handleOkEditNguoiDung={handleOkEditNguoiDung}/>
      </Modal>
    </>
  );
}
