
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space, Input, Popconfirm, Modal } from "antd";
import {  InfoCircleOutlined } from "@ant-design/icons";
import "../../assets/css/QuanLyTemplate.css";
import {
  layDanhSachPhimApiAction,
  thongTinLichChieuActionApi,
} from "../../redux/actions/QuanLyPhimAction";
import LichChieu from "../../Components/LichChieu";

export default function QuanLyLichChieu() {

  const dispatch = useDispatch();

  let [stateMaPhim, setStateMaPhim] = useState();

  const DanhSachPhimReducer = useSelector(
    (state) => state.QuanLyPhimReducer.danhSachPhim
  );

  useEffect(() => {
    dispatch(layDanhSachPhimApiAction());
  },[]);

  //MODAL SHOW INFOMATION PHIM
  const [visibleInfor, setVisibleInfor] = useState(false);
  const [confirmLoadingInfor, setConfirmLoadingInfor] = useState(false);

  const showModalInforPhim = () => {
    setVisibleInfor(true);
  };

  const handleOkInfor = () => {
    setConfirmLoadingInfor(true);
    
    setTimeout(() => {
      setVisibleInfor(false);
      setConfirmLoadingInfor(false);
    }, 2000);
  };

  const handleCancelInfor = () => {
    setVisibleInfor(false);
  };

  const handleInforPhim =  () => {
    dispatch(thongTinLichChieuActionApi(stateMaPhim));
    setTimeout(()=>{
        showModalInforPhim();
    },200)
    
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
      width: 60,
      dataIndex: "tenPhim",
      key: "tenPhim",
      fixed: "left",
    },
    {
      title: "Hình Ảnh",
      width: 65,
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      fixed: "left",
      render: (hinhAnh) => (
        <img src={hinhAnh} alt={hinhAnh} className="img-style"></img>
      ),
    },
    {
      title: "Phương Thức",
      key: "PhuongThuc",
      fixed: "right",
      width: 60,
      render: () => (
        <Space size="middle">
          <Popconfirm
            title={`THÔNG TIN LỊCH CHIẾU MÃ PHIM: ${stateMaPhim}?`}
            icon={<InfoCircleOutlined />}
            onConfirm={handleInforPhim}
          >
            <button
              className="btn-action btn-radius"
            >
              Thông Tin lịch chiếu
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  
  return (
    <>
      <h1 className="title-manage">Quản Lý Lịch Chiếu</h1>
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
          pagination={{ pageSize: 5 }}
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
        onOk={handleOkInfor}
        confirmLoading={confirmLoadingInfor}
        onCancel={handleCancelInfor}
        width={1600}
      >
        <LichChieu />
      </Modal>
    </>
  );
}
