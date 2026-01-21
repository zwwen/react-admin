export interface IResponse<T> {
  code: number;
  msg: string;
  data: T;
}
// 登录模块
export interface ILoginParams {
  userName: string;
  userPwd: string;
}
// 部门模块
export interface IDeptSearchParams {
  deptName?: string;
}
export interface IDept {
  _id: string;
  createTime: string;
  updateTime: string;
  deptName: string;
  parentId: string;
  userName: string;
  children: IDept[];
}

// 用户模块
export interface IUser {
  _id: string;
  userId: number;
  userName: string;
  userEmail: string;
  deptId: string;
  state: number;
  mobile: string;
  job: string;
  role: number;
  roleList: string;
  createId: number;
  deptName: string;
  userImg: string;
}
// 菜单模块
// 创建菜单参数
export interface ICreateMenuParams {
  menuName: string; // 菜单名称
  icon?: string; // 菜单图标
  path: string; // 菜单路径
  menuType: number; // 菜单类型 1-菜单 2-按钮 3-页面
  menuCode: string; // 菜单权限标识
  parentId: string; // 上级菜单ID
  component: string; // 组件名称
  menuState: number; // 菜单状态 1-启用 2-禁用
  orderBy?: number; // 菜单排序 数值越小越靠前
  keepAlive?: boolean; // 是否缓存
  hidden?: boolean; // 是否隐藏
}
// 编辑菜单参数
export interface IEditMenuParams extends ICreateMenuParams {
  _id: string;
}
// 菜单列表
export interface IMenu extends ICreateMenuParams {
  _id: string;
  createTime: string;
  updateTime: string;
  buttons?: IMenu[];
  children?: IMenu[];
}
// 菜单搜索参数
export interface IMenuSearchParams {
  menuName?: string;
  menuState?: number; // 菜单状态 1-启用 2-禁用
}
