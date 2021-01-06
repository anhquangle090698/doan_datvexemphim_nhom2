import React from "react";
import DetailInformationUser from "../../Components/DetailInformationUser";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Popup from "../../Components/Popup";
import ScrollToTop from "../../Components/ScrollToTop";

export default function CustomerInformation(props) {
  return (
    <>
      <div className="customerInformationPage">
        <Header></Header>
        <DetailInformationUser></DetailInformationUser>
        <Footer></Footer>

        <Popup></Popup>
        <ScrollToTop></ScrollToTop>
      </div>
    </>
  );
}
