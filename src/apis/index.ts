import request from "@/utils/request";
import type {
  ILoginParams,
  IDeptSearchParams,
  IDept,
  IUser,
  IMenu,
  ICreateMenuParams,
  IEditMenuParams,
  IMenuSearchParams,
} from "@/types";
export default {
  // 登录接口
  login: (data: ILoginParams) => {
    return request.post("/users/login", data);
  },
  // 获取用户
  getUserList() {
    return request.get("/users/list");
  },
  getAllUserList() {
    return request.get<IUser[]>("/users/all/list");
  },
  // 获取部门列表
  getDeptList(params?: IDeptSearchParams) {
    return request.get<IDept[]>("/dept/list", params);
  },

  // 添加部门
  createDept(params: IDept) {
    return request.post("/dept/create", params);
  },
  // 修改部门
  updateDept(params: IDept) {
    return request.post("/dept/edit", params);
  },
  // 删除部门
  deleteDept(params: { _id: string }) {
    return request.post("/dept/delete", params);
  },

  // 获取菜单
  getMenuList(params: IMenuSearchParams) {
    return request.get<IMenu[]>("/menu/list", params);
  },
  // 创建菜单
  createMenu(params: ICreateMenuParams) {
    return request.post("/menu/create", params);
  },
  // 编辑菜单
  updateMenu(params: IEditMenuParams) {
    return request.post("/menu/edit", params);
  },
  // 删除菜单
  deleteMenu(params: { _id: string }) {
    return request.post("/menu/delete", params);
  },

  //   获取用户信息接口
  getUserInfo: () => {
    return request.get("/users/getUserInfo");
  },
  //   获取用户权限列表接口
  getUserAuthList() {
    return request.get("/users/getPermissionList");
  },
  // 获取角色
  getRoleList() {
    return request.get("/roles/list");
  },
};
