import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Layout, Menu, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

import Employee from "./empolyee";
import Setting from "./setting";
import "./App.css";

const { Header, Content, Footer } = Layout;

const App = ({ match }: any) => {
  let defaultKey = match.url.replace("/", "") || "employee";
  const history = useHistory();
  // antd v5 Menu子菜单项 推荐写法
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
  const onClick = (val) => {
    // 点击菜单后路由跳转
    history.push({
      pathname: `/${val.key}`,
      state: { test: "dashboard" },
    });
  };
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={defaultKey}
            items={menuItems}
            onClick={onClick}
            className="menu"
          ></Menu>
        </Header>
        <Content>
          <div>
            <Route path="/" exact component={Employee} />
            <Route path="/employee" component={Employee} />
            <Route path="/setting" component={Setting} />
          </div>
        </Content>
        <Footer className="footer">TypeScript in Action</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
