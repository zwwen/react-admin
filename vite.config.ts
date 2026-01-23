import { defineConfig, loadEnv, type ConfigEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import Inspect from "vite-plugin-inspect";
import path from "path";
import fs from "fs";
const preloadPaths = [
  "src/views/user/index.tsx",
  "src/views/role/index.tsx",
  "src/views/dept/index.tsx",
];
const prefetchUrls: string[] = [];

function prefetchUrlsPush() {
  const manifestPath = path.resolve("", "dist/.vite/manifest.json");
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
    preloadPaths.forEach((item) => {
      const itemPath = manifest[item].file;
      if (itemPath) {
        prefetchUrls.push("/" + itemPath);
      }
    });
  }
}
prefetchUrlsPush();
export const PrefetchLayzPlugins = (path: string[] = []) => {
  return {
    name: "vite-plugin-prefetch-lazy",
    transformIndexHtml(html: string) {
      if (!path.length) return;
      let prefetchstr = "";
      path.forEach((item) => {
        prefetchstr += `<link rel="prefetch" href="${item}" as="script">`;
      });
      return html.replace("</head>", prefetchstr + "</head>");
    },
  };
};
// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), "");

  return {
    build: {
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom", "react-router-dom"],
            "antd-vendor": ["antd"],
            "echarts-vendor": ["echarts"],
          },
        },
      },
    },
    plugins: [
      Inspect(),
      react(),
      PrefetchLayzPlugins(prefetchUrls),
      visualizer({
        open: true,
        filename: "stats.html",
      }),
    ],
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
