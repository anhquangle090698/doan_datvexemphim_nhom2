import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import logo from "../assets/img/logo-600x600_g2.png";
import "antd/dist/antd.css";
import { Layout, Menu, BackTop } from "antd";
import {
  TeamOutlined,
  OrderedListOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
import "../assets/css/AdminTemplate.css";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };
  


  const { Component, ...restParams } = props;
  return (
    <Route
      {...restParams}
      render={(propsRoute) => {
        return (
          <>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsible
                collapsed={state.collapsed}
                onCollapse={onCollapse}
              >
                <Menu defaultSelectedKeys={["3"]} mode="inline">
                  <div className="information-user">
                    <img
                      className="header__logo"
                      src={logo}
                    />
                    {!state.collapsed ? (
                      <div className="name-user">Cybersoft</div>
                    ) : (
                      <div className="name-user-small">Cybersoft</div>
                    )}
                  </div>
                  <SubMenu key="sub1" icon={<MediumOutlined />} title="Movie">
                    <Menu.Item key="3">
                      <NavLink
                        className="text-orange"
                        to="/admin/quan-ly-phim"
                      >
                        Quản lý phim
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                    <NavLink
                        className="text-orange"
                        to="/admin/them-phim"
                      >
                        Thêm phim
                      </NavLink></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<TeamOutlined />}
                    title="Người Dùng"
                  >
                    <Menu.Item key="6">
                      <NavLink
                        className="text-orange"
                        to="/admin/quan-ly-nguoi-dung"
                      >
                        Quản lý
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="7">
                    <NavLink
                        className="text-orange"
                        to="/admin/them-nguoi-dung"
                      >
                        
                        Thêm người dùng
                      </NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <MenuItem key="8" icon={<OrderedListOutlined />}>
                    <NavLink to="/admin" className="text-orange">
                      Quản Lý Lịch Chiếu
                    </NavLink>
                  </MenuItem>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Content style={{ margin: "16px" }}>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  >
                    
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>G2 Design ©2021</Footer>
              </Layout>
            </Layout>
            <BackTop />
            <strong className="site-back-top-basic"> gray </strong>
          </>
        );
      }}
    />
  );
};
