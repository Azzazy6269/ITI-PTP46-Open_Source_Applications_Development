import { create } from 'zustand'

export const useTheme = create((set) => ({
  theme: 'dark',
  toggleTheme : () => set((state) => ({theme: state.theme=='light'?'dark':'light'}))
}))