import React from "react";
import { Layout, Menu, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

import Employee from "./empolyee";
// import Setting from "./setting";
import "./App.css";

const { Header, Content, Footer } = Layout;

const App = () => {
  const menuItems = [
    {
      label: "员工管理",
      key: "employee",
    },
    {
      label: "系统设置",
      key: "setting",
    },
  ];
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["employee"]}
            items={menuItems}
            className="menu"
          ></Menu>
        </Header>
        <Content>
          <div>
            <Employee>{/* <Setting> */}</Employee>
          </div>
        </Content>
        <Footer className="footer">TypeScript in Action</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
