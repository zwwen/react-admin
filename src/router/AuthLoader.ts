import api from "@/apis";
import { getMenuPath } from "@/utils";
export default async function AuthLoader() {
  const data = await api.getPermissionList();
  const { menuList, buttonList } = data;
  const menuPathList = getMenuPath(menuList);
  console.log(menuPathList);
  return {
    menuList,
    buttonList,
    menuPathList,
  };
}
