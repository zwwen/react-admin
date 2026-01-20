import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Sider } = Layout;
import { UseStore } from "@/store";
import styles from "./index.module.less";
import SiderMenu from "./menu";
import NavHeader from "./header";
import Footer from "./footer";
const LayoutCon: React.FC = () => {
  const { collapsed } = UseStore();
  return (
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
  );
};
export default LayoutCon;
