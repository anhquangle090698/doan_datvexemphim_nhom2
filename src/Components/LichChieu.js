import React, { useState } from "react";
import { Tabs, Table  } from "antd";
import { useSelector } from "react-redux";
import '../assets/css/QuanLyTemplate.css'

const { TabPane } = Tabs;

export default function LichChieu() {
  const { thongTinLichChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const [stateHeThongRap, setStateHeThongRap] = useState(0);
  const [stateCumRap, setStateCumRap] = useState(0);

  const title = [
    {
      title: 'Mã Lịch Chiếu',
      dataIndex: 'maLichChieu',
      key: 'maLichChieu',
    //   render: text => <a>{text}</a>,
    },
    {
      title: 'Mã Rạp',
      dataIndex: 'maRap',
      key: 'maRap',
    },
    {
      title: 'Tên Rạp',
      dataIndex: 'tenRap',
      key: 'tenRap',
    },
    {
      title: 'Ngày Chiếu Giờ Chiếu',
      dataIndex: 'ngayChieuGioChieu',
      key: 'ngayChieuGioChieu',
    },
    {
      title: 'Giá Vé',
      dataIndex: 'giaVe',
      key: 'giaVe',
    },
    {
      title: 'Thời Lượng',
      dataIndex: 'thoiLuong',
      key: 'thoiLuong',
    },
  ];

  const dataLichChieu = thongTinLichChieu.heThongRapChieu[stateHeThongRap]?.cumRapChieu[stateCumRap]?.lichChieuPhim;

//   console.log(thongTinLichChieu.heThongRapChieu[stateHeThongRap].cumRapChieu[stateCumRap].lichChieuPhim);

  const changeHeThongRap = (heThong) => {
      setStateHeThongRap(heThong);
  };

  const changeCumRap = (cumRap) => {
    setStateCumRap(cumRap);
  }

  
  

  const renderCumRapChieu = () => {
    return thongTinLichChieu?.heThongRapChieu[stateHeThongRap]?.cumRapChieu?.map(
      (cumRap, index) => {
        return (
          <TabPane tab={cumRap.tenCumRap} key="2">
           <Table columns={title} dataSource={dataLichChieu} />
          </TabPane>
        );
      }
    );
  };

  const renderTabHeThongRap = () => {
    return thongTinLichChieu.heThongRapChieu?.map((infor, index) => {
      return (
        <TabPane
          tab={
            <span>
              <img
                src={infor.logo}
                alt={infor.logo}
                style={{ width: 50, height: 50, marginRight: "10px" }}
              ></img>
              {infor.tenHeThongRap}
            </span>
          }
          key={index}
        >
          <Tabs onChange={changeCumRap}>{renderCumRapChieu()}</Tabs>
        </TabPane>
      );
    });
  };

  return (
    <>
      <Tabs tabPosition={"left"} onChange={changeHeThongRap} defaultActiveKey={0}>
        {renderTabHeThongRap()}
      </Tabs>
    </>
  );
}
