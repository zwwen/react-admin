import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Dropdown, Button } from "antd";
import storage from "@/utils/storage";
import type { MenuProps } from "antd";
import { UseStore } from "@/store";
import styles from "./index.module.less";
export default function header() {
  const { collapsed, updateCollapsed } = UseStore();
  const items: MenuProps["items"] = [
    {
      key: "userInfo",
      label: "个人信息",
    },
    {
      key: "logout",
      label: "退出",
    },
  ];
  const onClick = ({ key }: { key: string }) => {
    if (key === "logout") {
      // 退出登录
      storage.remove("token");
      window.location.href = "/login";
    }
  };
  const toggleCollapsed = () => {
    updateCollapsed();
  };
  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          style={{
            fontSize: "16px",
            borderRadius: 0,
          }}
        />
      </div>
      <div className={styles.right}>
        <Dropdown menu={{ items, onClick }} trigger={["click"]}>
          <span className={styles.nickName}>通用基础中台</span>
        </Dropdown>
      </div>
    </div>
  );
}
