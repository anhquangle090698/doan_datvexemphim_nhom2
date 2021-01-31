import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space, Input, Popconfirm, Modal } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "../../assets/css/QuanLyTemplate.css";
import {
  layDanhSachPhimApiAction,
  MaPhimChinhSuaAction,
  xoaPhimApiAction,
  layThongTinHeThongCumRapActionApi,
  layThongTinHeThongRapActionApi
} from "../../redux/actions/QuanLyPhimAction";
import ThongTinLichChieu from "../../Components/ThongTinLichChieu";
import ChinhSuaPhim from "../../Components/ChinhSuaPhim";

export default function QuanLyPhim() {

  const dispatch = useDispatch();

  let [stateMaPhim, setStateMaPhim] = useState();

  const DanhSachPhimReducer = useSelector(
    (state) => state.QuanLyPhimReducer.danhSachPhim
  );

  useEffect(() => {
    dispatch(layDanhSachPhimApiAction());
    dispatch(layThongTinHeThongCumRapActionApi('BHDStar'));
    dispatch(layThongTinHeThongRapActionApi());
  },[]);


  
  //MODAL EDIT PHIM
  const [visiblePhim, setVisiblePhim] = useState(false);
  const [confirmLoadingPhim, setConfirmLoadingPhim] = useState(false);

  const showModalEditPhim = () => {
    setVisiblePhim(true);
  };

  const handleOkEditPhim = () => {
    setConfirmLoadingPhim(true);
    setTimeout(() => {
      setVisiblePhim(false);
      setConfirmLoadingPhim(false);
    }, 1000);
  };

  const handleCancelPhim = () => {
    setVisiblePhim(false);
  };

  //dispatch maPhim lên Reducer
  const handleChinhSuaPhim = () => {
    dispatch(MaPhimChinhSuaAction(stateMaPhim));
    showModalEditPhim();
  };

  //MODAL EDIT INFOMATION PHIM
  const [visibleInfor, setVisibleInfor] = useState(false);
  const [confirmLoadingInfor, setConfirmLoadingInfor] = useState(false);

  const showModalInforPhim = () => {
    setVisibleInfor(true);
  };

  const handleOkEditInfor = () => {
    setConfirmLoadingInfor(true);
    
    setTimeout(() => {
      setVisibleInfor(false);
      setConfirmLoadingInfor(false);
    }, 2000);
  };

  const handleCancelInfor = () => {
    setVisibleInfor(false);
  };

  const handleAddPhim = () => {
    dispatch(MaPhimChinhSuaAction(stateMaPhim));
    showModalInforPhim();
  };

  //BUTTON DELETE
  const handleOkDelete = async () => {
    dispatch(await xoaPhimApiAction(stateMaPhim));
  };

  //INPUT SEARCH
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
      width: 120,
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
      fixed: "left",
    },
    {
      title: "Bí Danh",
      width: 100,
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
          <Popconfirm
            title={`THÊM LỊCH CHIẾU MÃ PHIM: ${stateMaPhim}?`}
            icon={<EditOutlined />}
            onConfirm={handleAddPhim}
          >
            <button
              className="btn-action btn-radius"
            >
              Thêm lịch chiếu
            </button>
          </Popconfirm>

          <Popconfirm
            title={`XÓA MÃ PHIM ${stateMaPhim}?`}
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
            title={`SỬA MÃ PHIM ${stateMaPhim}?`}
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
          pagination={{ pageSize: 3 }}
          onRow={(phim) => {
            return {
              onClick: (e) => {
                setStateMaPhim(phim.maPhim);
              },
            };
          }}
          rowKey={(e) => e.maPhim}
        />
      </div>

      <Modal
        visible={visibleInfor}
        onOk={handleOkEditInfor}
        confirmLoading={confirmLoadingInfor}
        onCancel={handleCancelInfor}
        width={800}
      >
        <ThongTinLichChieu />
      </Modal>

      <Modal
        visible={visiblePhim}
        onOk={handleOkEditPhim}
        confirmLoading={confirmLoadingPhim}
        onCancel={handleCancelPhim}
        width={800}
      >
        <ChinhSuaPhim handleOkEditPhim={handleOkEditPhim} />
      </Modal>
    </>
  );
}
