import { create } from "zustand";

type appState = {
  value: number;
  setValue: (val: number) => void;
};
const useStore = create<appState>((set) => ({
  value: 0,
  setValue: (val) => set({ value: val }),
}));

export default useStore;
