import {create} from 'zustand';

const useLayoutStore = create((set) => ({
  isMobileNavOpen: false,
  isDesktopSidebarExpanded: false,
  toggleMobileNav: () => set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
  setDesktopSidebarExpanded: (isExpanded) => set({ isDesktopSidebarExpanded: isExpanded }),
}));

export default useLayoutStore;
