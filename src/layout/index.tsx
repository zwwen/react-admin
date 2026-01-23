import {
  Outlet,
  useLocation,
  useRouteLoaderData,
  Navigate as Navigator,
} from "react-router-dom";
import { Layout, Watermark } from "antd";
const { Sider } = Layout;
import { useStore } from "@/store";
import styles from "./index.module.less";
import SiderMenu from "./Menu";
import NavHeader from "./Header";
import Footer from "./Footer";
import api from "@/apis";
import { useEffect } from "react";
import { searchRoute } from "@/utils";
import { router } from "@/router";
const LayoutCon: React.FC = () => {
  const { collapsed, updateUserInfo } = useStore();
  const getUserInfoData = async () => {
    const data = await api.getUserInfo();
    updateUserInfo(data);
  };
  useEffect(() => {
    getUserInfoData();
  }, []);
  // 获取当前路
  const { pathname } = useLocation();
  const { menuPathList } = useRouteLoaderData("layout");
  const staticPathList = ["/login", "/403", "/welcome", "/notfound"];
  const route = searchRoute(pathname, router);
  // pathname
  if (route && route.meta?.auth) {
    // 需要鉴权 处理自己的逻辑
  }
  if (!menuPathList.includes(pathname) && !staticPathList.includes(pathname)) {
    return <Navigator to="/403" />;
  }
  // 布局组件，包含头部、侧边栏和底部导航等部分
  return (
    <Watermark content="React18 基础中台">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SiderMenu />
        </Sider>
        <Layout>
          <NavHeader />
          <div className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet />
            </div>
            <Footer />
          </div>
        </Layout>
      </Layout>
    </Watermark>
  );
};
export default LayoutCon;
