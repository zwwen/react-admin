import { create } from "zustand";
export const UseStore = create<{
  collapsed: boolean;
  currentMenu: string;
  setCurrentMenu: (menu: string) => void;
  updateCollapsed: () => void;
}>((set) => ({
  collapsed: false,
  currentMenu: "/dashboard",
  setCurrentMenu: (menu: string) => set({ currentMenu: menu }),
  updateCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));
