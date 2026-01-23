import { RouterProvider } from "react-router-dom";
import router from "@/router";
import { useStore } from "./store";
import { ConfigProvider, theme } from "antd";
function App() {
  const { isDark } = useStore();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
        },
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
