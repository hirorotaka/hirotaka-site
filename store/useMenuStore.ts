import { create } from 'zustand';

interface MenuStore {
  isOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  openMobileMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMobileMenu: () => set({ isOpen: false }),
}));
