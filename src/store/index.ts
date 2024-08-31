import { create } from "zustand";

type appState = {
  value: number;
  setValue: (val: number) => void;
  loading: boolean;
  setLoading: (val: boolean) => void;
  infoData: any;
  setInfoData: (val: any) => void;
};
const useStore = create<appState>((set) => ({
  value: 0,
  setValue: (val) => set({ value: val }),
  loading: false,
  setLoading: (val) => set({ loading: val }),
  infoData: null,
  setInfoData: (val) => set({ infoData: val }),
}));

export default useStore;
