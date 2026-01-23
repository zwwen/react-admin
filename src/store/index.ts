import type { IUser } from "@/types";
import { create } from "zustand";
export const useStore = create<{
  collapsed: boolean;
  currentMenu: string;
  userInfo: IUser;
  isDark: boolean;
  setCurrentMenu: (menu: string) => void;
  updateCollapsed: () => void;
  updateUserInfo: (userInfo: IUser) => void;
  updateTheme: (isDark: boolean) => void;
}>((set) => ({
  collapsed: false,
  currentMenu: "/dashboard",
  userInfo: {
    _id: "",
    userId: 0,
    userName: "",
    userEmail: "",
    deptId: "",
    state: 0,
    mobile: "",
    job: "",
    role: 0,
    roleList: "",
    createId: 0,
    deptName: "",
    userImg: "",
  },
  isDark: false,
  setCurrentMenu: (menu: string) => set({ currentMenu: menu }),
  updateCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  updateUserInfo: (userInfo: IUser) => set({ userInfo }),
  updateTheme: (isDark: boolean) => set({ isDark }),
}));
