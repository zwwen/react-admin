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
  ResultData,
  IRole,
  IRoleCreateParams,
  IRoleEditParams,
  IRoleSearchParams,
  IPermission,
  IUserSearchParams,
  IReportData,
  ILineData,
  IPieData,
  IRadarData,
} from "@/types";
export default {
  // 用户信息模块接口
  // 登录接口
  login: (data: ILoginParams) => {
    return request.post("/users/login", data);
  },
  //   获取用户信息接口
  getUserInfo() {
    return request.get<IUser>("/users/getUserInfo");
  },
  //   获取用户权限列表接口
  getPermissionList() {
    return request.get<{ menuList: IMenu[]; buttonList: string[] }>(
      "/users/getPermissionList"
    );
  },
  // 用户管理模块接口
  // 获取用户列表
  getUserList(params: IUserSearchParams) {
    return request.get<ResultData<IUser>>("/users/list", params);
  },
  // 获取所有用户列表
  getAllUserList() {
    return request.get<IUser[]>("/users/all/list");
  },
  // 用户头像上传
  uploadAvatar(params: FormData) {
    return request.post("/users/upload", params);
  },
  // 添加用户
  createUser(params: ICreateMenuParams) {
    return request.post("/users/create", params);
  },
  // 修改用户
  updateUser(params: IEditMenuParams) {
    return request.post("/users/edit", params);
  },
  // 删除用户
  deleteUser(params: { userIds: number[] }) {
    return request.post("/users/delete", params);
  },
  // 部门管理模块接口
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
  // 菜单管理模块接口
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

  // 角色管理模块接口
  // 获取所有角色列表
  getAllRoleList() {
    return request.get<IRole[]>("/roles/allList");
  },
  // 获取角色
  getRoleList(params: IRoleSearchParams) {
    return request.get<ResultData<IRole>>("/roles/list", params);
  },
  // 删除角色
  deleteRole(params: { _id: string }) {
    return request.post("/roles/delete", params);
  },
  // 创建角色
  createRole(params: IRoleCreateParams) {
    return request.post("/roles/create", params);
  },
  // 设置权限
  setPermission(params: IPermission) {
    return request.post("/roles/update/permission", params);
  },
  // 编辑角色
  updateRole(params: IRoleEditParams) {
    return request.post("/roles/edit", params);
  },

  // 工作台模块接口
  getReportData() {
    return request.get<IReportData>("/order/dashboard/getReportData");
  },
  getLineData() {
    return request.get<ILineData>("/order/dashboard/getLineData");
  },
  getPieCityData() {
    return request.get<IPieData>("/order/dashboard/getPieCityData");
  },
  getPieAgeData() {
    return request.get<IPieData>("/order/dashboard/getPieAgeData");
  },
  getRadarData() {
    return request.get<IRadarData>("/order/dashboard/getRadarData");
  },
};
