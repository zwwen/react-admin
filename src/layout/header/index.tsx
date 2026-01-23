import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Dropdown, Button, Switch, Space } from "antd";
import storage from "@/utils/storage";
import type { MenuProps } from "antd";
import { useStore } from "@/store";
import styles from "./index.module.less";
import BreadCrumb from "./BreadCrumb";
export default function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { collapsed, updateCollapsed, isDark, updateTheme } = useStore();
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
  const toggleTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.dataset.theme = "light";
      document.documentElement.classList.remove("dark");
    }
    updateTheme(isDark);
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
        <BreadCrumb />
      </div>
      <div className={styles.right}>
        <Space>
          <Switch
            checkedChildren="暗黑"
            unCheckedChildren="默认"
            checked={isDark}
            onChange={toggleTheme}
          ></Switch>
          <Dropdown menu={{ items, onClick }} trigger={["click"]}>
            <span className={styles.nickName}>通用基础中台</span>
          </Dropdown>
        </Space>
      </div>
    </div>
  );
}
