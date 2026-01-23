import { useState, useEffect, type ReactNode } from "react";
import { Breadcrumb } from "antd";
import { findTreeNode } from "@/utils";
import { useLocation, useRouteLoaderData } from "react-router-dom";
export default function BreadCrumb() {
  const { pathname } = useLocation();
  const [breadList, setBreadList] = useState<(string | ReactNode)[]>([]);
  const data = useRouteLoaderData("layout");
  useEffect(() => {
    const list = findTreeNode(data.menuList, pathname, []);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBreadList([<a href="/welcome">首页</a>, ...list]);
  }, [pathname]);
  return <Breadcrumb items={breadList.map((item) => ({ title: item }))} />;
}
