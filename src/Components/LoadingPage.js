import React from "react";
import "../assets/scss/main.scss";

export default function LoadingPage(props) {
  return (
    <>
      <div className="loading">
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      
      </div>
    </>
  );
}
