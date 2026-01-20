import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    // 配置别名
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    // 设置代理
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BASE_URL || "http://localhost:3000", // 使用加载的环境变量
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
